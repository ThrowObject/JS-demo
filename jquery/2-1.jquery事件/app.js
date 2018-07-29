
$(document).ready(function(){
	// $(document).ready(function() 这部分代码主要声明，页面加载后 “监听事件” 的方法。
	// 监听事件基本上都是onclick所触发的事件
	alert("文档加载完毕");
	// 给p元素一个点击事件 隐藏p元素
	$("p").click(function(){
		$(this).hide();
	})
});