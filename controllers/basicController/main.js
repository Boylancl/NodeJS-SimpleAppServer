const definition = require('./definition.js');
const config = require('./config.js');

const contrl = new definition(config);
console.log("Basic Contrl Started!");

module.exports =  contrl;
