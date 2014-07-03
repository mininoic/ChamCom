angular.module('ChamCom').factory('Discount',function($interval, $http) {

	var Discount, t, decreasingSpeed, decreasingPace, interval;

	var decreaseDiscount = function(){
		Discount.currentDiscount = Discount.currentDiscount - decreasingSpeed*(Date.now()-t);
		t = Date.now();
		if (Discount.currentDiscount < 0) Discount.currentDiscount = 0;
	};

	Discount = {
		fetchedDiscount: 10,
		currentDiscount: 10,
		currentDiscountLoaded: false,
		fetchPromise: null,
		fetch: function(){
			$interval.cancel(interval);
			this.freeze = false;
			this.currentDiscountLoaded = false;
			// Replace the get link here
			return this.fetchPromise = $http.get('MockData/Discount.json')
			.then(function(data){
				data = data.data;
				Discount.fetchedDiscount = Discount.currentDiscount = data.currentDiscount;
				decreasingSpeed = data.decreasingSpeed;
				decreasingPace = data.decreasingPace;
				Discount.currentDiscountLoaded = true;
				t = Date.now();
				interval = $interval(decreaseDiscount,decreasingPace);
			});
		},
		freeze: false,
		getDiscount: function(){
			return this.freeze?this.fetchedDiscount:this.currentDiscount;
		},
		setDiscount: function(discount){
			this.freeze = true;
			this.fetchedDiscount = this.currentDiscount = discount;
		},
		unFreeze: function(){
			this.freeze = false;
		}
	};

	Discount.fetch();

	return Discount;
});