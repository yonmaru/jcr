// JavaScript Document

$(function(){
	 $(".table").each(function () {
		 //"div.tableの要素内のliの数をカウント
		 var num = $(this).find('ul li').length;
		 //liが0件だったら
		 if(num==1){
			 $(this).find('.toggle a').css('display','none');
		 }
	 });
});

$(function(){
	$('.table ul li:not(:first-child)').css('display','none');
	$('.toggle a').on('click', function() {
		$(this).parents('dl').find('ul li:not(:first-child)').slideToggle(100);
		$(this).toggleClass("active");
	});
});
