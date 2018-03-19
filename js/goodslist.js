$(function(){
	//更多选项展开
	$(".hide_modal").hide();
	$(".show_modal").click(function(){
		$(this).hide();
		$(".hide_modal").show();
		$(".place_modal").show(500);
	});
	//收起效果
	$(".hide_modal").click(function(){
		$(this).hide();
		$(".show_modal").show();
		$(".place_modal").hide(500);
	});
	//商城、拍卖选项卡切换
	$(".product_tips a").click(function(){
		$(this).addClass("tips_on").siblings().removeClass("tips_on");
	});
	//控制按钮切换
	$(".control_btn a").not(".price_btn").click(function(){
		$(this).addClass("btn_active").siblings().removeClass("btn_active").parent().find(".price_btn").removeClass("control_price_active");
	});
	$(".price_btn").click(function(){
		$(this).addClass("control_price_active").siblings().removeClass("btn_active");
	});

	//输入框价格控制(进入)
	$(".control_price").mouseenter(function(){
		$(this).css({"background":"#ededed"});
		$(".control_price_btn").show();
	});
	//离开
	$(".control_price").mouseleave(function(){
		$(this).css({"background":"#f5f5f5"});
		$(".control_price_btn").hide();
	});
	//

	//搜索框获得焦点
	$(".control_search span input").focus(function(){
		if($(this).val()=="在结果中搜索"){
			$(this).val("");
			$(this).css({"color":"#000"});
		}
	});
	//搜索框失去焦点
	$(".control_search span input").blur(function(){
		if($(this).val()==""){
			$(this).val("在结果中搜索");
			$(this).css({"color":"rgb(187, 182, 182)"});
		}
	});

	//商品内容
	$("dl").mouseenter(function(){
		$(this).find(".add_cart").css({"display":"inline-block"});
		$(this).find(".loveHeart").show();
	});
	$("dl").mouseleave(function(){
		$(this).find(".add_cart").hide();
		$(this).find(".loveHeart").hide();
	});

	//返回顶部
	$(".fixedTop").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 700);
	})
});
$(window).scroll(function(){
	//顶部悬浮  判断临界值是否大于405
	if($(window).scrollTop()>405){
		$(".product_control").addClass("control_fixed");
	}else{
		$(".product_control").removeClass("control_fixed");
	}
	//判断当前滑动距离是否大于浏览器可视窗口高度
	if($(window).scrollTop()>0){
		//让返回顶部显示
		$(".fixedTop").show();
	}else{
		//让返回顶部隐藏
		$(".fixedTop").hide();
	}
});