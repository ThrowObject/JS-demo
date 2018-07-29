$(document).ready(function(){
	// $("#clickMeBtn").click(function(){
	// 	alert("hello")
	// });
	$("#clickMeBtn").bind("click",clickHandler1);
	$("#clickMeBtn").bind("click",clickHandler2);
	// 解除绑定元素 clickHandler2为解除函数绑定的值
	$("#clickMeBtn").unbind("click",clickHandler2);


	// 官方说明 jquery 1.7版本后 bind unbind可以分别用off和up代替

});

function clickHandler1(e){
	console.log("clickHandler1")
}
function clickHandler2(e){
	console.log("clickHandler2")
}