angular.module('Mininoic').factory('Indexer',function() {

	var unSign = function(str) {
	    str = str.toLowerCase();
	    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	    str = str.replace(/đ/g, "d");
	    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|<|\>|\?|,|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, " ");
	    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
	    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
	    str = str.replace(/^\-+|\-+$/g, "");
	    //cắt bỏ ký tự - ở đầu và cuối chuỗi
	    return str;
	};

	var indexArrayObject = function(array, keys){
		for (var i = array.length - 1; i >= 0; i--) {
			for (var j = keys.length - 1; j >= 0; j--) {
				array[i]['IDX_'+keys[j]] = unSign(array[i][keys[j]].toString());
			}
		}
	};

	var prefix = function(keys){
		for (var j = keys.length - 1; j >= 0; j--) {
			keys[j]='IDX_'+keys[j];
		}
		return keys;
	};

	var Indexer = {
		unSign: unSign,
		indexArrayObject: indexArrayObject,
		prefix: prefix
	};

	return Indexer;
});