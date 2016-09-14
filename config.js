const createNewModule = require('./common/methods/module/createNewModule.js');


var buildList = {
  "basicCntrlr": {
    definition: require('./controllers/basicController/definition.js')
    ,configuration: require('./controllers/basicController/config.js')
    ,parent: "defaultApp"
  }
  ,"defaultApp": {
    definition: require('./app/definition.js')
    ,configuration: require('./app/config.js')
    ,parent: "defaultServer"
  }
  ,"defaultServer": {
    definition: require('./server/definition.js')
    ,configuration: require('./server/config.js')
  }
};

var buildModule = function(name)
{
  var def = buildList[name].definition;
  var config = buildList[name].configuration;

  var instance = createNewModule(def, config);

  console.log("%s is started!", instance.name);

  return instance;
}

var buildModuleChain = function(name)
{
  var parent = buildList[name].parent;

  if(parent != null &&
   parent != undefined)
  {
    parentInstance = this(parent);

    buildList[name].parent = parentInstance;
  }

  return buildModule(name);
}

module.exports = function(name){
  return buildModuleChain(name);
}
