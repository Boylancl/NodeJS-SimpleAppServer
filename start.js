const defaultDef = require('./common/definitions/module.js');
const createNewModule = require('./common/methods/module/createNewModule.js');
const wireRoutes = require('./common/methods/module/wireRoutes.js');
const config = require('./config.js');

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

    var instance = createNewModule(def, curConfig.configuration);
    instance.name = key;

    console.log("%s Started!", instance.name);

    instances[key] = instance;
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
