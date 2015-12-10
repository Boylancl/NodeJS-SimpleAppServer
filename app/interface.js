
const app = require('./main.js');


const instance = new app(appDef, appConfig);
console.log("App Started!");

module.exports = app.interface
