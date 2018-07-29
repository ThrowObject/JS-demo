$(document).ready(function(){
	// 第一种方式
	// $("div").css("width","100px");
	// $("div").css("height","100px");
	// $("div").css("background","green");

	// 第二种方法 具体参考官网api
	// $("div").css({
	// 	width:"100px",height:"100px",background:"#00FF00"
	// });

	// addClass 作用 用来加载stytle样式表
	$("div").addClass("style1");
	$("div").click(function(){
		// toggleClass来回切换开关
		$(this).toggleClass("style2");
	});
});