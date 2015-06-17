(function() {
  'use strict';

  angular
    .module('wiserapp')
    .service('ProductService', ProductService);

  ProductService.$inject = ['$http'];

  function ProductService($http) {
    var vm = this;

    vm.getProducts = function(options) {
      console.log(options)
      var theUrl = '/products.json';
      var appendStr = '';

      if (!!options['page']) {
        appendStr = appendStr + '?page=' + options['page'];
      } else {
        appendStr = appendStr + '?page=1';
      }

      if (!!options['category']) {
        appendStr = appendStr + '&category=' + options['category'];
      }      

      return $http({
        url: theUrl + appendStr,
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