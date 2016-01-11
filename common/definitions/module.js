
const getRoute = require('../methods/module/getRoute.js');
const wireRoutes = require('../methods/module/wireRoutes.js');
const listenOn = require('../methods/module/listenOn.js');

const eventBase = require('events').EventEmitter;

module.exports = function(config){
  //Members
  this.name = config.name;

  //Create basic channels
  this.channels = {
    'out': new eventBase()
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
      listenOn(eventName, this.channel[channelName], actions);
    }

  }

  //Routing Method to process requests
  this.getRoute = function(request, channel){
    //Get the first tier routing value
    return getRoute(request, channel, this.tier);
  };

};
