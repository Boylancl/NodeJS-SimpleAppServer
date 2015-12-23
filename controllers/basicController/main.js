const definition = require('./definition.js');
const defaultConfig = require('./config.js');
const createNewModule = require('../../common/methods/module/createNewModule.js');

var instance;

module.exports = function(config){

  if(config == undefined ||
  config == null){
    config = defaultConfig;
  }

  if(instance == undefined ||
  instance == null){
    instance = createNewModule(definition, config);
  }
  else {
    console.log("%s is already started!", instance.name);
  }

  return {
    channels:{
      out: instance.channels.out
    }
  };

};
