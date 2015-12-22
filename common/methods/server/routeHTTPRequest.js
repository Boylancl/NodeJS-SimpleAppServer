module.exports = function(instance, request, response){
  var route = instance.getRoute(request, instance.channels.out);

  instance.channels.out.emit(route, request, response);
}
