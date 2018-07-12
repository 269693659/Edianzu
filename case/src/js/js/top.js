function Top(container){
	this.container = container;
	this.init();
}
Top.content=`
<div id="top-box">
	<div class="main top">
		<ul class="fl">
			<li>您好，欢迎来到易点租</li>
			<li class="uname"><a href="../html/register.html">登录</a></li>
			<li><a href="../html/login.html">注册</a></li>
		</ul>
		<ol class="fr">
			<li><span>销售热线：</span><span>400-810-9528</span></li>
			<li><span>客服热线：</span><span>400-886-9528</span></li>
			<li><a href="">服务中心</a></li>
		</ol>
	</div>
</div>

`;
$.extend(Top.prototype,{
	init:function(){
		this.createDom();
		this.username();
	},
	createDom:function(){
		this.ele=$("<div></div>").append(Top.content);
		this.container.append(this.ele)

	},
	username:function(){
		if(document.cookie){
			var arr=document.cookie.split('=')
			
			this.uname=$(".uname a")
			this.uname.html(arr[1]).css("color","#37a3ff")

		}

		
		
	}

})




