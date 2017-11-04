angular.module('MyApp')
  .factory('Cart', function($http) {
    return {
      getCartInfo: function(id) {
        return $http.get(`/current-order/${id}`)
      },
      updateCart: function(data) {
        return $http.put('/order/', data)
      },
      getOrders: function(data) {
        return $http.get(`/order/${data}`)
      },
      placeOrder: function(data) {
        return $http.post('/order/', data)
      }
    }
  })
  .service('Checkout', function() {
    var service = {
      address: null,
      cartInfo: null,
      delivery: 'drone',
      payment: null
    }

    service.getAddress = function () {
      return this.address
    }
    service.getDelivery = function() {
      return this.delivery
    }
    service.getCartInfo = function () {
      return this.cartInfo
    }
    service.getPayment = function() {
      return this.payment
    }

    service.setAddress = function(data) {
      this.address = data
    }
    service.setDelivery = function(data) {
      this.delivery = data
    }
    service.setCartInfo = function(data) {
      this.cartInfo = data
    }
    service.setPayment = function(data) {
      this.payment = data
    }

    return service
  })
