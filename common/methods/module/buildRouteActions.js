module.exports = function(scope, action){
  //Build a complete flatted list of all actions
  var routeActions = [];
  if(Array.isArray(action)){
    for(var j=0; j<action.length; j++){
      //Set Scope for the actions; Add to the list
      routeActions.push(action[j](scope));
    }
  }
  else{
    routeActions = action(scope);
  }

  return routeActions;
}
