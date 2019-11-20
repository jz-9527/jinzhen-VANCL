<?php
    include('./conn.php');

    $list=$_GET['list'];
    $id=$_GET['id'];

    $field=substr($list,0,3).'_id'; 
    
    $sql="select * from $list where $field=$id";
 
    $res=$mysqli->query($sql);

    $arr = array();
    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json=json_encode($arr);

    echo $json;

    $mysqli->close();
?>