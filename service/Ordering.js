angular.module('ChamCom').factory('Ordering',function() {

	var _get;

	var Ordering = {
		order: [],
		has: function(id) {
			var order = this.order; 
			for (var i = order.length - 1; i >= 0; i--) {
				if (order[i].id === id) {
					_get = order[i];
					return i+1;
				}
			}
		},
		get: function(id) {
			if (_get && _get.id === id) return _get;
			else {
				var order = this.order; 
				for (var i = order.length - 1; i >= 0; i--) {
					if (order[i].id === id) {
						return order[i];
					}
				}
			}
			return false;
		},
		addItem: function(item){
			var order = this.order, index;

			if (index = this.has(item.id)) {
				this.increaseItem(index-1);
			} else {
				var _item = JSON.parse(JSON.stringify(item));
				_item.quantity = 1;
				order.push(_item); 
			}
		},
		deleteItem: function(index) {
			this.order.splice(index,1);
		},
		deleteItemById: function(id){
			var order = this.order, index;

			if (index = this.has(id)) {
				this.deleteItem(index-1);
			}
		},
		increaseItem: function(itemIndex) {
			this.order[itemIndex].quantity++;
		},
		decreaseItem: function(itemIndex) {
			var item = this.order[itemIndex];
			if (item.quantity>1) item.quantity--;
			else this.deleteItem(itemIndex);
		},
		decreaseItemById: function(id){
			var order = this.order, index;

			if (index = this.has(id)) {
				this.decreaseItem(index-1);
			}
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