const http = require('http');
var config = require('../common/config/moduleConfig.js');

config.server = http.createServer();
config.hostname = undefined;
config.port = 8000;
config.parent = {
  channels: {
    out: config.server
  }
}

module.exports = config;
