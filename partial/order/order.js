angular.module('ChamCom').controller('OrderCtrl',function($location, $scope, User, Ordering, Categories, Menu){
	$scope.User = User;
	$scope.Ordering = Ordering;
	$scope.Categories = Categories;
	$scope.Menu = Menu;
	$scope.formatMoney = function(money) {
		return accounting.formatMoney(money,"",0,".");
	};
	if (!Ordering.menu) {
		$location.path('/order/choose');
	}
});