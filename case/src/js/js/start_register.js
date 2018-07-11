function StartRegister(){
	this.username=$("#username");
	this.password=$("#password");
	this.btn=$(".btn")
	this.inputCode=$(".code input")
	this.code=$(".code button")
	this.init();
};
$.extend(StartRegister.prototype,{
	init:function(){
		this.btnClick();
	},
	btnClick:function(){
		this.btn.on("click",$.proxy(this.handlebtnClick,this))
	},
	handlebtnClick:function(){
		if(this.inputCode.val()==this.code.html()){
			var unameVal=this.username.val();
			var pwdVal=this.password.val();
			$.ajax({
				url: '../php/select.php',
				type: 'post',
				dataType: 'json',
				data: {uname:unameVal,pwd:pwdVal},
				success:$.proxy(this.slectSQL,this)
			})
		}else{
			alert("验证码错误")
		}
	},
	slectSQL:function(data){
		if(data.status==1){
			alert("登录成功");
			location.href="http://localhost/case/src/html/_index.html";
		}else if(data.status==0){
			alert("用户名不存在");
		}else{
			alert("密码错误");
		}
	}

});
new StartRegister();