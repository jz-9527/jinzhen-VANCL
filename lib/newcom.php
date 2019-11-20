<?php
    include('./conn.php');

    $pagesize=12;
    $sql="select * from new limit 0,$pagesize";

    $res=$mysqli->query($sql);
    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json=json_encode($arr);

    echo $json;

    $mysqli->close();
?>