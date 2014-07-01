angular.module('ChamCom').filter('menuOrder', function(Menu) {
	return function(list, term){
		if (term) {
			return Menu.getAll();
		} else return list.slice();
	};
});