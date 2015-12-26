module.exports = function(config){
  for(key in config){
      var def = config[key].definition;
      var config = config[key].configuration;

      var module = new def(config);
      module.name = key;
  }
}
