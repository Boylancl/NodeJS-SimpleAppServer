
module.exports = {
  //methods
  Init: function(controllerRef)
  {
    //init Event Handlers
    for(var i=0; i<controllerRef.EventHandlers.length; i++){
      //Hook the Event Handlers to the Server Events
      controllerRef.ParentEvents.on(controllerRef.EventHandlers[i].EventName
        ,controllerRef.EventHandlers[i].Handlers[i]);
    }
  }

};
