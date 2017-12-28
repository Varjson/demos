<?php
session_start();
// 添加数量
if(isset($_GET['addid'])){
    $id = $_GET['addid'];
    echo ++$_SESSION['cart'][$id]['num']; // response
}

if(isset($_GET['subid'])){
    $id = $_GET['subid'];
    if($_SESSION['cart'][$id]['num']>1){
        echo --$_SESSION['cart'][$id]['num']; // response
    }else{
        echo $_SESSION['cart'][$id]['num'];
    }
}

if(isset($_GET['delid'])){
    $id = $_GET['delid'];
    unset($_SESSION['cart'][$id]);
}