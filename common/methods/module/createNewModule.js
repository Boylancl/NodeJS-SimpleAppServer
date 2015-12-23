module.exports = function(definition, config){
  if(config == undefined ||
  config == null){
    config = defaultConfig;
  }

  var instance = new definition(new config());
  console.log("%s Started!", instance.name);

  return instance;
}
