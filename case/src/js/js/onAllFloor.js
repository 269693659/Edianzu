$(document).ready(function () {
	function AllFloor(){
		this.aclick=$(".aclick")
		this.init()
		
	}

	$.extend(AllFloor.prototype,{
		init:function(){
			this.onAclick()
		},

		onAclick:function(){
			this.aclick.on("click",$.proxy(this.handleOnAclick,this))
		},
		handleOnAclick:function(e){
			//阻止a的默认跳转
			 e.preventDefault?e.preventDefault():e.returnValue = false;


			if($(e.currentTarget).attr("class") == "aclick"){
				var id=$(e.currentTarget).attr("data-id")
			
				location.href = "../html/datail-floor.html?"+id
			}
			
		}
	})
	new AllFloor()
})
