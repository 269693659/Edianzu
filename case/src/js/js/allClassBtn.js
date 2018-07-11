function allClassBtn(){
	this.h3=$(".allClass");
	this.ol=$(".allClass ol");
	this.ol.css("display","none");
	this.init();
}
$.extend(allClassBtn.prototype,{
	init:function(){
		
		this.h3mouseOver();
		this.h3mouseOut();

	},
	//移入
	h3mouseOver:function(){
		this.h3.on("mouseover",$.proxy(this.handleH3mouseOver,this))
	},
	handleH3mouseOver:function(){
		this.ol.css("display","block")
	},
	//移开
	h3mouseOut:function(){
		this.h3.on("mouseout",$.proxy(this.handleH3mouseOut,this))
	},
	handleH3mouseOut:function(){
		this.ol.css("display","none")
	}
})
new allClassBtn();