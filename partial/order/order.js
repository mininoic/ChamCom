angular.module('ChamCom').controller('OrderCtrl',function($rootScope,$location, $scope, $timeout, User, Ordering, Categories, Menu, Discount, $state){
	var state = $state.current;
	var t;
	$scope.data = state.data;
	User.fetch().then(function(){
		$scope.User = User.info;
	});
	Categories.fetch().then(function(){
		$scope.Categories = Categories;
	});
	Menu.fetch().then(function(){
		$scope.Menu = Menu;
	});
	Discount.fetchPromise.then(function(){
		$scope.Discount = Discount;
	});
	$scope._User = User;
	$scope.Ordering = Ordering;
	$scope.Date = new Date();
	$scope.formatMoney = function(money) {
		return accounting.formatMoney(money,"",0,".");
	};
	$scope.orderButton = function(){
		var order = Ordering.order;
		if ($state.is("order.choose")&&order&&order.length) {
			//$http.post('',{})
			//.then(function(){
				Discount.setDiscount(Discount.currentDiscount);
				$state.go("order.bill");
			//});
		}
	};
	$scope.backButton = function(){
		if ($state.is("order.bill")) $state.go("order.choose");
		else if ($state.is("order.choose")) {
			Ordering.order = [];
		}
	};
	var loader = function(event, toState, toParams, fromState, fromParams){
		console.log(toState);
		switch($state.current.name) {
			case 'order.final':
			case 'order.bill':
				$scope.allowEdit = false;
				if (!Ordering.order||!Ordering.order.length) {
					$state.go('order.choose');
				}
			break;
			case 'order.choose':
				$scope.allowEdit = true;
				if (Discount.currentDiscountLoaded) {
					Discount.unFreeze();
				} else {
					Discount.fetch();
				}
			break;
			default:
				$state.go('order.choose');
			break;
		}
	};
	loader();
	$rootScope.$on('$stateChangeSuccess', loader);
});