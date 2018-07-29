// append 在被选中元素的结尾插入内容
// prepend 在被选中元素的开头插入内容
// before   在被选中元素之前换行添加插入内容
// after   在被选中元素之后换行添加插入内容
$(document).ready(function(){
	// 找到当前触发事件的按钮 指定这是一个click事件
	$("#btn1").click(function(){
		// 使用append 在p元素插入内容
		// $("#p1").append("this is my webpage")
		// 使用prepend 在p元素插入内容
		$("#p1").prepend("this is my webpage,")
	});
	$("#btn2").click(function(){
		// $("#p2").before("hello");
		$("#p2").after("hello");
	});
});
//上面是添加内容 其实也可以使用append添加元素
function appendText(){
	// 通过三种方式来添加 分别是html、jquery、（js)DOM
	var text1="<p>龙邦</p>"
	// 声明一个jquery 指定jquery元素p 给指定元素通过text添加内容
	var text2=$("<p></p>").text("李胜");
	// 使用js DOM 添加p元素 通过innerHML给text3来指定一个内容
	var text3=document.createElement("p");
	text3.innerHTML="acely";
	// 通过append把全部内容追加到当前body当中
	$("body").append(text1,text2,text3);
}
