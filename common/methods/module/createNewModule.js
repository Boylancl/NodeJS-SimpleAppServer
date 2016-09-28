module.exports = function(definition, config){

  var instance = new definition(config);
  console.log("%s Started!", instance.name);

  return instance;
}
