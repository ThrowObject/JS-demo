$(document).ready(function(){
	$("button").click(function(){
		// 回调就是结束后会弹出一个对话框
		// $("p").hide(1000,function(){
		// 	alert("动画结束后，这个方法称为回调");
		// });
		
		// 让p元素执行多个动画
		$("p").css("color","red").slideUp(1000).slideDown(1000);
	});
});