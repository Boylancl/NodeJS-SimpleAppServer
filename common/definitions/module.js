
const listenOn = require('../methods/module/listenOn.js');
const isSignalInChannel = require('../methods/module/isSignalInChannel.js');

const eventBase = require('events').EventEmitter;

module.exports = function(initSetttings){

  this.listenOn = function (channelName, signal, actions) {
    if(!(channelName in this)){
      this[channelName] = new eventBase();
    }
    //wire the actions to the proper channel
    listenOn(signal, this[channelName], actions);
  }

};
