$(function(){
	// 二维码登录时的淡入淡出效果
	$(".login_ewm").mouseenter(function(){
		$(".ewm_img").stop(true).animate({"left":0,"width":136},400).next().stop(true).animate({"opacity":1},400);
	});
	$(".login_ewm").mouseleave(function(){
		$(".ewm_img").stop(true).animate({"left":59,"width":192},400).next().stop(true).animate({"opacity":0},400);
	});
	//刷新验证码
	$("#logImgCode").click(function(){
		changeCode();
	}).next().click(function(){
		changeCode();
	});

});
//更换验证码函数封装
function changeCode(){
	var imgCode=document.getElementById("logImgCode");
	imgCode.src="http://passport.secoo.com/common/captcha.jsp?type=login&amp;t=1521162329545";
}