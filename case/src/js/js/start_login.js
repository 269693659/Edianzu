function StartLogin(){
	this.uname=$("#username");
	this.pwd=$("#password");
	this.num=$("#phoneNumble");
	this.btn=$("#btn");
	this.txt=$(".l_bottom li p a");
	this.input=$(".l_bottom li input");
	this.init()
}
$.extend(StartLogin.prototype,{

	init:function(){
		this.input.click(function() {
			$(this).parent().css("borderColor","#37a3ff")
		});

		this.unameClick();
		this.pwdClick();
		this.numClick();
		this.btnClick()
	},
	//用户名正则验证
	unameClick:function(){
		this.uname.on("blur",$.proxy(this.handleUnameClick,this))
	},
	handleUnameClick:function(){
		var reg=/^\w{6,16}$/;
		var bstop=true;
		
		if (!reg.test(this.uname.val())) {
			this.uname.next().children().eq(0).children().attr("src","../img/false.png");
			this.uname.next().children().eq(1).html("6-16位字母或数字字母组合");
			this.uname.parent().css("borderColor","red");
			bstop=false;
		}
		else if(bstop){
			var unameVal=this.uname.val();
			$.ajax({
				url: '../php/login.php',
				type: 'post',
				dataType: 'json',
				data: {uname: unameVal},
				success:$.proxy(this.usernameSQL,this)
					
			})
		}
	},

	usernameSQL:function(data){

		if(data.status==0){
				this.uname.next().children().eq(0).children().removeAttr("src");
				this.uname.next().children().eq(1).html("");
				this.uname.parent().css("borderColor","#e9ebed");


			}else{
				this.uname.next().children().eq(0).children().attr("src","../img/false.png");
				this.uname.next().children().eq(1).html("用户名已存在");
				this.uname.parent().css("borderColor","red")
			}
	},
	//密码正则验证
	pwdClick:function(){
		this.pwd.on("blur",$.proxy(this.headlePwdClick,this))
	},
	headlePwdClick:function(){
		var reg=/^\w{6,16}$/;
		var bstop=true;
		if(!reg.test(this.pwd.val())){
			this.pwd.next().children().eq(0).children().attr("src","../img/false.png");
			this.pwd.next().children().eq(1).html("6-16位字母或数字字母组合");
			this.pwd.parent().css("borderColor","red");
			bstop=false;
		}else{
			this.pwd.next().children().eq(0).children().removeAttr("src");
			this.pwd.next().children().eq(1).html("");
			this.pwd.parent().css("borderColor","#e9ebed")
		}
	},
	//手机号码正则验证
	numClick:function(){
		this.num.on("blur",$.proxy(this.headleNumClick,this));
	},

	headleNumClick:function(){
		var reg=/^(13|18|15|17)\d{9}$/;
		var bstop=true;
		if(!reg.test(this.num.val())){
			this.num.next().children().eq(0).children().attr("src","../img/false.png");
			this.num.next().children().eq(1).html("请输入正确手机号码");
			this.num.parent().css("borderColor","red");
			bstop=false;
		}else{
			this.num.next().children().eq(0).children().removeAttr("src");
			this.num.next().children().eq(1).html("");
			this.num.parent().css("borderColor","#e9ebed")
		}
	},
	btnClick:function(){
		this.btn.on("click",$.proxy(this.headleBtnClick,this))
	},
	headleBtnClick:function(){
		var bstop=true;
		var unameVal=this.uname.val();
		var pwdVal=this.pwd.val();
		var numVal=this.num.val();
		for(var i=0;i<this.input.length-1;i++){
			
			if(this.input.eq(i).val()!="" && this.txt.eq(i).html()==""){
				bstop=true;
			}else{
				bstop=false;
				break;
				
			}
		}	
		if(bstop){
			$.ajax({
				url: '../php/add.php',
				type: 'post',
				dataType: 'json',
				data: {uname:unameVal,pwd:pwdVal,num:numVal},
				success:$.proxy(this.buttomSQL,this)
			})
		}
	},
	buttomSQL:function(data){
		
		if(data.status==1){
			alert("注册成功");
			location.href="http://localhost/case/src/html/register.html";

		}else{
			alert("注册失败");

		}
	}

})

new StartLogin();