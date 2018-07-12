<?php
	include "public.php";

	$uname = $_REQUEST["uname"];

	$pwd =$_REQUEST["pwd"];

	$sql="select * from `edianzu` where name='$uname'";

	$res=mysqli_query($conn,$sql);

	$n = mysqli_num_rows($res);

	if(!$n){
		echo json_encode(array(
			"status"=>0,
			"info"=>"用户名不存在"
		));
	}else{
		$data = mysqli_fetch_assoc($res);

		if($data["password"] == $pwd){
			echo json_encode(array(
				"status"=>1,
				"info"=>"成功",
				"username"=>$uname
			));
		}else{
			echo json_encode(array(
				"status"=>2,
				"info"=>"密码错误"
			));
		}
	}

?>