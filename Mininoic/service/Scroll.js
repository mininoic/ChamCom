angular.module('Mininoic').factory('Scroll',function(MobileDetect) {

	var desktopSpeed = 500,
		mobileSpeed = 100,
		desktopOffset = 0,
		mobileOffset = 0;

	$(function(){
		if (!isMobileWebkit) {
			smoothScroll.init({
				speed: desktopSpeed,
				offset: desktopOffset
			});
		} else {
			smoothScroll.init({
				speed: mobileSpeed,
				offset: mobileOffset
			});
		}
    });

	return {
		to: smoothScroll.animateScroll,
		setDesktopSpeed: function(speed){
			desktopSpeed = speed;
		},
		setMobileSpeed: function(speed){
			mobileSpeed = speed;
		},
		setDesktopOffset: function(offset){
			desktopOffset = offset;
		},
		setMobileOffset: function(offset){
			mobileOffset = offset;
		}
	};
});