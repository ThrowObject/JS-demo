$(document).ready(function(){
	$("#btn1").click(function(){
         // 获取当前p元素
      $ ("#p1").text("极客学院");
	});
	$("#btn2").click(function(){
		// html修改
		$("#p2").html("<a href='http://www.jikexueyuan.com'>极客学院</a>");
	});
	$("#btn3").click(function(){
		// val修改
	});
	$("btn4")click(function(){
		// attr修改 属性跟属性值使用冒号隔开
		$("aid").attr("href","http://www.jikexueyuan.com")
	})
});