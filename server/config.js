const createHttpServer = require('../common/methods/server/createBasicHTTPServer.js');
var config = require('../common/config/moduleConfig.js');
var onRequestStart = require('./events/onRequestStart.js');


config.parent = createHttpServer(undefined, 8000);

config.routes = [
    {
      name: 'request'
      ,actions: onRequestStart
      ,listenOn: config.parent.channels.out
    }
];

module.exports = config;
