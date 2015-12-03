
const app = require('../../app/interface.js');
var onBasicRequest = require('./events/onBasicRequest.js')

module.exports = {

  start: function()
  {
    //Bind all the OnRequest Functions to the Server
    for(var i=0; i<onBasicRequest.length; i++){
      app.Events.on('basic', onBasicRequest[i]);
    }
  }
  
};
