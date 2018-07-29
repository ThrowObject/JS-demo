$(document).ready(function(){
	// 找到当前触发事件的id（id="flipshow"）指定它是一个click事件
	$("#flipshow").click(function(){

		$("#content").slideDown(500);
	});
	$("#fliphide").click(function(){
		$("#content").slideUp(500);
	});
	// toggle 开关 切换
	$("#fliptoggle").click(function(){
		$("#content").slideToggle(500);
	});
});