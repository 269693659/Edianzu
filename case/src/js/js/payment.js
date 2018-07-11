function Payment(){
	this.allPrice=$(".allPrice")
	this.tab=$("#tab")
	this.init()
}
$.extend(Payment.prototype,{
	init:function(){
		this.getdata()
		this.checked()
		this.onCount()
		this.ondel()
	},
	getdata:function(){
		$.ajax({
			url:"../js/product.json",
			dataType:'json',
			async:false,

			success:$.proxy(this.handleGetdata,this)
		})
	},
	handleGetdata:function(data){
		var data=data.hot;
		var arr=[];
		for(var key in localStorage){
			for(var i in data){
				if(key==data[i].id){
					var str=`<tr data-id="${data[i].id}">
						<td><input class="select" type="checkbox"/>&ensp;<span></span></td>
						<td><img src="${data[i].img}" style="width: 86px"></td>
						<td  width=620>
							
							<p>${data[i].maxtitle}</p>
							<p>支持7天无理由退货</p>
							
						</td>
						<td> <span class="aPrice">${data[i].price}</span> </td>
						<td>
							<button class="subcount">-</button><input type="text" class="num" value=${localStorage[key]}><button class="addcount">+</button>
						</td>
						<td><span class="unitPrice">${"￥"+localStorage[key]*data[i].price.slice(1)}</span></td>
						<td>
							<p><a href="javascript:;" class="del">删除</a></p>
							<p><a href="javascript:;">移到我的关注</a></p>
							<p><a href="javascript:;">加到我的关注</a></p>
						</td>
					</tr>`
					arr.push(str)
				}
			}
		}
		this.tab.html(this.tab.html()+arr.join(''))

	},
	checked:function(){
		this.select=$(".select");
		//点击全选框
		$("#all").on("click",$.proxy(this.handleChecked,this))
		//点击商品选框
		this.select.on("click",$.proxy(this.handleSelect,this))
		
	},
	handleChecked:function(){
		this.aPrice=$(".aPrice")
		this.unitPrice=$(".unitPrice")
		//判断全选框的状态 
		if($("#all").prop("checked")){
			//设置每个产品的选框状态
			this.select.prop("checked",true)
			var num=0
			//遍历每一个产品的总价
			for(var i =0;i<this.unitPrice.length;i++){
				num+=Number(this.unitPrice.eq(i).html().slice(1))
				
			}
			//把每个产品的总价之和,赋给结算总价
			this.allPrice.html("￥"+num)
		}else{
			this.select.prop("checked",false)
			this.allPrice.html("￥"+ 0)	}
	},
	handleSelect:function(e){
		var bstop=true;
		//遍历每个的选框状态
		for(var i=0;i<this.select.length;i++){
			if(!this.select.eq(i).prop("checked")){
				bstop=false
			}
		}

		if(bstop){
			//每个商品的选框都是选中状态,那么全选框也为选中
			$("#all").prop("checked",true)
		}else{
			$("#all").prop("checked",false)
		}
		//设置结算总价的值
		var target = $(e.target)
		var unitPrice = Number(target.closest("tr").find('.unitPrice').html().slice(1))

		if(target.prop("checked")){
			
			this.allPrice.html("￥" + (Number(this.allPrice.html().slice(1))+unitPrice))
		}else{
			this.allPrice.html("￥" + (Number(this.allPrice.html().slice(1))-unitPrice))
		}
		
	},
	onCount:function(){
		this.subcount = $(".subcount")
		this.addcount = $(".addcount")
		this.subcount.on("click",$.proxy(this.handleSubCount,this))
		this.addcount.on("click",$.proxy(this.handleAddCount,this))
	},
	handleSubCount:function(e){
		
		var target = $(e.target)
		var n = target.next().val();
		var aPrice=Number(target.closest("td").prev().children().html().slice(1))
		var unitPrice = Number(target.closest("td").next().children().html().slice(1))
		var id=target.closest("tr").attr("data-id")

		//获取到商品的选框
		var select=target.closest("tr").find('.select')
		select.prop("checked",true)

		if(n>=1){
			//点击减号,如果数量的值大于等于1,就--
			n--;
			target.next().val(n)
			//改变单个总价的值
			
			target.closest("td").next().children().html("￥" + (n * aPrice))
			//改变localStorage的值
			localStorage[id]=n

		}
		if(n==0){
			//如果数量值是1;那么就等于1
			target.next().val(0);
			//如果数量为0,选框为false
			select.prop("checked",false)
			//改变localStorage的值
			localStorage[id]=0

		}
		this.checkShow()
		
	
		
	},
	handleAddCount:function(e){
		var target=$(e.target)
		var id=target.closest("tr").attr("data-id")
		var aPrice=Number(target.closest("td").prev().children().html().slice(1))
		var unitPrice = Number(target.closest("td").next().children().html().slice(1))
		var select=target.closest("tr").find('.select')
		//点击加号的时候,选框自动选上
		select.prop("checked",true)
		//点击加号的时候++
		var n=target.prev().val();
		n++;
		target.prev().val(n);
		//改变localStorage
		localStorage[id]=n
		//单个商品的总价
		target.closest("td").next().children().html("￥" + (unitPrice + aPrice))
		//获取到商品的选框
		var select=target.closest("tr").find('.select')

		this.checkShow()
		
	},
	checkShow:function(){
		//结算初始值为0
		this.allPrice.html("￥" + 0)
		var num = 0;
		//遍历所有选框为true的总价,赋值给num
		var bstop=true;
		for(var i=0;i<$(".select").length;i++){
			if($(".select").eq(i).prop("checked")){

				num+=Number($(".select").eq(i).closest("tr").find(".unitPrice").html().slice(1))
			}else{
				bstop=false;
			}
		}

		//将num赋值给结算总价
		this.allPrice.html("￥" + num)
		if(bstop){
			//每个商品的选框都是选中状态,那么全选框也为选中
			$("#all").prop("checked",true)
		}else{
			$("#all").prop("checked",false)
		}
	},
	ondel:function(){
		this.del=$(".del")
		this.del.on("click",$.proxy(this.handleOnDel,this))
	},
	handleOnDel:function(e){
		$(e.target).closest('tr').remove()
		var name=$(e.target).closest('tr').attr("data-id")
		
		localStorage.removeItem(name)
	}
})
new Payment();