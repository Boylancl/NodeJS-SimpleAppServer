{
  "basicCntrlr": {
    definition: require('./controllers/basicController/definition.js')
    ,configuration: require('./controllers/basicController/config.js')
    ,routes: {
      'httpRequest': {
        connectTo: "defaultApp"
        ,listenOn: "out"
        ,listenFor: "controller"
        ,routeTo: "getHttpResponse"
      }
    }
    ,tier: 2
  }
  ,"defaultApp": {
    definition: require('./app/definition.js')
    ,configuration: require('./app/config.js')
    ,routes: {
      'httpRequest': {
        connectTo: "defaultServer"
        ,listenOn: "out"
        ,listenFor: "app"
        ,routeTo: "getHttpResponse"
      }
    }
    ,tier: 1
  }
  ,"defaultServer": {
    definition: require('./server/definition.js')
    ,configuration: require('./server/config.js')
    ,tier: 0
  }
};
