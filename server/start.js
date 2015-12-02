const server = require('./main.js');
const config = require('./config.js');

//Start Server
server.start(config.port);

console.log("Server is Running...");
console.log("crtl-c to stop");
