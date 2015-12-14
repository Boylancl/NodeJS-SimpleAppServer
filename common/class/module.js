const listenOn = require('../eventMethods/listenOn.js');

module.exports = function(config){

  this.channels = {
    out: new config.eventBase()
    ,in: config.parent.channels.out
  };

  this.listenOn = listenOn;

};
