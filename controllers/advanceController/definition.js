
const appInstance = require('../../app/interface.js');

var onAdvanceRequest = require('./events/onAdvanceRequest.js')

module.exports = {
  EventHandlers: [
    onAdvanceRequest
  ]
  ,ParentEvents: appInstance.channels.out
};
