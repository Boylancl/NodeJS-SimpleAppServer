const serverInstance = require('../server/interface.js');

const EventEmitter = require('events');
const appEmitter = new EventEmitter.EventEmitter();

var onRequestStart = require('./events/onRequestStart.js');

module.exports = {
  EventHandlers: [
    onRequestStart
  ]
  ,ParentEvents: serverInstance.OutEvents
  ,EventEmitter: appEmitter

};
