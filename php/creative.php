<?php
    require "conn.php";
    $query=" select * from index_data";
    $result=mysql_query($query);
    $dataarr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$dataarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($dataarr);
?>