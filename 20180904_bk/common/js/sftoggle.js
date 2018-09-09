// JavaScript Document

$(function(){
	 $("tbody").each(function () {
		 //tbodyの要素内のtrの数をカウント
		 var num = $(this).find('tr').length;
		 //trが1件だったらトグルボタンを非表示
		 if(num==1){
			 $(this).find('.sftoggle').css('display','none');
		 }
	 });
});

$(function(){
	$('tbody tr:not(:first-child)').css('display','none');
	$('.sftoggle').on('click', function() {
		$(this).parents('tbody').find('tr:not(:first-child)').slideToggle(100);
		$(this).toggleClass("active");
	});
});
