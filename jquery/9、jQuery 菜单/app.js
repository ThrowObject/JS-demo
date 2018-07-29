$(document).ready(function(){
	// main>a选择器 子菜单不能点击
	$(".main>a").click(function(){
		// 找到主菜单下面的子菜单
       var ulNode=$(this).next("ul");
       // ==none时元素被隐藏
       // if (ulNode.css("display")=="none"){
       // 	ulNode.css("display","block");
       // }else{
       // 	ulNone.css("display","none");
       // }
       // 隐藏和出现该方法
       // ulNode.show();
       //  ulNode.show();
       // 开关 toggle方法
       // ulNode.toggle(500);   
       // toggle()可以传值 数字（有动画效果） 、slow、normal、fast
	   // ulNode.slideDown();
	   // ulNode.slideUp();
	   ulNode.slideToggle(); 
	   // slideToggle 动画有过渡效果
	});
       // 鼠标滑过后的水平和垂直事件
   $(".hmain").hover(function(){
     $(this).children("ul").slideDown();
   },function(){
     $(this).children("ul").slideUp();
   });
});