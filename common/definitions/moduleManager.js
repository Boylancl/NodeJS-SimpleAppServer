const createNewModule = require('../methods/module/createNewModule.js');

module.exports = function(config){
  this.modules = {};
  this.createNewModule = createNewModule;

  for(key in config){
    var module = this.createNewModule(config[key].definition
      ,config[key].configuration);

    module.name = key;

    this.modules.push({
      module.name
      ,module
    });
  }

}
