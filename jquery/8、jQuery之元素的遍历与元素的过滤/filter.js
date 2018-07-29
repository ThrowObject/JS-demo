// 过滤的几种方法
// first() last() eq() filter() not()
$(document).ready(function(){
	// 第一个div first
	// $("div p").first().css("background-color","red");
	// last 最后一个div
    // $("div p").last().css("background-color","red");
    // eq 是返回当前元素索引指定id 从0开始 它的值为0 指的是div1 1值是指div2
    // filter (规定一个标准)满足当前元素条件 就有效果 满足不了当前元素条件 就会被筛选出来 如a便签不是p标签 所以没有显示效果
    // $("div p").filter("p").css("background-color","red");
    // not 与filter效果刚还相反
    $("div p").not(".pclass").css("background-color","red");
});