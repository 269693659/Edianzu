function FloorMassage(){
	this.carMassage=$(".detail");
	this.id=location.href.split("?")[1];
	this.init();
}

$.extend(FloorMassage.prototype,{
	init:function(){

		this.addMassage();
		// this.onAddcar();
		// this.onsubcount();
		// this.onaddcount();
	},
	addMassage:function(){
		$.ajax({
			url:"../js/floor.json",
			dataType:'json',
			async:false,
			
			success:$.proxy(this.handleAddMassage,this)
		})

	},
	handleAddMassage:function(data){
		
		
		for(var i=0;i<data.length;i++){
			for(var j=0;j<data[0].length;j++){
				if(data[i][j].id == this.id){
					console.log(data[i][j].minImg.a)
				var str=`
						<div class="min">
							<img src="${data[i][j].minImg.a}" class="minimg" data-img="${data[i][j].minImg.a}">
							<img src="${data[i][j].minImg.b}" class="minimg" data-img="${data[i][j].minImg.b}">
							<img src="${data[i][j].minImg.c}" class="minimg" data-img="${data[i][j].minImg.c}">
							<img src="${data[i][j].minImg.d}" class="minimg" data-img="${data[i][j].minImg.d}">
						</div>
						`;

				this.carMassage.append($("<div></div>")).append(str)
				}
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
new FloorMassage();