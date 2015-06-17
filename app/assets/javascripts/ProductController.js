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

    // vm.catFilter      = {};
    vm.editProduct    = {};
    vm.getProducts    = getProducts;
    vm.queryOptions   = {};
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
      getProducts();
    }

    function getProducts() {
      // console.log('hey')
      ProductService.getProducts(vm.queryOptions).then(function(resp) {
        // console.log(vm.queryOptions)
        // console.log(resp)
        if (resp.status === 200) {
          // vm.allProducts = resp.data.products;
          vm.products = resp.data.products;
          vm.num_pages = _.range(1, resp.data.num_pages + 1);
          console.log(vm.num_pages)
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
      vm.queryOptions.cat
      // vm.products = _.filter(vm.allProducts, { category: filter });
    }

  }
})();