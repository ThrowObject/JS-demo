$(document).ready(function(){
	// 单击事件click
	// ("button").click(function()
	// 双击事件dbclick
	// ("button").dbclick(function()
	// 当鼠标放上去时候消失 mouseenter（鼠标进入）
	//  $("button").mouseenter(function()
	// 鼠标离开事件 mouse leave
    $("button").mouseleave(function(){
  	// 让当前元素隐藏需要传递一个this 隐藏当前对象
  	$(this).hide();

  });
});