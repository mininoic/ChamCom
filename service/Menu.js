/* Menu factory
** provide the list of menu and searching handler
*/
angular.module('ChamCom').factory('Menu',function(Indexer, $http) {
	var Menu = {
		// The entire list of menu
		list: [],
		fetched: false,
		//Fetch the menu from server
		fetch: function(){
			this.fetch = false;
			// Replace the get link here
			return $http.get('MockData/Menu.json')
			.then(function(data){
				Menu.list = data.data;
				// Indexing fields for searching
				Indexer.indexArrayObject(Menu.list, [
					'name','price','desc'
				]);
				Menu.fetched = true;
			});
		},
		// Return the list of menu for current category
		getCategory: function(list, categoryId) {
			var currentList = [];

			for (var i = list.length - 1; i >= 0; i--) {
				var item = list[i];
				if (_.contains(item.category,categoryId)) {
					currentList.push(list[i]);
				}
			}

			return currentList;
		},
		// Bring all the item matches categoryId to the top after searching
		sort: function(list, categoryId) {
			var sorted = [];

			for (var i = 0, l = list.length; i < l; i++) {
				var item = list[i];
				// Put the item matches categoryId on top
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