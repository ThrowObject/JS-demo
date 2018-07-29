
var ClickMeBtn;
$(document).ready(function(){

	// 声明ClickMeBtn 创建一个click事件
    ClickMeBtn=$("#ClickMeBtn");
	ClickMeBtn.click(function(){
		// 创建对象 创建一个自己的事件
		var e=jQuery.Event("MyEvent");
		// 声明button
		$("ClickMeBtn").trigger(e);
	});
	ClickMeBtn.bind("MyEvent",function(event){
		console.log(event);

	});
});