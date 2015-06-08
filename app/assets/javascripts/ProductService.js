(function() {
  'use strict';

  angular
    .module('wiserapp')
    .service('ProductService', ProductService);

  ProductService.$inject = ['$http'];

  function ProductService($http) {
    var vm = this;

    vm.getProducts = function() {
      return $http({
        url: '/products.json',
        method: 'GET'
      }).success(function(resp) {
        return resp;
      });
    };


    vm.updateProduct = function(prodObj) {
      var theUrl = '/products/' + prodObj.id + '.json';
      return $http({
        url: theUrl,
        method: 'PUT',
        data: prodObj
      }).success(function(resp) {
        return resp;
      });
    };    
 
  }
})();