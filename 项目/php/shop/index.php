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
    // 加载php文件
    include_once "header.php"; // 网站头部
    //include_once "data.php"; // 商品数据
    include_once "db.php"; // 加载数据库连接

    $sql = "select * from products limit 0,6";
    $result = mysql_query($sql);

    $all_products = array();
    while($row = mysql_fetch_array($result)){
        $all_products[] = $row;
    }
    ?>
</div>
<div class="wrap clearfix">
    <div class="product">
        <?php
        foreach ($all_products as $key => $value) {
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
    <div class="aside">
        <h2 class="hd">已浏览过的商品</h2>

        <div class="bd">
            <?php
            // 读取cookie，将所有的商品id到数据库中做查询
            if(isset($_COOKIE['cookie_products'])){
                $arr = unserialize($_COOKIE['cookie_products']);
                $i=0;
                foreach($arr as $value){
                    if($i==4){
                        break;
                    }
                    $i++;
                    $sql = "select * from products where id = ".$value;
                    $result = mysql_query($sql);
                    $row = mysql_fetch_array($result);
                    echo <<<cookie_item
                    <dl class="visited-item">
                        <dt>
                            <a href="detail.php?id={$row['id']}" title="{$row['title']}">
                                <img src="images/{$row['image']}" alt="{$row['title']}">
                            </a>
                        </dt>
                        <dd>
                            <span>{$row['title']}</span>
                            <strong>{$row['price']}元</strong>
                        </dd>
                    </dl>
cookie_item;
                }
                exit;
            }
            ?>

        </div>
    </div>
</div>
<div class="footer">
    <?php
    include_once "footer.php";
    ?>
</div>
</body>
</html>