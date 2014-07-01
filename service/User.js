angular.module('ChamCom').factory('User',function($http, $timeout) {

	var User = {
		info: {},
		fetched: false,
		fetch: function(){
			this.fetched = false;
			return $http.get('MockData/User.json')
			.then(function(data){
				User.info = data.data;
				User.fetched = true;
			});
		}
	};

	return User;
});
