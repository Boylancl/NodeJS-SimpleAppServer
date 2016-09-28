module.exports = function(instance, request, response){
  var route = instance.getRoute(request, instance.channels.out);

  instance.outBuffer.request = request;
  instance.outBuffer.response = response;

  instance.channels.out.emit(route);
}
