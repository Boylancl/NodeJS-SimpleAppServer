const definition = require('./definition.js');
const config = require('./config.js');

const app = new definition(new config());
console.log("%s Started!", app.name);

module.exports =  {
  channels: {
    out: app.channels.out
  }
};
