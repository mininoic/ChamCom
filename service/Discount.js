angular.module('ChamCom').factory('Discount',function($timeout) {

	var Discount = {
		currentDiscount: 10,
		currentDiscountLoaded: false
	};

	var decreaseDiscount = function(){
		Discount.currentDiscount = Discount.currentDiscount - 0.0001;
		if (Discount.currentDiscount > 0) $timeout(decreaseDiscount,100);
		else Discount.currentDiscount = 0;
	};

	// Load currentDiscount
	$timeout(function(){
		Discount.currentDiscountLoaded = true;
		$timeout(decreaseDiscount,100);
	},1000);

	return Discount;
});