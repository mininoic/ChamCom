angular.module('ChamCom').factory('Menu',function(Indexer, $http) {
	var Menu = {
		list: [],
		currentCategory: [],
		fetch: function(){
			var _this = this;
			return $http.get('MockData/Menu.json')
			.then(function(data){
				_this.list = data.data;
				Indexer.indexArrayObject(_this.list, [
					'name','price','desc'
				]);
			});
		},
		getCategory: function(categoryId) {
			var list = this.list;
			this.currentCategory = [];

			for (var i = list.length - 1; i >= 0; i--) {
				var item = list[i];
				if (_.contains(item.category,categoryId)) {
					this.currentCategory.push(list[i]);
				}
			}

			return this;
		},
		getAll: function() {
			return this.list.slice();			
		},
		sort: function(list, categoryId) {
			var sorted = [];

			for (var i = list.length - 1; i >= 0; i--) {
				var item = list[i];
				if (_.contains(item.category,categoryId)) {
					sorted.unshift(list[i]);
				} else {
					sorted.push(list[i]);
				}
			}

			return sorted;
		}
	};

	Menu.fetch();

	return Menu;
});