function Banner(){
	this.banner = $(".banner");
	this.ul=$(".banner ul");
	this.aLi=$(".banner ul li");
	this.aBtn=$(".banner ol li");
	this.iW = $(window).width(); 
	this.ul.css("width",this.aLi.length*this.iW)
	this.aLi.css("width",this.iW )
	this.iNow = 0;
	this.timer = null;
	this.init();
}
$.extend(Banner.prototype,{
	
	init:function(){
		
		this.autoplay()
		this.mouseover();
		this.mouseout();
		this.aBtnClick();

	},
	aBtnClick:function(){
		this.aBtn.each($.proxy(this.handleaBtnEach,this))
	},
	handleaBtnEach:function(i){
		this.aBtn.eq(i).on("mouseover",i,$.proxy(this.handleAbtn,this))
	},
	handleAbtn:function(event){
		var index = event.data;
		this.aBtn.eq(index).addClass('active').siblings().removeClass("active");

		this.ul.stop(true).animate({
			left:-index*this.iW
		})
		this.iNow = index;
	},
	
	mouseover:function(){
		this.banner.on("mouseover",$.proxy(this.handleMouseover,this))
	},
	handleMouseover:function(){
		clearInterval(this.timer);
	},
	mouseout:function(){
		this.banner.on("mouseout",$.proxy(this.handleMouseout,this))
	},
	handleMouseout:function(){
		this.autoplay()
	},
	autoplay:function(){

		this.timer = setInterval($.proxy(this.handleSetInterval,this),2000)

	},
	handleSetInterval:function(){
		if(this.iNow == this.aLi.length-1){
			this.iNow = 1;
			this.ul.css("left",0);
		}else{
			this.iNow++;
		}
		this.toImg();
	},
	toImg:function(){
		//轮播原理
		this.ul.stop(true).animate({
			left:-this.iNow*this.iW
		})
		this.aBtn.eq(this.iNow==this.aLi.length-1?0:this.iNow).addClass("active").siblings().removeClass("active");
	}
})
new Banner();