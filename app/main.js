
const appDef = require('./definition.js');
const appConfig = require('./config.js');

const app = new appDef(appConfig);

console.log("App Started!");

module.exports =  app;
