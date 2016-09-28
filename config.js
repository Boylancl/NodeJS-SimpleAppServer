module.exports = {
  "basicCntrlr": {
    configuration: {
      'name':"basicCntrlr"
      ,'actions' : {
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
      'name':"defaultApp"
      ,'actions' : {
        'getHttpResponse' : require('./app/actions/onRequestStart.js')
      }
    }
    ,routes: {
      'getHttpResponse': {
        connectTo: "defaultServer"
        ,listenFor: "app"
      }
    }
  }
  ,"defaultServer": {
    definition: require('./server/definition.js')
    ,configuration: {
      'name':"defaultServer"
      ,'hostname' : undefined
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
