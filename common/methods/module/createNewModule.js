module.exports = function(definition, config, name){

  var instance = new definition(config);

  instance.name = name;

  console.log("%s Started!", instance.name);

  return instance;
}
