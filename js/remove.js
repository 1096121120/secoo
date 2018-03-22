//删除cookie
$(function(){
	//获取cookie
	var sCookie=getCookie("goods");
	//转换成数组
	var aCookie=JSON.parse(sCookie);
	//删除按钮的点击事件
	$(".delete").click(function(){
		var result=confirm("您确定要删除吗");
		if(result==true){
			//删除DOM元素
			$(this).parent().parent().remove();
			//删除cookie
			//遍历cookie
			aCookie.forEach((v,k)=>{
				if(v.id==$(this).attr("data-id")){
					//删除当前id为k的cookie
					aCookie.splice(k,1);
				}
			});
			//将删除后的cookie重新添加进cookie
			setCookie("goods",JSON.stringify(aCookie),7);
		}else{
			return;
		}
	});
})