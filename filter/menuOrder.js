angular.module('ChamCom').filter('menuOrder', function(Menu, Categories) {
	return function(list, term){
		if (term) {
			return Menu.sort(list,Categories.activeCategory);
		} else {
			return Menu.getCategory(list,Categories.activeCategory);
		}
	};
});