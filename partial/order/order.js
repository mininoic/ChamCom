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
		if ($state.is("order.choose")&&Ordering.order&&Ordering.order.length) $state.go("order.bill");
	};
	$scope.orderButtonText = function(){
		if ($state.is("order.choose")) return "Đặt cơm";
		else if ($state.is("order.bill")) return "Xác nhận";
	};
	$scope.backButton = function(){
		if ($state.is("order.bill")) $state.go("order.choose");
	};
	$scope.backButtonText = function(){
		if ($state.is("order.choose")) return "Hủy đơn";
		else if ($state.is("order.bill")) return "Quay lại";
	};
	$scope.allowEdit = function(){
		if ($state.is("order.choose")) return true;
		else return false;
	};
	if (!Ordering.order||!Ordering.order.length) {
		$location.path('/order/choose');
	}
});