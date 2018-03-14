$(function(){
	//顶部客户服务滑过
	$(".service_link").on("mouseenter",function(){
		$(".harrow").css({
			"border-top":"none",
			"border-bottom":"4px solid #f8a120",
			"border-left":"4px solid transparent",
			"border-right":"4px solid transparent",
		});
		$(this).css({"color":"#f8a120"});
	});
	$(".service_link").on("mouseleave",function(){
		$(".harrow").css({
			"border-bottom":"none",
			"border-top":"4px solid #f8a120",
			"border-left":"4px solid transparent",
			"border-right":"4px solid transparent"
		});
		$(this).css({"color":"#000"});
	});
	//导航栏滑过效果
	$(".nav_link").each(function(k,v){
		$(v).parent().on("mouseenter",function(){
			var left=parseInt($(v).parent().css("width"))/2;
			$(v).find("span").css({"left":left})
			$(v).find("span").show();
			$(v).parent().find(".nav_modal_box").show();
		});
		$(v).parent().on("mouseleave",function(){
			$(v).find("span").hide();
			$(v).parent().find(".nav_modal_box").hide();
		});
	});
});