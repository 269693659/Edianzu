$(document).ready(function () {

	function OnclickHot(){
		this.ondiv=$(".divclick");
		
		this.init()
	}
	$.extend(OnclickHot.prototype,{
		init:function(){
			this.divOnclic();
			
		},
		divOnclic:function(){
			this.ondiv.on("click",$.proxy(this.handleDivOnclic,this))
			
		},
		handleDivOnclic:function(e){
			//点击时获取父级
			var target=$(e.currentTarget);
			
			//为了阻止a标签跳转
			e.preventDefault();
			
			if(target.attr('data-divclick')=='divclick'){
				var id=target.children().attr("data-hotId");
				
				location.href = "../html/detail.html?"+id
				
			}
			
		}
	})
	new OnclickHot();
	

})
