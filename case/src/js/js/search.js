function Search(container){
	this.container=container;
	this.init();
}

Search.content=`
<div class="main header">
	<div class="head-top">
		<ul class="fl">
			<li class="fl"><a href=""><img src="../img/logo.jpg"></a></li>
			<li class="fr">
				<input type="text" placeholder="免押金租电脑" class="fl"></input>
				<button><i></i>搜索</button>
				<a href="##">Latitude 3490</a>
				<a href="##">苹果笔记本</a>
				<a href="##"> X230</a>
				<a href="##">T480</a>
				<a href="##">戴尔笔记本</a>
				<a href="##">Office</a>
				<a href="##">净化器</a>
				<a href="##">净化器</a>
				<a href="##">小米</a>
			</li>

		</ul>
		<a href="../html/payment.html" class="car fr"><i></i><span>购物车</span><b class="carNum"></b></a>
	</div>

</div>`;
$.extend(Search.prototype,{
	init:function(){
		this.createDom();
		this.carNum()
	},
	createDom:function(){
		this.ele=$("<div></div>").append(Search.content);
		this.container.append(this.ele);
	},
	carNum:function(){
		this.carNum=$(".carNum")

		var num=0;
		for(var i=0;i<localStorage.length;i++){
			var  name = localStorage.key(i);
			num+=Number(localStorage[name])
		}
		this.carNum.html(num)
		
	}
})