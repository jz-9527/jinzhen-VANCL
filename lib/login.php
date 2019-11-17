<?php
    include('./conn.php');

    $phone=$_GET['phone'];
    $password=$_GET['password'];

    $sql="select * from user where user_phone='$phone'";
    $request=$mysqli->query($sql);

    if($request->num_rows==0){
        $sqls="insert into user(user_phone,user_pass) values('$phone','$password')";
        $requests=$mysqli->query($sqls);
        if($requests){
            echo '[{"msg":"注册成功"}]';
        }else{
            echo '[{"msg":"遇到不可抗力，注册失败"}]';
        }
    }else{
        echo '[{"msg":"该手机号已注册"}]';
    }
    $mysqli->close();
?>