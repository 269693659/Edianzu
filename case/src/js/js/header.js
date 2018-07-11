function Header(){
	this.ele = $("#header");
	this.init();

}

$.extend(Header.prototype,{
	init:function(){
		this.top = new Top(this.ele);
		this.search = new Search(this.ele);
		this.nav=new Nav(this.ele);
	}
})
new Header();





