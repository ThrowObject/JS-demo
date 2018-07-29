var timoutid;
$(document).ready(function(){
	// 鼠标事件 移上去和移下去事件
	// each的功能是遍历所有标签 index每次遍历去获取li对象
	$("#tabfirst li").each(function(index){
	// 给this定义一下 让this代替liNode
	 var liNode=$(this);
	 // 声明找到当前事件 绑定一个mouseover事件
     $(this).mouseover(function(){
     		// 加一个定时器 动作延迟
     timoutid=setTimeout(function(){
          // 隐藏原来的区域 移除当前的class=content
     $("div.content").removeClass("content");
     // 头部也要有这种效果 remove进行移除
     $("#tabfirst li.tabin").removeClass("tabin");
     // 用eq方法 找到当前index 通过index给下一个加上
     $("div").eq(index).addClass("content");
     // 给头部添加相应的class
     liNode.addClass("tabin");
 },300);
     // 当鼠标移开的动作
  }).mouseout(function(){
  	// 当鼠标移开时候清除
  	clearTimeout(timoutid);
      })
	})
	$("#realcontent").load("mytab.html");
})