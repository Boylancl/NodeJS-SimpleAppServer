module.exports = function(){
  this.eventBase = require('events');
  this.routes = [{
      name: 'notFound'
      ,actions: function(instance){
        return function(){
            console.log('%s: No Route Found', instance.name);
          }
      }
    }];
};
