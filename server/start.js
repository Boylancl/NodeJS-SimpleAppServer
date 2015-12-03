const server = require('./main.js');
const config = require('./config.js');


//Start Server
server.start(config);

var address = {
  port: config.port
  ,hostname: config.hostname
}

if(address.hostname == undefined){
  address.hostname = 'localhost';
}

console.log("Server is Running...");
console.log("Server listening on %s:%s",
  address.hostname
  ,address.port);
console.log("crtl-c to stop");
