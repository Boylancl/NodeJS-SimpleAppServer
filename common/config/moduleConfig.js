module.exports = {
  eventBase: require('events')
  ,config.routes = [
      {
        eventName: 'notFound'
        ,actions: function(instance){
          return function(){
              console.log('Not route found');
            }
        }
      }
  ]
};
