const definition = require('./definition.js');
const config = require('./config.js');

const server = new definition(new config());
console.log('Server Started!');

module.exports = {
  channels: {
    out : server.channels.out
  }
};
