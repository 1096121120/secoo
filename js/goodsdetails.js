$(function(){
	//放大镜下面滑过效果（鼠标进入）
	$(".share_text span").mouseenter(function(){
		//让文字改变颜色
		$(this).find("a").css({"color":"#e93a38"});
		//让小图标运动啊
		$(this).find("i").stop(true).animate({
			"marginTop":"-6"
		},"fast").animate({
			"marginTop":"0"
		},"fast");
	});
	//鼠标移出
	$(".share_text span").mouseleave(function(){
		//让文字改变颜色
		$(this).find("a").css({"color":"#666"});
	});
	//购买数量加
	var count=$(".num_count").val();
	$(".num_up").click(function(){
		count++;
		if(count>1){
			$(".num_down").css({
				"cursor":"pointer"
			});
		}
		$(".num_count").val(count);
	});
	//购买数量减
	$(".num_down").click(function(){
		count--;
		if(count<1){
			count=1;
			$(this).css({
				"cursor":"not-allowed"
			})
		}
		$(".num_count").val(count);
	});

	//小图移入效果
	$(".move_box a").mouseenter(function(){
		//小图添加边框
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		//动态改变小图地址
		$(".bigImg").attr({
			"src":"imgs/big_"+index+".jpg"
		});
		//动态改变大图地址
		$(".img_modal").attr({
			"src":"imgs/big_"+index+".jpg"
		});
	});
	//放大镜开始
	//遮罩层最大的left和top
	var maxL=0;
	var maxT=0;
	//大图最大的left和top值
	var bigImgL=0;
	var bigImgT=0;
	//鼠标进入
	$(".bigImgBox").mouseover(function(){
		//显示遮罩层
		$(".zoomSpan").show();
		//显示大图
		$(".large_box").show();
		//获取最大的left和top值
		//获取shadow
		maxL=$(".bigImgBox").width()-$(".zoomSpan").width();
		maxT=$(".bigImgBox").height()-$(".zoomSpan").height();
		// console.log(maxL+","+maxT);

		//获取大图
		bigImgL=$(".img_modal").width()-$(".large_box").width();
		bigImgT=$(".img_modal").height()-$(".large_box").height();

	});
	//鼠标移出
	$(".bigImgBox").mouseout(function(){

		//隐藏遮罩层
		$(".zoomSpan").hide();
		//隐藏大图
		$(".large_box").hide();
		return false;
	});
	//鼠标移动
	$(".bigImgBox").mousemove(function(e){
		var iL=e.pageX-$(".zoomSpan").width()/2-$(".bigImgBox").position().left;
		var iT=e.pageY-$(".zoomSpan").height()-$(".bigImgBox").position().left+10;
	
		//边界判断
		if(iL<0){
			iL=0;
		}
		if(iT<0){
			iT=0;
		}
		if(iL>maxL){
			iL=maxL;
		}
		if(iT>maxT){
			iT=maxT;
		}

		//改变遮罩层位置
		$(".zoomSpan").css({
			left:iL,
			top:iT
		});
		// 改变大图位置
		$(".img_modal").css({
			left:-iL*bigImgL/maxL,
			top:-iT*bigImgT/maxT
		});
	});
	//左侧li进入   图片放大
	$(".showLeftCon ul li a").mouseenter(function(){
		$(this).siblings(".show_img").css({
			"transform":"scale(1.3)",
			"borderColor":"#ededed"
		});
	});
	//图片缩小
	$(".showLeftCon ul li a").mouseleave(function(){
		$(this).siblings(".show_img").css({
			"transform":"scale(1)",
			"borderColor":"transparent"
		});
	});

	
});
//顶部悬浮
var firstNavTop=$(".firstNav").position().top;
$(window).scroll(function(){
	var fixedLeft=$(".firstNav").position().left;
	if($(window).scrollTop()>firstNavTop){
		$(".firstNav").css({
			"position":"fixed",
			"left":fixedLeft,
			"top":0
		});
	}else{
		$(".firstNav").css({
			"position":""
		});
	}

});