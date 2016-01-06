const config = require('../common/config/moduleConfig.js');
const onRequestStart = require('./events/onRequestStart.js');

module.exports = function(){
  config.call(this); //inherit

  this.channels = this.channels.concat({
    'WebRequest': undefined
  });

  this.name = "defaultApp";

  this.tier = 1;
  this.routes = this.routes.concat([
      {
        name: 'ProcessRequest'
        ,actions: onRequestStart
        ,listenOn: 'WebRequest'
      }
  ]);
};
