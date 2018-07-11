function Magnifying(){
	this.min=$(".min")
	this.mid=$(".mid")
	this.max=$(".max")
	this.minImg=$(".min img")
	this.midImg=$(".mid img")
	this.maxImg=$(".max img")
	this.filter=$("#filter")
	this.init()

}
$.extend(Magnifying.prototype,{
	init:function(){
		this.MinMouseover()
		this.midMoverOver()
		this.midMoverOut()
	},
	//min 移入
	MinMouseover:function(){
		this.min.on("mouseover",$.proxy(this.handleMinMouseover,this))
	},
	handleMinMouseover:function(event){
		var target=$(event.target);
		var midSrc=target.attr("data-img")
		if(event.target.className=="minimg"){
			this.midImg.attr("src",midSrc)
			this.maxImg.attr("src",midSrc)
		}
	},
	//mid 移入
	midMoverOver:function(){
		this.mid.on("mousemove",$.proxy(this.handleMidMoverOver,this))
	},
	handleMidMoverOver:function(e){
		this.filter.css("display","block");
		this.max.css("display","block");
		var l=e.pageX - this.filter.width()/2 - this.mid.offset().left;
		var t=e.pageY - this.filter.height()/2 - this.mid.offset().top;
		
		var iw=this.mid.width() - this.filter.width();
		var ih=this.mid.height() - this.filter.height();
		l=l>iw?iw:(l<0?0:l);
		t=t>ih?ih:(t<0?0:t);
		this.filter.css("left",l);
		this.filter.css("top",t);

		this.maxImg.css({
			left:-2*l,
			top:-2*t,
		});
	},
	//mid 移入
	midMoverOut:function(){
		this.mid.on("mouseout",$.proxy(this.handleMidMoverOut,this))
	},
	handleMidMoverOut:function(){
		this.filter.css("display","none")
		this.max.css("display","none")

	}
})
new Magnifying();