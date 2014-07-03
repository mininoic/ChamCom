angular.module('ChamCom').factory('Categories',function(Menu, $http) {

	var Categories = {
		list: [],
		activeCategory: 1,
		fetched: false,
		fetch: function(callback){
			this.fetch = false;
			return $http.get('MockData/Categories.json')
			.then(function(data){
				Categories.list = data.data;
				Categories.activate(Categories.activeCategory);
				Categories.fetched = true;
			});
		},
		activate: function(categoryId) {
			this.activeCategory = categoryId;
		}
	};

	return Categories;
});