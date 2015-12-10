const basicModule = require('../Common/Classes/BasicModule.js');

const appDef = require('./definition.js');
const appConfig = require('./config.json');

const app = new appDef(appConfig);
console.log("App Started!");

module.exports = app;
