function Top(container){
	this.container = container;
	this.init();
}
Top.content=`
<div id="top-box">
	<div class="main top">
		<ul class="fl">
			<li>您好，欢迎来到易点租</li>
			<li><a href="http://localhost/case/src/html/register.html">登录</a></li>
			<li><a href="http://localhost/case/src/html/login.html">注册</a></li>
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
	},
	createDom:function(){
		this.ele=$("<div></div>").append(Top.content);
		this.container.append(this.ele)
	}
})




