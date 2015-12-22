const definition = require('./definition.js');
const config = require('./config.js');

const app = new definition(new config());
console.log("app Started!");

module.exports =  {
  channels: {
    out: app.channels.out
  }
};
