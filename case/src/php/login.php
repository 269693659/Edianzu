<?php
	include "public.php";

	$uname = $_REQUEST["uname"];

	$sql="select * from `edianzu` where name='$uname'";

	$res=mysqli_query($conn,$sql);

	$n = mysqli_num_rows($res);

	if(!$n){
		echo json_encode(array(
			"status"=>0,
			"info"=>"用户名不存在"
		));
	}else{
		echo json_encode(array(
			"status"=>1,
			"info"=>"用户名存在"
		));
	}

?>