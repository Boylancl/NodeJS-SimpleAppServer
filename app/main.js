
module.exports = {
  //methods
  Init: function(appDef)
  {
    //init Event Handlers
    for(var i=0; i<appDef.EventHandlers.length; i++){
      //Hook the Event Handlers to the Server Events
      appDef.ParentEvents.on(appDef.EventHandlers[i].EventName
        ,appDef.EventHandlers[i].Handlers[i]);
      //Pass a ref to the App Events
      appDef.EventHandlers[i].OutEvents = appDef.EventEmitter;
            console.log(appDef.EventHandlers[i].OutEvents);
    }
  }

};
