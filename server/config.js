const createHttpServer = require('../common/methods/server/createBasicHTTPServer.js');
var config = require('../common/config/moduleConfig.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = function(){
  config.call(this); //inherit parent

  this.name = "defaultServer";

  this.parent = createHttpServer(undefined, 8000);

  this.routes = this.routes.concat([
      {
        name: 'request'
        ,actions: onRequestStart
        ,listenOn: this.parent.channels.out
      }
  ]);

};
