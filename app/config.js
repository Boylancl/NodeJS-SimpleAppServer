const serverInstance = require('../server/interface.js');

const emitter = require('./emitter.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = {
  OutEvents: emitter.EventEmitter
  ,EventHandlers: [
    onRequestStart
  ]
  ,Server: serverInstance
};
