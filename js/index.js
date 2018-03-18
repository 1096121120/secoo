$(function(){
	//轮播图逻辑代码
	//初始化界面
	initUI();
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();

	//轮播图箭头
	$(".banner").mouseenter(function(){
		$(".arrow").stop(true).animate({"opacity":1},200);
	});
	$(".banner").mouseleave(function(){
		$(".arrow").stop(true).animate({"opacity":0},200);
	});


});
//首页轮播图
var arr=["slide-1.jpg","slide-2.jpg","slide-3.jpg","slide-4.jpg","slide-5.jpg"];
var ord=0;//定义当前图片序号
var myTimer=null;

//初始化界面  首页加载时第一个豆豆为显示色
function initUI(){
	$(".btns li:first").css({"background":"#f8a120"});
}

//事件处理程序
function initEvent(){
	//鼠标进入
	$(".banner").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放
	$(".banner").mouseleave(function(){
		autoPlay();
	});
	//点击豆豆自动跳转
	$(".btns li").click(function(){
		goImg($(".btns li").index(this));
	});
	//点击左箭头实现向左跳转
	$(".leftArrow").click(function(){
		let transOrd=ord-1;
		transOrd>0?transOrd:arr.length-1;
		goImg(transOrd);
		return false;
	});
	//点击右箭头实现向右跳转
	$(".rightArrow").click(function(){
		let transOrd=ord+1;
		transOrd>arr.length-1?0:ord+1;
		goImg(transOrd);
		return false;
	});
}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;

		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$(".banner a img");
	//淡入
	$img.eq(outOrd).stop(true).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).stop(true).animate({"opacity":1},500);
	//改变豆豆的颜色
	$(".btns li").eq(ord).css({"background":"#f8a120"}).siblings().css({"background":"#cccccc"});
	},5000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$(".banner a img");
	//淡入
	$img.eq(outOrd).stop(true).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).stop(true).animate({"opacity":1},500);
	//改变豆豆的颜色
	$(".btns li").eq(ord).css({"background":"#f8a120"}).siblings().css({"background":"#cccccc"});
}
