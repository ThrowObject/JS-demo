$(document).ready(function(){
	$("#hide").click(function(){
		// 隐藏时间1000毫秒=1秒
		$("p").hide(1000);
	});
	$("#show").click(function(){
		$("p").show(1000);
	});
	// 使用一个开关toggle作为一个键来执行显示/隐藏功能
	$("#toggle").click(function(){
		$("p").toggle(1000);
	});
});