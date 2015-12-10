const EventEmitter = require('events');
const outEmitter = new EventEmitter.EventEmitter();

const server = require('../server/interface.js');


module.exports = {
  channels:{
    out: outEmitter
    in: server.channels.out
  }
  ,events: {
    'request' : require('./events/onRequestStart.js')
  }

}
