function FloorMassage(){
	this.detail=$(".detail");
	this.id=location.href.split("?")[1];
	this.init();
}

$.extend(FloorMassage.prototype,{
	init:function(){

		this.addMassageFloor();
		this.onAddcar();
		this.onsubcount();
		this.onaddcount();
	},
	addMassageFloor:function(){
		$.ajax({
			url:"../js/floor.json",
			dataType:'json',
			async:false,
			
			success:$.proxy(this.handleAddMassageFloor,this)
		})

	},
	handleAddMassageFloor:function(data){
		
		var arr=[]
		for(var i=0;i<data.length;i++){
			for(var j=0;j<data[0].length;j++){
				if(data[i][j].id == this.id){
					
				var str=`
						<div class="fl magnifying ">
						<div class="mid">
							<img src="${data[i][j].minImg.a}">
							<div id="filter"></div>
						</div>
						<div class="min">
							<img src="${data[i][j].minImg.a}" class="minimg" data-img="${data[i][j].minImg.a}">
							<img src="${data[i][j].minImg.b}" class="minimg" data-img="${data[i][j].minImg.b}">
							<img src="${data[i][j].minImg.c}" class="minimg" data-img="${data[i][j].minImg.c}">
							<img src="${data[i][j].minImg.d}" class="minimg" data-img="${data[i][j].minImg.d}">
						</div>
						<div class="max">
							<img src="${data[i][j].minImg.a}">
						</div>
					</div>
					<div class="fl carMassage">
						<ul>
							<li><span>${data[i][j].txt}</span></li>
							<li><span>单价</span> : <span class="unit">${data[i][j].price}</span></li>
							<li><hr></li>
							<li>选择配置：
							<a href="##">i5/8G/500G/集显</a>  <a href="##">极速i5/16G/240G SSD/集显</a></li>
							<li>增值保障：<a href="##">硬件无忧上门（¥3/月）</a>  <a href="##">意外保（¥15/月</a></li>
							<li>租赁方式：<a> 月租金 105元 （平均月租金103元/月，1-12期：105元/月,13-24期：100元/月） ,租期 24 个月 </a></li>
							<li>起租日期：2018-07-14</li>
							<li class="jorj"><span>数量:</span> <button class="subcount">-</button><input class="count" type="text" value="1"><button class="addcount">+</button></li>
							<li><span>合计金额:</span><b class="sum">${data[i][j].price}</b></li>
							<li class="fl addcar"><a href="javascript:;">加入购物车</a></li>
							<li class="fl lookcar"><a href="../html/payment.html">查看购物车</a></li>
						</ul>
					</div>
						`;
				arr.push(str)
				
				}
			}
			
		}
		this.detail.html(arr.join(''))
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
new FloorMassage();