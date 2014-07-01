angular.module('ChamCom').controller('OrderCtrl',function($location, $scope, $timeout, User, Ordering, Categories, Menu, Discount, $state){
	console.log($state);
	User.fetch().then(function(){
		$scope.User = User.info;
	});
	$scope._User = User; 
	$scope.Ordering = Ordering;
	$scope.Categories = Categories;
	$scope.Menu = Menu;
	$scope.Discount = Discount;
	$scope.Date = new Date();
	$scope.formatMoney = function(money) {
		return accounting.formatMoney(money,"",0,".");
	};
	if (!Ordering.menu) {
		$location.path('/order/choose');
	}
});