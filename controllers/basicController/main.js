
const app = require('../../app/interface.js');
var onBasicRequest = require('./events/onBasicRequest.js')

module.exports = {

  start: function(config)
  {
    //Bind all the OnRequest Functions to the Server
    for(var i=0; i<onBasicRequest.Handlers.length; i++){
      app.Events.on(onBasicRequest.EventName, onBasicRequest.Handlers[i]);
    }
  }

};
