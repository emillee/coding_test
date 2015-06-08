(function() {
  'use strict';

  angular
    .module('wiserapp')
    .controller('ProductController', ProductController);

  ProductController.$inject = [
    '$scope', 'ProductService'
  ];

  function ProductController(
    $scope, ProductService) {
    
    var vm = this;

    vm.catFilter      = {};
    vm.editProduct    = {};
    vm.setCatFilter   = setCatFilter;
    vm.updateProduct  = updateProduct;

    // normally, this would be returned from server in a 
    // to grab this from rails Product::Categires
    // config API call, but hardcoding this for expediency
    vm.allCategories = [
      'apparel',
      'electronics',
      'groceries',
      'office supplies',
      'sporting goods'
    ];

    activate();

    function activate() {
      ProductService.getProducts().then(function(resp) {
        if (resp.status === 200) {
          vm.allProducts = resp.data;
          vm.products = resp.data;
        }
      });
    }

    function updateProduct(productObj) {
      ProductService.updateProduct(productObj).then(function(resp) {
        console.log(resp)
        vm.editProduct = {};
      });
    }

    function setCatFilter(filter) {
      vm.products = _.filter(vm.allProducts, { category: filter });
    }

  }
})();