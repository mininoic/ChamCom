angular.module('ChamCom').controller('OrderCtrl',function($location, $scope, $timeout, User, Ordering, Categories, Menu, Discount, $state){
	var state = $state.current;
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
		if ($state.is("order.choose")) $state.go("order.bill");
	};
	$scope.backButton = function(){
		if ($state.is("order.bill")) $state.go("order.choose");
	};
	if (!Ordering.menu) {
		$location.path('/order/choose');
	}
});