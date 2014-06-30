angular.module('ChamCom').factory('User',function() {
	var savingString = '',
		savingParse = function(saving){
			savingString = '69 triệu đ';
		},
		update = function(scope, callback){
			var saving = 69000005;
			savingParse(saving);
			if (callback) callback(saving);
			if (scope) scope.$apply();
		};

	update(null, null);

	var User = {
		saving: savingString,
		update: update
	};

	return User;
});