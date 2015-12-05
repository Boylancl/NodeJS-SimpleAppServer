
const appInstance = require('../../app/interface.js');

var onBasicRequest = require('./events/onBasicRequest.js')

module.exports = {
  EventHandlers: [
    onBasicRequest
  ]
  ,ParentEvents: appInstance.OutEvents
};
