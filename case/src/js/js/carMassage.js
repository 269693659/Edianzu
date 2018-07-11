function CarMassage(){
	this.detail=$(".detail");
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
	//hot 字符串拼接
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
							<li>选择配置：
							<a href="##">i5/8G/500G/集显</a><a href="##">极速i5/16G/240G SSD/集显</a></li>
							<li>增值保障：<a href="##">硬件无忧上门（¥3/月）</a><a href="##">意外保（¥15/月</a></li>
							<li>租赁方式：<a> 月租金 105元 （平均月租金103元/月，1-12期：105元/月,13-24期：100元/月） ,租期 24 个月 </a></li>
							<li>起租日期：2018-07-14</li>
							<li class="jorj"><span>数量:</span> <button class="subcount">-</button><input class="count" type="text" value="1"><button class="addcount">+</button></li>
							<li><span>合计金额:</span><b class="sum">${data[i].price}</b></li>
							<li class="fl addcar"><a href="javascript:;">加入购物车</a></li>
							<li class="fl lookcar"><a href="../html/payment.html">查看购物车</a></li>
						</ul>
					</div>`;

			this.detail.append($("<div></div>")).append(str)
			}
		}
	},

	//点击减号
	onsubcount:function(){
		//单价
		this.unit=$(".unit")
		//合计金额
		this.sum=$(".sum")
		//减号
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
	//点击加号
	onaddcount:function(){
		this.addcount=$(".addcount");
		this.addcount.on("click",$.proxy(this.handleAddcount,this))
	},
	handleAddcount:function(){
		var addnum=Number(this.count.val()) + 1;
		this.count.val(addnum);
		this.sum.html("￥"+this.count.val()*Number(this.unit.html().slice(1)))
	},
	//点击加入购物车
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
		//拿到本来的数量,如果之前没有,就是null + 数量
		localStorage.setItem(this.id,Number(this.count.val())+Number(localStorage.getItem(this.id)));
		
	}

})
new CarMassage();