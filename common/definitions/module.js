
const getRoute = require('../methods/module/getRoute.js');
const wireRoutes = require('../methods/module/wireRoutes.js');
const listenOn = require('../methods/module/listenOn.js');
const util = require('util');

const eventBase = require('events').EventEmitter;

module.exports = function(initSetttings){
  //Create a buffer for outgoing objects
  this.outBuffer = {};

  //Create basic channels
  this.channels = {
    'out': new eventBase()
    ,'in': new eventBase()
    ,'notifications': new eventBase()
  };

  this.listenOn = function (eventName, channelName, actions) {
    if(!(channelName in this.channels)){
      //No channel exists
      this.channels['notifications'].emit('error'
        ,"Channel: " + channelName + " could not be found!");
    }
    else{
      //wire the actions to the proper channel
      listenOn(eventName, this.channels[channelName], actions);
    }
  }

  this.buildTransmitter = function(instance, signal, channel){
    var module = this;
    return function()
    {
      console.log("Fired %s at %s from %s.", signal, instance.name, module.name);
      instance.channels[channel].emit(signal, module.outBuffer);

    }
  }

  //Routing Method to process requests
  this.getRoute = function(request, channel){
    //Get the first tier routing value
    return getRoute(request, channel, this.tier);
  }

  this.out = function(data){
    this.outBuffer = data;

    console.log('%s on %s', data.signal, this.name);

    this.channels.out.emit(data.signal);
  }

};
