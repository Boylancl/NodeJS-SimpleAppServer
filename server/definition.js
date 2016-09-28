const moduleDef = require('../common/definitions/module.js');
const createHttpServer = require('../common/methods/server/createBasicHTTPServer.js');

module.exports = function(config){
  moduleDef.call(this, config);

  this.channels['in'] = createHttpServer(config.hostname, config.port);

};
