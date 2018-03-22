/*
	缓冲运动函数
*/
function bufferMove(obj, target, fn, ratio = 6) {
	// 清除定时器
	clearInterval(obj.timer);

	// 开启新的定时器
	obj.timer = setInterval(function () {
		var allOk = true;

		for(var sAttr in target) {
			// 获取当前属性的值
			if(sAttr === 'opacity') {
				var cur = getStyle(obj, sAttr) * 100;
			} else {
				var cur = parseInt(getStyle(obj, sAttr));
			}

			// 计算速度
			var speed = (target[sAttr] - cur) / ratio;

			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			// 下一次的值
			var next = cur + speed;

			if(sAttr === 'opacity') {
				obj.style.opacity = next / 100;
				obj.style.filter = 'alpha(opacity=' + next + ')';
			} else {
				obj.style[sAttr] = next + 'px';
			}

			if(next !== target[sAttr]) {
				allOk = false;
			}
		}

		if(allOk === true) {
			clearInterval(obj.timer);
			fn && fn();
		}
	}, 50);
}

/*
	获取当前样式值
*/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
//更换验证码函数封装
function changeCode(){
	var imgCode=document.getElementById("logImgCode");
	imgCode.src="http://passport.secoo.com/common/captcha.jsp?type=login&amp;t=1521162329545";
}
//cookie读取
// 添加和修改cookie
function setCookie(name, value, days, path) {
	days = days || 0;
	path = path || '/';
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + days);
	document.cookie = name + '=' + encodeURIComponent(value) +';expires=' + oDate +';path=' + path;
}

// 获取cookie
function getCookie(name) {
	var aCookie = document.cookie.split('; ');
	for(var i = 0; i < aCookie.length; i++) {
		var temp = aCookie[i].split('=');

		if(temp[0] === name) {
			return decodeURIComponent(temp[1]);
		}
	}
}
//删除cookie
function removeCookie(name,path){
	path=path||"/";
	document.cookie=name+"=;expires=-1;path="+path;
}
//遮罩层关闭
$(".modal_close").click(function(){
	$(".zzc_modal").hide();
});