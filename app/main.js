var onRequestStart = require('./events/onRequestStart.js');

module.exports = {

  start: function(config)
  {
    //Bind all the OnRequest Functions to the Server
    for(var i=0; i<onRequestStart.Handlers.length; i++){
      config.server.Events.on(onRequestStart.EventName, onRequestStart.Handlers[i]);
    }
  }

};
