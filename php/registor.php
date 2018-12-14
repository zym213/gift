<?php
    require "conn.php";
    //将信息塞到数据库里面
    if(isset($_POST['submit'])){
        $tel=$_POST['tel'];
        $password=md5($_POST['password']);
        $user=($_POST['username']);
        $query="insert user values(NULL,'$tel','$password',NOW(),'$user')";
        mysql_query($query);
        header('location:http://localhost/liwuyou/src/login.html');
    }
    

    //将传过来的tel与后端数据进行比较,如果有重复的
    if(isset($_POST['tel'])){
        $tels=$_POST['tel'];
        $result=mysql_query("select * from user where tel='$tels'");
        if(mysql_fetch_array($result)){
            echo 'false';
        }else{
            echo 'true';
        }

    }
?>