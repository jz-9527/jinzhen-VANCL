<?php
    include('./conn.php');
    //接收账号密码信息
    $username=$_GET['username'];
    $password=$_GET['password'];
    
    //数据查询用户
    $sql="select * from user where user_name='$username' and user_pass='$password'";

    $request=$mysqli->query($sql);

    //有就返回1，没有返回0
    if($request->num_rows>0){
        echo '{"msg":"1"}';
    }else{
        echo '{"msg":"0"}';
    }
    $mysqli->close();
?>