const definition = require('./definition.js');
const config = require('./config.js');

const router = new definition(config);
console.log('Router Started!');

module.exports = {
  channels: {
    out: router.channels.out
  }
};
