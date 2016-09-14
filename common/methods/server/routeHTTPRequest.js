module.exports = function(instance, request, response){
  var route = instance.getRoute(request, instance.channels.out);

  if(route == null
    || route == undefined){
      instance.channels.warning.emit('notFound', request, response);
    }
    else{
      instance.channels.out.emit(route, request, response);
    }

}
