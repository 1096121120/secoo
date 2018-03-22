//ajax动态获取数据并渲染到页面中
$(function(){
	$.getJSON("json/goodslist.json",function(data){
		data.forEach((v,k)=>{
			$(".product_content").append(
				`
				<dl>
					<div class="show_tips">
						<dt>
							<a href="javascript:;">
								<img src="${v.src}" alt="">
							</a>
						</dt>
						<dd class="dl_name">
							<a href="">${v.name}</a>
						</dd>
						<dd class="dl_price">
							<span class="span_price">
								<i>￥</i>
								${v.price}
							</span>
							<span class="span_num">
								销量：
								<i>${v.sales}</i>
								件
							</span>
						</dd>
						<dd class="add_cart">
							<a href="javascript:;" data-id="${k}" data-src="${v.src}" data-name="${v.name}" data-place="${v.place}" data-price="${v.price}" class="buyCart_btn">加入购物车</a>
						</dd>
						<span class="loveHeart">
							<i>收藏</i>
						</span>
					</div>
				</dl>
				`
				)
		});
		//鼠标移入
		$("dl").mouseenter(function(){
			$(this).find(".add_cart").css({"display":"inline-block"});
			$(this).find(".loveHeart").show();
		});
		//鼠标移出
		$("dl").mouseleave(function(){
			$(this).find(".add_cart").hide();
			$(this).find(".loveHeart").hide();
		});
		//点击加入购物车保存cookie
		$(".buyCart_btn").click(function(){
			//获取自定义属性值
			var goodsId    = $(this).attr("data-id"),
				goodsSrc   = $(this).attr("data-src"),
				goodsName  = $(this).attr("data-Name"),
				goodsPlace = $(this).attr("data-place"),
				goodsPrice = $(this).attr("data-price");
			//将信息存储到对象中
			var oGoods={
				id:goodsId,
				src:goodsSrc,
				name:goodsName,
				place:goodsPlace,
				price:goodsPrice,
				num:1
			};

			//读取cookie并判断是否存在(存在则没有商品被添加过，不存在，则需要创建一个新数组)
			var sGoods=getCookie("goods");
			var aGoods=sGoods ? JSON.parse(sGoods):[];
			//判断即将添加的商品是否存在，如果存在则直接数量+1，不存在则直接添加进数组
			var notExists=aGoods.every(function(v){
				if(v.id===oGoods.id){
					//商品数量+1
					v.num++;
					return false;
				}
				return true;
			});
			//如果商品没有存在过 则将商品对象添加到数组中
			if(notExists){
				aGoods.push(oGoods);
			}
			//存储到cookie中
			setCookie("goods",JSON.stringify(aGoods),7);

			//显示遮罩层
			$(".zzc_modal").show();
		});
	});
});