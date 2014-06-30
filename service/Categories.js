angular.module('ChamCom').factory('Categories',function(Menu, $http, $q, $timeout, MockData) {

	var Categories = {
		list: [],
		activeCategory: 1,
		fetch: function(callback){
			var _this = this;
			return $http.get('MockData/Categories.json').then(function(data){
				_this.list = data.data;
				_this.activate(_this.activeCategory);
			},100);
		},
		activate: function(categoryId, apply) {
			this.activeCategory = categoryId;
			Menu.getCategory(categoryId);
		}
	};

	Categories.fetch();

	return Categories;
});