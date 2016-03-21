//we need to set it up so that whenever we send an HTTP request we send the token with it
//in order to do this we need to create a factory we can use as an interceptor.
angular.module('pofApp').factory('JWTFactory', ['$q', '$window', JWTFactory]);


// our factory has a request handler and response handler
// these are what will be called whenever we make a request or recieve a response
function JWTFactory($q, $window) {

  return {
    request: requestHandler,
    response: responseHandler
  };

  //we can use the request handler to send the jwt token with every http request we make
  function requestHandler(config) {

    //if headers dont exist, lets make them an empty object
    if (!config.headers) {
      config.headers = {};
    }

    //if we have a token in sessionStorage lets set the authorization header to 'Bearer <token>'
    if ($window.sessionStorage.token) {
      config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
    }

    //return the config to be used with the http request
    return config;
  }


  function responseHandler(response) {
    
    //if the user isn't authorized to make a request we can do something here
    if (response.status === 401) {
      console.error('User not authorized');
    }

    //return response or a promise that fulfils when you get a response
    return response || $q.when(response);
  }
}