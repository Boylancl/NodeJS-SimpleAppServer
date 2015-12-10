const server = require('../server/interface.js');

const EventEmitter = require('events');

const outEmitter = new EventEmitter.EventEmitter();

var onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  this.events = [
    new onRequestStart({
      out: config.channels.out
    })
  ];
  this.interface = {
    channels: {
      out: config.channels.out
    }
  };
  this.channels = config.channels;
};
