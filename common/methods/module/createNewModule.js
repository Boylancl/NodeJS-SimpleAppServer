module.exports = function(definition, config){

  var instance = new definition(new config());
  console.log("%s Started!", instance.name);

  return instance;
}
