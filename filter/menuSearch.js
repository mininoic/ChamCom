angular.module('ChamCom').filter('menuSearch', function(Menu) {
	return Menu.getCategory;
});