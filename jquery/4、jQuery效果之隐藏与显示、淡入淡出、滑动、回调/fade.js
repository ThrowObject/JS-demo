// 声明jquery文档是否加载完毕
$(document).ready(function(){
	// 首先找到当前按钮in  可以使用on来做监听事件 指定它是一个click事件
	// fadeIn淡入效果
	$("#in").on("click",function(){
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(1000);
		$("#div3").fadeIn(1000);
	});
	// fadeOut淡出效果
	$("#out").on("click",function(){
		$("#div1").fadeOut(1000);
		$("#div2").fadeOut(1000);
		$("#div3").fadeOut(1000);
	});
	// fadeToggle相当于一个开关 淡入淡出的开关
	$("#toggle").on("click",function(){
		$("#div1").fadeToggle(1000);
		$("#div2").fadeToggle(1000);
		$("#div3").fadeToggle(1000);
	});
	// fadeTo是设置动画透明度 值是0-1 0是完全不透明 它需要通过动画时间结合使用
	$("#to").on("click",function(){
		$("#div1").fadeTo(1000,0.5);
		$("#div2").fadeTo(1000,0.7);
		$("#div3").fadeTo(1000,0.3);
	});
});