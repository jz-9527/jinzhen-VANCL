<?php
    include('./conn.php');
    //接收账号密码信息
    $phone=$_GET['phone'];
    $password=$_GET['password'];
    
    //数据查询用户
    $sql="select * from user where user_phone='$phone' and user_pass='$password'";

    $request=$mysqli->query($sql);

    //有就返回查到的数据，没有返回0
    if($request->num_rows>0){
        $arr=array();
        while($row=$request->fetch_assoc()){
            array_push($arr,$row);
            $json=json_encode($arr);
        }
        echo $json;
    }else{
        echo '[{"msg":"0"}]';
    }
    $mysqli->close();
?>