//angular.module('ChamCom', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
angular.module('ChamCom', ['ui.router', 'Mininoic','ngAnimate']);

angular.module('ChamCom').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $stateProvider.state('order', {
        url: '/order',
        templateUrl: 'partial/order/order.html',
        controller: 'OrderCtrl',
    });
    $stateProvider.state('order.order', {
        url: '/choose',
        views: {
            "header": {
                templateUrl: 'partial/signedIn/header/header.html',
                controller: 'HeaderCtrl'
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