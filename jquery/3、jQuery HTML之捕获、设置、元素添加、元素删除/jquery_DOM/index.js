$(document).ready(function(){
	// $("#btn1").click(function(){
		// 获取内容直接通过alert弹出来
		// 通过text()方法获取元素内容
		// alert("text:"+$("#text").text());});
	// $("#btn1").click(function(){
	// 	// 获取内容直接通过alert弹出来
	// 	// 通过text()方法获取元素内容
	// 	alert("text:"+$("#text").html());
	// });
	// html和text的区别 html可以获取内部子标签 text只能获取具体内容
	$("#btn1").click(function(){
		alert("text:"+$("#it").val());		
});
	$("#btn2").click(function(){
		alert("text:"+$("#aid").altr("href"));		
});
	});