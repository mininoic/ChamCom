angular.module('ChamCom').factory('Discount',function($timeout) {

	var Discount = {
		currentDiscount: 10,
		currentDiscountLoaded: false
	};

	var t;

	var decreaseDiscount = function(){
		Discount.currentDiscount = Discount.currentDiscount - 0.000001*(Date.now()-t);
		t = Date.now();
		if (Discount.currentDiscount > 0) $timeout(decreaseDiscount,100);
		else Discount.currentDiscount = 0;
	};

	// Load currentDiscount
	$timeout(function(){
		Discount.currentDiscountLoaded = true;
		t = Date.now();
		$timeout(decreaseDiscount,100);
	},1000);

	return Discount;
});