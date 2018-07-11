function FloorBtn(){
	this.floorBtn=$("#floorBtn");
	this.li=$("#floorBtn ul li");
	
	this.jumpF=$(".jumpF")
	this.init()
	
}
$.extend(FloorBtn.prototype,{
	init(){
		this.onscroll()
		this.onfloorBtn()
	},
	onscroll(){
		//滚动事件
		$(document).on("scroll",$.proxy(this.getScroll,this))
	},
	getScroll(){
		
		if(300>$(document).scrollTop()){
			this.floorBtn.fadeOut()
		}else{
			this.floorBtn.fadeIn()
		}

		this.jumpF.each($.proxy(this.handleEach,this))

	},
	handleEach(i){
		
			var t=this.jumpF.eq(i).offset().top - 200;
			var ih=this.jumpF.eq(i).outerHeight();
			if(t <=$(document).scrollTop() && t+ih>=$(document).scrollTop()){
				
				this.li.eq(i).addClass('bgcolor').siblings().removeClass('bgcolor')
				this.li.eq(i).html(this.floor[i])
				
			}else{
				this.li.eq(i).html(this.floors[i])
			}
			var lastli=this.jumpF.eq(this.jumpF.length-1)
			if(lastli.offset().top + lastli.outerHeight()<=$(document).scrollTop()){
				this.li.removeClass('bgcolor')
			}
			
		
	},
	onfloorBtn(){
			this.li.on("click",$.proxy(this.handlefloorBtn,this))
			
	},
	handlefloorBtn(e){
		
		var t=this.jumpF.eq($(e.target).index()).offset().top - 200
		$("html").stop(true).animate({
			scrollTop:t
		},100)

		
		
	},
	floor:{0:'热销',1:'行政',2:'技术',3:'商务',4:'图形',5:'外设',6:'合作'},
	floors:{0:'Hot',1:'F1',2:'F2',3:'F3',4:'F4',5:'F5',6:'合作'}

});
new FloorBtn()