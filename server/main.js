const definition = require('./definition.js');
const config = require('./config.js');

const server = new definition(config);
console.log('Server Started!');

var hostname = config.hostname;
if(hostname == undefined){
  hostname = 'Localhost';
}
console.log('Listening on %s:%s', hostname, config.port);

module.exports = {
  channels: {
    out : server.channels.out
  }
};
