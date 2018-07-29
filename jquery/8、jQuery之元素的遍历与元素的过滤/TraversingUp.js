// 向上遍历的方法
// parent()
// parents()
// parentUntil()
$(document).ready(function(){
	// $("p").parent().css({border:"3px solid #FF0000"});
	// $("p").parents().css({border:"3px solid #FF0000"});
	$("a").parentUntil("#div").css({border:"3px solid #FF0000"});
});