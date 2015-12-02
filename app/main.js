
const server = require('../server/interface.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = {

  start: function()
  {
    //Bind all the OnRequest Functions to the Server
    for(var i=0; i<onRequestStart.length; i++){
      server.instance.on('request', onRequestStart[i]);
    }
    //Make sure

  }
};
