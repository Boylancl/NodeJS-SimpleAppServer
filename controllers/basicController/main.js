const definition = require('./definition.js');
const config = require('./config.js');

const contrl = new definition(new config());
console.log("%s Started!", contrl.name);

module.exports = {
  channels:{
    out: contrl.channels.out
  }
};
