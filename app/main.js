var appConfig;

module.exports = {

  //methods
  Init: function(config)
  {
    appConfig = config;

    //init Event Handlers
    for(var i=0; i<config.EventHandlers.length; i++)
    {
      config.EventHandlers[i].Init({
        OutEvents: config.OutEvents
        ,InEvents: config.Server.Events
      });
    }
  }
  ,Implement: function(interfaceList){
    //map methods/members from the configuration to the interface
    for(var prop in interfaceList){
      //match the prop from the interface to something in the config
      if(prop in appConfig){
        interfaceList[prop] = appConfig[prop];
      }
    }
    return interfaceList;
  }

};
