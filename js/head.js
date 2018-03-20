$(function(){
	//顶部客户服务 进入
	$(".service").bind("mouseover",".service_link",function(event){
			$(".service_link").css({"color":"#f8a120"});
			$(".service_modal").show();
			$(this).find("i").addClass("harrow");
	})
	//顶部客户服务 离开
	$(".service").bind("mouseout",".service_link",function(event){
		$(".service_link").css({"color":"#000"});
		$(".service_modal").hide();
		$(this).find("i").removeClass("harrow");
		
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
})