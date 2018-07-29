$(document).ready(function(){
	$("button").click(function(){
		// 这个是元素选择器
		$("p").text("p元素被修改了")
		 // $(".pclass").text("p元素被修改了");
		 // $("#pid").text("p元素被修改了");
	});
});

// 说明 css中有三个选择器
// 分别是id选择器使用#h号 claa选择器使用.点号 元素选择器