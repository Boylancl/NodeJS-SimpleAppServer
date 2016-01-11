const moduleDef = require('../common/definitions/module.js');

module.exports = function(config){
  //inherit base
  moduleDef.call(this, config);
};
