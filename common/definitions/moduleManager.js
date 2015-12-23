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

}
