angular.module('ChamCom').controller('BilldiscountCtrl',function($scope, Discount){
	Discount.setDiscount(Discount.currentDiscount);
});