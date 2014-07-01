angular.module('ChamCom').factory('Ordering',function() {

	var Ordering = {
		order: [],
		addItem: function(item){
			var order = this.order,
				hasItem = false,
				i = order.length - 1;
			for (; i >= 0; i--) {
				if (order[i].id===item.id) {
					hasItem = true;
					break;
				}
			}
			if (hasItem) {
				this.increaseItem(i);
			} else {
				var _item = JSON.parse(JSON.stringify(item));
				_item.quantity = 1;
				order.push(_item); 
			}
		},
		deleteItem: function(itemIndex) {
			this.order.splice(itemIndex,1);
		},
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
		choosing: 0,
	};

	return Ordering;
});