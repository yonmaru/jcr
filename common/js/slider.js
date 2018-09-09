// JavaScript Document

$(document).ready(function(){
	$('#slider').bxSlider({
		auto: true,
		pager: false,
		speed: 1000,

		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: ''
	});
});
