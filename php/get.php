<?php
    require 'conn.php';
	$id=$_GET['sid'];
	$result=mysql_query("select * from index_data where sid='$id'");
	$data=mysql_fetch_array($result,MYSQL_ASSOC);
	echo json_encode($data);
?>