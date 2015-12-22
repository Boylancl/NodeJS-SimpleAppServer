const http = require('http');

module.exports = function(hostname, port){

  var server = http.createServer();
  server.listen(port, hostname);

  if(hostname == undefined){
    hostname = 'Localhost';
  }
  console.log('Listening on %s:%s', hostname, port);

  return {
    channels: {
      out: server
    }
  }
}
