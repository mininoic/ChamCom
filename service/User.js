angular.module('ChamCom').factory('User',function($http, $timeout, $q) {

	var User = {
		info: {},
		fetched: false,
		fetch: function(){
			var deferred = $q.defer();
			this.fetched = false;
			$http.get('MockData/User.json')
			.then(function(data){
				User.info = data.data;
				User.fetched = true;
				deferred.resolve();
			});
			return deferred.promise;
		}
	};

	return User;
});
