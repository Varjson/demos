<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<div class="header">
    <?php
    include_once "header.php";
    /*include_once "data.php";
    include_once "functions.php";*/
    include_once "db.php";

    // 是否需要排序
    if(isset($_GET['order'])){
        $order = $_GET['order'];
        // 排序后获得新的二维数组
        //$all_products = array_sort($all_products,$order,"desc");
        $sql = "select * from products order by ".$order." desc";
    }else{
        // 获取所有的商品信息
        $sql = "select * from products";
    }

    $result = mysql_query($sql);
    $all_products = array();
    while($row = mysql_fetch_array($result)){
        $all_products[] = $row;
    }
    ?>
</div>
<div class="wrap clearfix">
    <div class="hd">
        <a href="products.php?order=price">按价格</a>
        <a href="products.php?order=amount">按销量</a>
        <a href="products.php?order=hot">按人气</a>
    </div>
    <div class="product product-list">
        <?php
        foreach($all_products as $key=>$value){
            echo <<<item
        <div class="product-item">
            <h3>{$value['title']}</h3>
            <a href="detail.php?id={$value['id']}" title="{$value['title']}"><img src="images/{$value['image']}" alt="{$value['title']}"></a>
            <span class="price">价格：{$value['price']}元</span>
            <button class="add-cart" onclick="location.href='shopcar.php?id={$value['id']}'">加入购物车</button>
        </div>
item;
        }
        ?>
    </div>
</div>
<div class="footer">
    <?php
    include_once "footer.php";
    ?>
</div>
</body>
</html>