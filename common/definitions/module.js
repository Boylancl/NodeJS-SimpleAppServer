
const getRoute = require('../methods/module/getRoute.js');
const wireRoutes = require('../methods/module/wireRoutes.js');
const listenOn = require('../methods/module/listenOn.js');

const eventBase = require('events').EventEmitter;

module.exports = function(initScope){
  //Members
  this.name = initScope.name;

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

  this.buildTransmitter = function(instance, listenFor, channel){
    return function()
    {
      var module = this;
      instance.channels[channel].emit(listenFor, module.outBuffer);
    }
  }

  //Routing Method to process requests
  this.getRoute = function(request, channel){
    //Get the first tier routing value
    return getRoute(request, channel, this.tier);
  };

};
