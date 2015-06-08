angular.module('wiserapp', [
  'angularUtils.directives.dirPagination'
])

// CSRF HEADERS AND HTML5
.config(
  ['$httpProvider', '$locationProvider',
  function($httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 
      ['Origin', 'Accept Content-Type X-Requested-With', 'X-CSRF-Token'];
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = "1728000";
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }
]);