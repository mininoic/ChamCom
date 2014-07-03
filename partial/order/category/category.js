angular.module('ChamCom').controller('CategoryCtrl',function($scope, Discount){
	console.log(Discount.currentDiscountLoaded);
	if (Discount.currentDiscountLoaded && Discount.currentDiscount !== 0) {
		Discount.unFreeze();
	} else {
		Discount.fetch();
	}
});