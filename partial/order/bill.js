angular.module('ChamCom').controller('BillCtrl',function($scope, Discount, $timeout, Ordering){
	var t;
	$scope.orderButton = function(){
		if ($state.is("order.choose")&&Ordering.order&&Ordering.order.length) $state.go("order.bill");
	};
	$scope.orderButtonText = "Xác nhận";
	$scope.backButton = function(){
		$timeout.clear(t);
		$state.go("order.choose");
	};
	$scope.backButtonText = "Quay lại";
	$scope.allowEdit = false;
	if (!Ordering.order||!Ordering.order.length) {
		$timeout.clear(t);
		$state.go("order.choose");
	} else {
		t = $timeout(function(){
			Discount.setDiscount(Discount.currentDiscount);
		},1000);
	}
});