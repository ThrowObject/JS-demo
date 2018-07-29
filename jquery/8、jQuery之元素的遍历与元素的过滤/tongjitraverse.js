// // 遍历的方法有 
//  sibings() 
// 同级元素全部修改
//  next()
// 下一个元素修改
//  nextAll()
// 下面所有元素修改
//  nextUntil()
// 下面元素的区间修改
//  prev()
// 上一个元素修改
//  preAll()
// 向上所有元素修改
//  preUntil()
// 向上元素的区间修改
$(document).ready(function(){
  // $("h4").sibings().css({border:"3px solid #F0000"});
  // $("h4").next().css({border:"3px solid #FF0000"});
 $("h4").next().css({border:"3px solid #FF0000"});
});