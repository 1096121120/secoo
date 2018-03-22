$(function(){
	//读取cookie并渲染到页面
	var sCookie=getCookie("goods");
	//将cookie转换成数组  如没有则返回空数组
	var aCookie=sCookie ? JSON.parse(sCookie):[];
	//遍历数组
	aCookie.forEach((v)=>{
		$(".cartList tbody").append(`
			<tr class="cart_list">
				<td>
					<input type="checkbox"  />
				</td>
				<td width="97">
					<a href="goodsdetails.html" class="shop_imgA">
						<img src="${v.src}">
					</a>
				</td>
				<td>
					<div class="cartName">
						<a href="goodsdetails.html">${v.name}</a>
					</div>
				</td>
				<td>
					${v.place}
				</td>
				<td>
					￥
					<span class="price">${v.price}</span>
				</td>
				<td>
					<div class="countNum">
						<span class="count_reduce">-</span>
						<div class="count_box">
							<input type="text" class="count" value="${v.num}">
						</div>
						<span class="count_plus">+</span>
					</div>
				</td>
				<td>
					<strong>
						￥
						<span class="subtotal">${v.num*v.price}</span>
						元
					</strong>
				</td>
				<td>
					<a href="javascript:;" class="delete" data-id="${v.id}">删除</a>
				</td>
			</tr>
		`);
	});
	//加载完  统计总价
	total();
	//计算数量
	num_total();
	//加减等计算操作
	//点加号
	$(".count_plus").click(function(){
		let count=$(this).parent().find(".count").val();
		count++;
		//文本框中数量发生改变
		$(this).parent().find(".count").val(count);
		// 每次点击右侧小计发生改变
		let subtotal=parseInt($(this).parent().parent().siblings().find(".price").text())*count;
		$(this).parent().parent().siblings().find(".subtotal").text(subtotal);
		//每次点击  调用计算总价函数
		total();
		//计算数量
		num_total();

	});
	//点减号
	$(".count_reduce").click(function(){
		let count=$(this).parent().find(".count").val();
		count--;
		if(count<1){
			//当数量小于1的时候  直接调用删除事件
			$(this).parent().parent().siblings().find(".delete").click();
			return false;
		}
		//文本框中数量发生改变
		$(this).parent().find(".count").val(count);
		//每次点击右侧小计发生改变
		let subtotal=parseInt($(this).parent().parent().siblings().find(".price").text())*count;
		$(this).parent().parent().siblings().find(".subtotal").text(subtotal);
		//每次点击  调用计算总价函数
		total();
		//计算数量
		num_total();
	});

	//全选反选
	$("#choseAll").checkRelation($("tbody :checkbox"));
	$("#checkAll").checkRelation($("tbody :checkbox"));




});
//计算总价
function total(){
	var totalPrice=0;
	$("tbody .subtotal").each(function(){
		totalPrice+=parseInt($(this).text());
	});
	$(".totalPrice strong").text(totalPrice);
}
//计算数量
function num_total(){
	var num_total=0;
	$("tbody .count").each(function(){
		num_total+=parseInt($(this).val());
	});
	$(".num_total").text(num_total);
}