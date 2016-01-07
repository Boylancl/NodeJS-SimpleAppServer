{
  "basicCntrlr": {
    definition: require('./controllers/basicController/definition.js')
    ,configuration: require('./controllers/basicController/config.js')
    ,routes: {
      'http': {
        connectTo: "defaultApp"
        ,listenOn: "out"
        ,routeTo: "getHttpResponse"
      }
    }
    ,tier: 2
  }
  ,"defaultApp": {
    definition: require('./app/definition.js')
    ,configuration: require('./app/config.js')
    ,routes: {
      'http': {
        connectTo: "defaultServer"
        ,listenOn: "out"
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
