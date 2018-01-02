<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<!--网站头部-->
<div class="header">
    <?php
    include_once "header.php";
    include_once "db.php";
    ?>
</div><!--网站头部结束-->
<!--网站身体-->
<div class="wrap clearfix">
    <?php
    // 1. 通过GET方式接收id
    if(isset($_GET['id'])){
        $id = $_GET['id'];
    }else{
        echo "<script>location.href='products.php'</script>";
    }
    // 2. 通过id去数据库获得对应的商品所有信息
    $sql = "SELECT * FROM products where id=".$id;

    $result = mysql_query($sql);

    $product_info = mysql_fetch_assoc($result);

    // 3. 展示信息
    echo "<div class='product-info'>";
    echo "<h3>".$product_info['title']."</h3>";
    echo "<img src='images/{$product_info['image']}'/>";
    echo "<p>".$product_info['content']."</p>";
    echo "<p>价格：".$product_info['price']."</p>";
    echo "</div>";

    // 将商品ID保存到COOKIE中
    // 13,15
    if(isset($_COOKIE['cookie_products'])){
        // 二次以后
        $arr =  unserialize($_COOKIE['cookie_products']);
        // array_search: 找到返回数组下标，找不到返回false
        if(($search_id = array_search($id,$arr))!==false){
            // 如果找到，删除当前的数组元素
            unset($arr[$search_id]);
        }
        // array_unshift: 将商品id放到数组的首位
        array_unshift($arr,$id);
    }else{
        // 第一次进入
        $arr[] = $id;
    }
    // 将组装好的商品id数组，序列化后放入cookie
    setcookie("cookie_products",serialize($arr),time()+60*60*24*7);


    ?>
</div><!--网站身体结束-->
<!--网站脚-->
<div class="footer">
    <?php
    include_once "footer.php";
    ?>
</div><!--网站脚结束-->
</body>
</html>