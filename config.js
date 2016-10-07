module.exports = {
  "basicCntrlr": {
    configuration: {
      'actions' : {
        'getHttpResponse' : require('./controllers/basicController/actions/onBasicRequest.js')
      }
    }
    ,routes: {
      'getHttpResponse': {
        connectTo: "defaultApp"
        ,listenFor: "controller"
      }
    }
  }

  ,"defaultApp": {
    configuration: {
      'actions' : {
        'getHttpResponse': require('./app/actions/onRequestStart.js')
        ,'endResponse': require('./app/actions/onEndResponse.js')
        ,'validateResult': require('./app/actions/onValidateResult.js')
      }
    }
    ,routes: {
      'getHttpResponse': {
        connectTo: "defaultServer"
        ,listenFor: "app"
      }
      ,'endResponse': {
        connectTo: "basicCntrlr"
        ,listenFor: "end"
      }
    }
  }
  
  ,"defaultServer": {
    definition: require('./server/definition.js')
    ,configuration: {
      'hostname' : undefined
      ,'port' : 8000
      ,'actions' : {
        'getHttpResponse' : require('./server/actions/onRequestStart.js')
      }
    }
    ,routes: {
      'getHttpResponse': {
        listenFor: "request"
      }
    }
  }
};
