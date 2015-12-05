const EventEmitter = require('events');
const appEmitter = new EventEmitter.EventEmitter();

module.exports =
{
  EventEmitter: appEmitter
};
