const config = require('../../common/config/moduleConfig.js');
const onBasicRequest = require('./events/onBasicRequest.js');

module.exports = function(){
  config.call(this); //inherit

  this.name = "basicCntrlr";

  this.parent = require('../../app/main.js');

  this.tier = 2;
  this.routes = this.routes.concat([
      {
        name: this.name
        ,actions: onBasicRequest
        ,listenOn: this.parent.channels.out
      }
  ]);

};
