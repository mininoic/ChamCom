angular.module('ChamCom').controller('BilldiscountCtrl',function($scope, Discount, $timeout){
	$timeout(function(){
		Discount.setDiscount(Discount.currentDiscount);
	},1000);
});