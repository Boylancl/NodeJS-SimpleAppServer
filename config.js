{
  "basicCntrlr": {
    definition: require('./controllers/basicController/definition.js')
    ,configuration: require('./controllers/basicController/config.js')
  }
  ,"defaultApp": {
    definition: require('./app/definition.js')
    ,configuration: require('./app/config.js')
  }
  ,"defaultServer": {
    definition: require('./server/definition.js')
    ,configuration: require('./server/config.js')
  }
};
