angular.module('ChamCom').factory('Ordering',function() {

	var Ordering = {
		order: [{
			"id": 0,
			"name": "Mỳ xào ốc tỏi",
			"desc": "Sợi mì chín vừa, không quá mềm. Ốc tỏi cắt miếng xào chung với mì và rau muống nên cũng đỡ ngán.",
			"img": "img/item/1232433132.jpg",
			"price": 40000,
			"category": [0,1,2,3],
			"quantity": 1
		}],
		increaseItem: function(itemIndex) {
			this.order[itemIndex].quantity++;
		},
		decreaseItem: function(itemIndex) {
			var item = this.order[itemIndex];
			if (item.quantity>1) item.quantity--;
		},
		totalCost: function() {
			var money = 0,
				orderList = this.order;
			for (var i = orderList.length - 1; i >= 0; i--) {
				var item = orderList[i];
				money += item.price*item.quantity;
			}
			return money;
		},
		choosing: true,
	};

	return Ordering;
});