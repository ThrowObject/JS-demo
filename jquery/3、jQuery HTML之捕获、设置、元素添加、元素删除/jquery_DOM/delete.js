// 常用删除方法 remove empty
$(document).ready(function(){
$("#btn").click(function(){
	$("#div").remove();
	// $("#div").empty();
});
});
// remove和empty的两者的区别
// remove是删除全部东西 empty只删除子元素