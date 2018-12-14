<?php
    header('content-type:text/html;charset=utf-8');
    define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','12345678');
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);
	if(!$conn){
		die("数据库连接失败".mysql_error());
	}
	
	if(!mysql_select_db('liwuyou')){
		die("数据库名称不存在");
	}else{
		mysql_select_db('liwuyou');
	}
	
	mysql_query('SET NAMES UTF8');
?>