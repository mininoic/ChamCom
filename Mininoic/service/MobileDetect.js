angular.module('Mininoic').factory('MobileDetect',function() {
	var ua = navigator.userAgent,
		isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit && FastClick && FastClick.attach) {
		$(function() {
			FastClick.attach(document.body);
		});
	}

	return isMobileWebkit;
});