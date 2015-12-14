
var onRequestStart = require('./events/onRequestStart.js');
var onResponseFinish = require('./events/onResponseFinish.js');

module.exports = function(config){
  this.serverInstance = config.http.createServer();

  //Hook actions to process the request
  for(var i=0; i< onRequestStart.length; i++){
    this.serverInstance.on('request', onRequestStart[i]);
  }
  //Hook actions to every completed response
  for(var j=0; j< onResponseFinish.length; j++){
    this.serverInstance.on('request', onResponseFinish[j]);
  }

  this.serverInstance.listen(config.port, config.hostname);

};
