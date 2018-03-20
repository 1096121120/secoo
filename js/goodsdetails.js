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
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		$(".bigImg").attr({
			"src":"imgs/big_"+index+".jpg"
		});
	});
	//放大镜开始
	//鼠标进入
	$(".bigImg").mouseenter(function(){
		//显示遮罩层
		$(".zoomSpan").show();
		//显示大图
		$(".img_modal").show();

	});
	//鼠标移出
	$(".bigImg").mouseleave(function(){
		//隐藏遮罩层
		$(".zoomSpan").show();
		//隐藏大图
		$(".img_modal").show();
	});
	

});