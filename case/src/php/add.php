<?php
	include "public.php";

	$uname = $_REQUEST["uname"];
	$pwd = $_REQUEST["pwd"];
	$num = $_REQUEST["num"];

	$sql="INSERT INTO `edianzu`( `name`, `password`, `numble`) VALUES ('$uname','$pwd','$num')";

	$rows=mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array(
			"status"=>1,
			"info"=>"成功"
		));
	}else{
		echo json_encode(array(
			"status"=>0,
			"info"=>"失败"
		));
	}

?>