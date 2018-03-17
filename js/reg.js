$(function(){

	//刷新验证码
	$("#logImgCode").click(function(){
		changeCode();
	}).next().click(function(){
		changeCode();
	});

	//定义一个状态
	var allok=true;
	//所有表单获得焦点
	$(".reg_list").find("input:not('.vip_input input')").focus(function(){
		$(this).css({
			"borderColor":"#9d003f",
			"boxShadow":"0 1px 1px rgba(0, 0, 0, .075), 0 0 5px rgba(240, 127, 5, .4)"
		});
	});
	//所有表单失去焦点且内容为空
	 $(".reg_list").find("input:not('.vip_input input')").blur(function(){
	 	if($(this).val()==""){
		 		$(this).css({
		 		"borderColor":"red"
		 	});
	 	}
	 });
	//用户名获得焦点
	$(".user_input input").focus(function(){
		//还原默认提示
		$(".user_tip").css({
			"fontSize":14,
			"fontWeight":"normal",
			"color":"#999"
		});
		$(".user_tip").text("请输入手机号或者邮箱");
	});
	//用户名失去焦点
	$(".user_input input").blur(function(){
		//验证用户名是否为空
		if($(this).val()==""){
			allok=false;
			$(this).parent().prev().children().last().show().css({
				"fontSize":12,
				"fontWeight":"bold",
				"color":"red"
			});
			$(".checkMa_li").hide(100);
			$(".checkPh_li").hide(100);
		}
		//验证用户名位数
		else if($(this).val().length<4){
			allok=false;
			$(this).parent().prev().children().last().show().text("用户名长度为应为4-25个字符").css({
				"fontSize":12,
				"fontWeight":"bold",
				"color":"red"
			});
			$(".checkMa_li").hide(100);
			$(".checkPh_li").hide(100);
		}
		//验证用户名是否合格
		else{
			var emailCheck=email($(this).val());
			var cellPhoneCheck=cellPhone($(this).val());
			if(emailCheck||cellPhoneCheck){
				allok=true;
				$(this).css({
					"borderColor":"#dedede",
					"boxShadow":""
				});
				//隐藏用户名上方提示
				$(this).parent().prev().children().last().hide();
				//让验证码显示
				$(".checkMa_li").show(100);
				$(".checkPh_li").show(100);

			}else{
				allok=false;
				$(this).parent().prev().children().last().show().text("请输入正确的手机号或者邮箱").css({
					"fontSize":12,
					"fontWeight":"bold",
					"color":"red"
				});
				$(".checkMa_li").hide(100);
				$(".checkPh_li").hide(100);
			}
		}
	});

	//密码框获得焦点
	$(".pass_input input").focus(function(){
		//隐藏右上角提示
		$(".pass_tip").hide();
	});
	$(".pass_input input").blur(function(){
		//验证密码是否为空
		if($(this).val()==""){
			allok=false;
			$(".pass_tip").css({
				"fontSize":12,
				"color":"red",
				"fontWeight":'bold'
			}).text("请输入密码！").show();
		}else{
			//验证密码是否合格
			if($(this).val().length<6||$(this).val().length>25){
				allok=false;
				$(".pass_tip").text("密码的长度只能在6-25位之间").css({
					"fontWeight":"bold",
					"color":"red"
				}).show();
			}else{
				allok=true;
				$(this).css({
					"borderColor":"#dedede",
					"boxShadow":""
				});
				$(".pass_tip").hide();
			}
		}

	});

	//确认密码框获得焦点
	$(".rePass_input input").focus(function(){
		//隐藏右上角提示
		$(".rePass_tip").hide();
	});
	$(".rePass_input input").blur(function(){
		//验证确认密码是否为空
		if($(this).val()==""){
			allok=false;
			$(".rePass_tip").css({
				"fontSize":12,
				"color":"red",
				"fontWeight":'bold'
			}).text("请再次确认密码").show();
		}else{
			//验证确认密码是否合格
			if($(this).val()==$(".pass_input input").val()){
				allok=true;
				$(this).css({
					"borderColor":"#dedede",
					"boxShadow":""
				});
				$(".rePass_tip").hide();
			}else{
				allok=false;
				$(".rePass_tip").css({
					"color":"red",
					"fontWeight":"bold"
				}).text("两次密码输入不一致，请重新输入").show();
			}
		}

	});

	//验证邀请码是否正确
	//得到焦点
	$(".vip_input input").focus(function(){
		//判断是否正确(可用ajax)
		$(this).css({
			"borderColor":"#9d003f",
			"boxShadow":"0 1px 1px rgba(0, 0, 0, .075), 0 0 5px rgba(240, 127, 5, .4)"
		})
	});
	//失去焦点
	$(".vip_input input").blur(function(){
		$(this).css({"borderColor":"red"});
	
		//判断是否为空
		if($(this).val()==""){
			allok=false;
			$(".vip_error").css({
				"color":"red",
				"fontWeight":"bold"
			}).text("请输入邀请码!").show();
		}else{
			allok=true;
			//判断是否正确(可用ajax模拟)
			if($(this).val()=="123456"){
				$(".vip_error").hide();
				$(this).css({
					"borderColor":"#dedede",
					"boxShadow":""
				});
			}else{
				allok=false;
				$(".vip_error").css({
					"color":"red",
					"fontWeight":"bold"
				}).text("请输入正确的邀请码！").show();
			}
		}
	});

	$(".vip_check span input").click(function(){
		if($(this).attr("checked")!="checked"){
			$(".vip_error").hide();
			$(".vip_input").hide();
			$(".vip_input input").css({
				"borderColor":"#dedede",
				"boxShadow":""
			});
			$(".vip_input input").val("");
		}else{
			$(".vip_input").show();
		}
	});

	//注册表单验证
	$(".login_form").submit(function(e){
		if(allok==false||$(".reg_list input").val()==""){
			//阻止浏览器默认提交
			e.preventDefault();
		}
	});
});