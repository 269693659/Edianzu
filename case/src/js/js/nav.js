function Nav(container){
	this.container=container;
	this.init();
}
Nav.content=`
<div id="nav-box">
	<div class="head-nav main">
		<h3 class="fl allClass" >
			<i class="textLeft"></i>
			<span>商品分类</span>
			<i class="textRight"></i>
			<ol>
				<li>
					<h4><i></i>办公电脑</h4>
					<p>
						<a href="">笔记本</a>
						<a href="">台式机</a>
						<a href="">台式机</a>
						<a href="">主机</a>
					</p>
				</li>
				<li>
					<h4><i></i>办公外设</h4>
					<p>
						<a href="">投影仪</a>
						<a href="">显示器</a>
						<a href="">平板</a>
						<a href="">手机</a>
						<a href="">电视</a>
						<a href="">配件</a>
					</p>
				</li>
				<li>
					<h4><i></i>增值服务</h4>
					<p>
						<a href="">无忧服务</a>
						<a href="">驻场服务</a>
						<a href="">企业回收</a>
						<a href="">计次上门服务</a>
						<a href="">软件定制服务</a>
					</p>
				</li>
				<li>
					<h4><i></i>办公服务</h4>
					<p>
						<a href="">网络部署</a>
						<a href="">服务器</a>
						<a href="">工作站</a>
						<br/>
						<a href="">打印机</a>
						<a href="">净化器</a>
					</p>
				</li>
			</ol>
		</h3>
		<ul class="fr">
			
			<li><a href="http://localhost/Edianzu/case/src/html/_index.html" class="head-nav">首页</a></li>
			<li><a href="">限量特惠</a></li>
			<li><a href="">我要短租</a></li>
			<li><a href="">增值服务</a></li>
			<li><a href="">企业回收</a></li>
			<li><a href="">客户说</a></li>
			<li><a href="">资产管理</a></li>
			<li><a href="">联想租赁季</a></li>
		</ul>
	</div>
</div>`;
$.extend(Nav.prototype,{
	init:function(){
		this.createDom()
	},
	createDom:function(){
		this.ele=$("<div></div>").append(Nav.content);
		this.container.append(this.ele)
	}
})