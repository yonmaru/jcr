(function(global){

	var anchorLogin = $('a[href=#login]');
	var modal = $('div#modal div#login');
	var btnClose = $('.close_overlay, .close');
	var href = window.location.href;

	/**
	 * INIT
	 */
	var init = function(){
		anchorLogin.click(function(){
			modal.addClass('target');
		});

		btnClose.click(function(){
			modal.removeClass('target');
		});

		if(href.indexOf('#login') !== -1) {
			modal.addClass('target');
		}

	};

	/*-----------------------------------------------
	 * API
	 -----------------------------------------------*/
	global.LOGIN = {
		init : init
	};

})(window);

/**
 * FOR -IE
 */
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement, fromIndex) {
		if ( this === undefined || this === null ) {
			throw new TypeError( '"this" is null or not defined' );
		}
		var length = this.length >>> 0;
		fromIndex = +fromIndex || 0;
		if (Math.abs(fromIndex) === Infinity) {
			fromIndex = 0;
		}
		if (fromIndex < 0) {
			fromIndex += length;
			if (fromIndex < 0) {
				fromIndex = 0;
			}
		}
		for (;fromIndex < length; fromIndex++) {
			if (this[fromIndex] === searchElement) {
				return fromIndex;
			}
		}
		return -1;
	};
}


$(function(){
	LOGIN.init();
});