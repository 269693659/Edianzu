function Footer(container){
	this.container = container;
	this.init();
}
Footer.content=`
	<div id="footer" class="main">
		<ul>
			<li><h3>关于易点租</h3></li>
			<li><a href="##">公司概况</a></li>
			<li><a href="##">商务合作</a></li>
			<li><a href="##">加入我们</a></li>
			<li><a href="##">联系我们</a></li>
			<li><a href="##">媒体报道</a></li>
		</ul>
		<ul>
			<li><h3>企业服务</h3></li>
			<li><a href="##">什么是免押金租赁</a></li>
			<li><a href="##">租机流程</a></li>
			<li><a href="##">租金缴付</a></li>
			<li><a href="##">租赁方式</a></li>
			<li><a href="##">租赁协议</a></li>
		</ul>
		<ul>
			<li><h3>企业服务</h3></li>
			<li><a href="##">价格说明</a></li>
			<li><a href="##">开取发票</a></li>
		</ul>
		<ul>
			<li><h3>企业服务</h3></li>
			<li><a href="##">集团账号登录</a></li>
			<li><a href="##">服务中心</a></li>
		</ul>
		<div class="f-logo fl">
			<img src="../img/f_logo.jpg">
			<h4>400-886-9528</h4>
			<p>周一至周日(9:00-18:00)</p>
		</div>
	</div>
	 
	<div id="bottom" >
		<div class="main">
		<p>© Copyright Reserved 2014-2018　|   京公网安备 11010102002019号 |　京ICP备14057387号-1　|　北京易点淘网络技术有限公司 </p>
		<p>办公地址： 北京市海淀区西二旗大街39号融通高科大厦二层 易点租 </p>
		<p>
			<a href="##">北京退换机地址</a>
			<a href="##">上海退换机地址</a>
			<a href="##">深圳退换机地址</a>
			<a href="##">武汉退换机地址</a>
		</p>
		</div>
	</div>

	`;
$.extend(Footer.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		
		this.container.append(Footer.content)
	}

});
new Footer($("#allFooter"))
