const defaultDef = require('../../definitions/module');
const createNewModule = require('./createNewModule');
const wireRoutes = require('./wireRoutes');

module.exports = function(config){
  var instances = {};
  var routes = [];

  for(var key in config){
    if(config.hasOwnProperty(key)){
      var curConfig = config[key];
      var def = defaultDef;

      if(curConfig.definition != null
      && curConfig.definition != undefined){
        def = curConfig.definition;
      }

      instances[key] = createNewModule(def, curConfig.configuration, key);

      routes.push({'name': key
      ,'route': curConfig.routes
      ,'actions': curConfig.configuration['actions']});

    }
  }

  for(var i=0; i<routes.length; i++){
    wireRoutes(instances
      ,routes[i]['route']
      ,routes[i]['actions']
      ,routes[i]['name']);
  }

return instances;

}
