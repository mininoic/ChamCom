angular.module('ChamCom').controller('ChooseCtrl',function($scope, Discount){
	if (Discount.currentDiscountLoaded && Discount.currentDiscount !== 0) {
		Discount.unFreeze();
	} else {
		Discount.fetch();
	}
});