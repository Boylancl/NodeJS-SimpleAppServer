const server = require('../server/interface.js');

const EventEmitter = require('events');

const outEmitter = new EventEmitter.EventEmitter();

var onRequestStart = require('./events/onRequestStart.js');

module.exports = {
  events: [
    new onRequestStart({
      out: outEmitter
    })
  ]
  ,channels: {
    in: server.channels.out
    ,out: outEmitter
  }
};
