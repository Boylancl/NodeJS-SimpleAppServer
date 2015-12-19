const moduleDef = require('../common/definitions/module.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  moduleDef.call(this, config);

  var instance = this;


  //Hook the in route to the in channel
  this.listenOn(this.routes.in, this.channels.in);

  //Start Server
  this.parent..

};
