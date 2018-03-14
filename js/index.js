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
});