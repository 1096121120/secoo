$.fn.extend({
	//全选
	checkedAll:function(isChecked){
		this.each(function(){
			this.checked=isChecked;
		});
	},
	//反选
	uncheck:function(){
		this.each(function(){
			this.checked=!this.checked;
		})
	},
	//全选的复选框和子复选框的关联
	checkRelation:function($sub){
		// $parent=this;  这样写下面的会覆盖上面的
		// console.log($parent);
		//全选的功能(父控制子)
		this.click(()=>{
			$parent=this;
			$sub.checkedAll($parent[0].checked);
		});
		//联动(子控制父：子复选框有改变，那么父复选框也要有对应的改变)
		$sub.click(function(){
			//遍历所有的子复选框
			let isChecked=true;
			$sub.each(function(){
				if(this.checked==false){
					isChecked=false;
				}
			});
			//改变父复选框的状态
			$parent[0].checked=isChecked;
		});
	}
});