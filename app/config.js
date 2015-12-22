const config = require('../common/config/moduleConfig.js');
const onRequestStart = require('./events/onRequestStart.js');

module.exports = function(){
  config.call(this); //inherit

  this.parent = require('../server/main.js');
  this.name = "defaultApp";

  this.tier = 1;
  this.routes = this.routes.concat([
      {
        name: this.name
        ,actions: onRequestStart
        ,listenOn: this.parent.channels.out
      }
  ]);
};
