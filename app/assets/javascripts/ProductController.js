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

    vm.editProduct    = {};
    vm.getProducts    = getProducts;
    vm.queryOptions   = {};
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
      getProducts();
      vm.queryOptions.page = 1;
    }

    function getProducts() {
      ProductService.getProducts(vm.queryOptions).then(function(resp) {
        if (resp.status === 200) {
          vm.products = resp.data.products;
          vm.num_pages = _.range(1, resp.data.num_pages + 1);
        }
      });      
    }

    function updateProduct(productObj) {
      ProductService.updateProduct(productObj).then(function(resp) {
        console.log(resp)
        vm.editProduct = {};
      });
    }

  }
})();