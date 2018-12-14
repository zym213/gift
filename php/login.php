<?php
    include "conn.php";
    
    if(isset($_POST['user']) && isset($_POST['password']) /* && isset($_POST['tel']) */){
        $user=$_POST['user'];
        //$tel=$_POST['tel'];
        $password=md5($_POST['password']);
        $query="select * from user where username='$user' and password='$password'";
        $result=mysql_query($query);
        //$data=mysql_fetch_array($result,MYSQL_ASSOC);
        if(mysql_fetch_array($result)){
            echo true;
            //header('location:http://localhost/liwuyou/src/222index.html');
	        //echo json_encode($data);
        }else{
            echo false;
        }
    }
?>