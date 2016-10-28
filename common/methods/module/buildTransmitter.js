module.exports=function(scope, reciever, signal){
  return function(data){

    console.log("Fired %s at %s from %s.", signal, reciever.name, scope.name);

    reciever[reciever.name].emit(signal, data);
  }
}
