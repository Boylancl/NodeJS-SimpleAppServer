module.exports = function(instance, request, response){
  var route = instance.getRoute(request, instance.channels.out);

  instance.outBuffer.request = request;
  instance.outBuffer.response = response;

  console.log('%s on %s', route, instance);

  instance.channels.out.emit(route);
}
