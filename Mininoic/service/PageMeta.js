angular.module('Mininoic').factory('PageMeta',function() {

	var feature_img = '',
		feature_title = '',
		default_feature_img = '',
		default_feature_title = '';

	var set_feature_title = function(title) {
			feature_title = title;
			document.title = title;
			$("meta[property='og\\:title']").attr("content", title);
			$("meta[property='twitter\\:title']").attr("content", title);
			console.log(feature_title);
		}, 
		set_feature_img = function(img) {
			feature_img = img;
			$("meta[property='og\\:image']").attr("content", img);	
			$("meta[property='twitter\\:image']").attr("content", img);
		}, 
		reset = function() {
			set_feature_img(default_feature_img);
			set_feature_title(default_feature_title);
		};

	reset();

	var PageMeta = {
		feature_img: function() { return feature_img; },
		set_feature_img: set_feature_img,
		feature_title: function() { return feature_title; },
		set_feature_title: set_feature_title,
		reset: reset,
		default_feature_img: function(img) {
			default_feature_img = img;
			set_feature_img(img);

		}, default_feature_title: function(title) {
			default_feature_title = title;
			set_feature_title(title);
		}
	};

	return PageMeta;
});