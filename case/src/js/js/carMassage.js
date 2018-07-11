function CarMassage(){
	this.carMassage=$(".detail");
	this.id=location.href.split("?")[1];
	this.init();
}

$.extend(CarMassage.prototype,{
	init:function(){
		this.addMassage();
		this.onAddcar();
		this.onsubcount();
		this.onaddcount();
	},
	addMassage:function(){
		$.ajax({
			url:"../js/product.json",
			dataType:'json',
			async:false,

			success:$.proxy(this.handleAddMassage,this)
		})

	},
	handleAddMassage:function(data){
		var data=data.hot;
		
		for(var i=0;i<data.length;i++){
			// console.log(data[0].minImg.a)
			if(data[i].id==this.id){
				var str=`
					<div class="fl magnifying ">
						<div class="mid">
							<img src="${data[i].minImg.a}">
							<div id="filter"></div>
						</div>
						<div class="min">
							<img src="${data[i].minImg.a}" class="minimg" data-img="${data[i].minImg.a}">
							<img src="${data[i].minImg.b}" class="minimg" data-img="${data[i].minImg.b}">
							<img src="${data[i].minImg.c}" class="minimg" data-img="${data[i].minImg.c}">
							<img src="${data[i].minImg.d}" class="minimg" data-img="${data[i].minImg.d}">
						</div>
						<div class="max">
							<img src="${data[i].minImg.a}">
						</div>
					</div>
					<div class="fl carMassage">
						<ul>
							<li><span>${data[i].maxtitle}</span></li>
							<li><span>单价</span> : <span class="unit">${data[i].price}</span></li>
							<li><hr></li>
							<li>选择配置：</li>
							<li>增值保障：</li>
							<li>租赁方式：</li>
							<li>起租日期：</li>
							<li class="jorj"><span>数量:</span> <button class="subcount">-</button><input class="count" type="text" value="1"><button class="addcount">+</button></li>
							<li><span>合计金额:</span><b class="sum">${data[i].price}</b></li>
							<li class="fl addcar"><a href="javascript:;">加入购物车</a></li>
							<li class="fl lookcar"><a href="../html/payment.html">查看购物车</a></li>
						</ul>
					</div>`;

			this.carMassage.append($("<div></div>")).append(str)
			}
		}
	},
	onsubcount:function(){
		this.unit=$(".unit")
		
		this.sum=$(".sum")
		this.subcount=$(".subcount");
		
		this.subcount.on("click",$.proxy(this.handleSubcount,this))
	},
	handleSubcount:function(){
		
			if(this.count.val()<=1){
				this.count.val(1);
				this.sum.html(this.unit.html())
			}else{
				var num=Number(this.count.val()) - 1;
				this.count.val(num);
				this.sum.html("￥"+this.count.val()*Number(this.unit.html().slice(1)))
			}
	},
	onaddcount:function(){
		this.addcount=$(".addcount");
		this.addcount.on("click",$.proxy(this.handleAddcount,this))
	},
	handleAddcount:function(){
		var addnum=Number(this.count.val()) + 1;
		this.count.val(addnum);
		this.sum.html("￥"+this.count.val()*Number(this.unit.html().slice(1)))
	},
	onAddcar:function(){
		this.addcar=$(".addcar");
		this.count=$(".count");
		this.subcount=$(".subcount");
		this.addcount=$(".addcount");
		this.addcar.on("click",$.proxy(this.handleAddcar,this))
	},
	handleAddcar:function(){
		
		alert("已经成功加入购物车")
		//刷新当前页面,让顶部的购物车数量改变
		window.location.reload()

		localStorage.setItem(this.id,Number(this.count.val())+Number(localStorage.getItem(this.id)));
		
	}

})
new CarMassage();