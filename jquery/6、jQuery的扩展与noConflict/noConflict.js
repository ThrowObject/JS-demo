// 当$被其他框架使用时候 用no Conflict来代替美元$符号
// 声明一个对象代替jqury;
// $.noConflict();
var myjq=$.noConflict();
myjq(document).ready(function(){
	myjq("#btn").on("click",function(){
     myjq("div").text("new Hello");
	});
});