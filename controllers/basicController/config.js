const config = require('../../common/config/moduleConfig.js');
const onBasicRequest = require('./events/onBasicRequest.js');

module.exports = function(){
  config.call(this); //inherit

  this.channels = this.channels.concat({
    'WebRequest': undefined
  });

  this.name = "basicCntrlr";

  this.tier = 2;
  this.routes = this.routes.concat([
      {
        name: this.name
        ,actions: onBasicRequest
        ,listenOn: 'WebRequest'
      }
  ]);

};
