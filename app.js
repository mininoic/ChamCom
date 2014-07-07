//angular.module('ChamCom', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
angular.module('ChamCom', ['ui.router', 'Mininoic','ngAnimate']);

angular.module('ChamCom').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $stateProvider.state('order', {
        url: '/order',
        templateUrl: 'partial/order/order.html',
        controller: 'OrderCtrl',
    });
    $stateProvider.state('order.choose', {
        url: '/choose',
        data: {
            orderButtonText: 'Đặt cơm',
            backButtonText: 'Hủy đơn'
        },
        views: {
            'left': {
                templateUrl: 'partial/order/category/category.html',
                controller: 'CategoryCtrl'
            },
            'center': {
                templateUrl: 'partial/order/Menu/Menu.html',
                controller: 'MenuCtrl'
            }
        }
    });
    $stateProvider.state('order.bill', {
        url: '/bill',
        data: {
            orderButtonText: 'Xác nhận',
            backButtonText: 'Quay lại'
        },
        views: {
            'left': {
                templateUrl: 'partial/order/billDiscount/billDiscount.html',
                controller: 'BilldiscountCtrl'
            },
            'center': {
                templateUrl: 'partial/order/Checkout/Checkout.html',
                controller: 'CheckoutCtrl'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/order/choose');

});

angular.module('ChamCom').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

(function(){
    angular.module('ChamCom').controller('mainAppCtrl', function($scope, PageMeta){
        
    });
})();