const server = require('../server/interface.js');

const EventEmitter = require('events');

const outEmitter = new EventEmitter.EventEmitter();

var onRequestStart = require('./events/onRequestStart.js');

module.exports = {
  events: {
    'request': function(request, response){
      for(var i=0; i<onRequestStart.length; i++){
        onRequestStart[i](outEmitter, request, response);
      }
    }
  }
  ,channels: {
    in: server.channels.out
    ,out: outEmitter
  }
};
