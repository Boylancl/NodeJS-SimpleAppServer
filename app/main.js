
module.exports = {
  //methods
  Init: function(appDef)
  {
    //init Event Handlers
    for(var i=0; i<appDef.EventHandlers.length; i++){
      appDef.EventHandlers[i].OutEvents = appDef.EventEmitter;

      for(var j=0; j<appDef.EventHandlers[i].Handlers.length; j++){
        //Hook the Event Handlers to the Server Events
        appDef.ParentEvents.on(appDef.EventHandlers[i].EventName
          ,appDef.EventHandlers[i].Handlers[j]);
      }
    }
  }

};
