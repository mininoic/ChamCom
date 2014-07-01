angular.module('ChamCom').controller('OrderCtrl',function($location, $scope, User, Ordering, Categories, Menu, Discount){
	$scope.User = User;
	$scope.Ordering = Ordering;
	$scope.Categories = Categories;
	$scope.Menu = Menu;
	$scope.Discount = Discount;
	$scope.formatMoney = function(money) {
		return accounting.formatMoney(money,"",0,".");
	};
	if (!Ordering.menu) {
		$location.path('/order/choose');
	}
});