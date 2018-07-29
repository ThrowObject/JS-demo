//先判断文件是否加载完成

$(document).ready(function(){
// 给body做一个监听点击事件
$("body").bind("click",bodyHandler);
// 给div做一个监听点击事件
$("div").bind("click",divHandler);
	});
// 做一个事件名称
function bodyHandler(event){
	// 做一个consle的打印
	conlog(event);
}
function divHandler(event){
	// 做一个consle的打印
	conlog(event);
	// 在div中添加一个事件阻止 阻止冒泡 只有div事件了 没有body事件
	// event.stopPropagation();
}
function divHandler1(event){
	// 调用函数即可
	conlog(event);
}
// console 容易报错 可以使用conlog 传递一个evet事件
function conlog(event){
	// 出错就把这个注销console.log(event);
}