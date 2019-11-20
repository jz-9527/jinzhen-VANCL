<?php
    include('./conn.php');

    $pagesize=5;
    $sql="select * from commodity limit 0,$pagesize";

    $res=$mysqli->query($sql);
    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json=json_encode($arr);

    echo $json;

    $mysqli->close();
?>