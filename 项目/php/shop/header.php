<div class="login">
    <a href="#">登陆</a> | <a href="#">注册</a>
</div>
<div class="nav">
    <?php
    // $_SERVER['PHP_SELF']: 当前URL
    $url = basename($_SERVER['PHP_SELF']); // basename: 获取当前文件名
    $index_acitve = ($url=="index.php")?'class="active"':'';
    $product_active = ($url=="products.php")?'class="active"':'';

    // 遍历购物车商品的总数量
    $sum = 0;
    if(isset($_SESSION['cart'])){
        foreach($_SESSION['cart'] as $v){
            $sum += $v['num'];
        }
    }
    ?>
    <ul class="clearfix">
        <li <?php echo $index_acitve;?>><a href="index.php">首页</a></li>
        <li <?php echo $product_active;?>><a href="products.php">商品</a></li>
        <li><a href="visited.php">已浏览的商品</a></li>
        <li><a href="shopcar.php">购物车(<span id="totalNum"><?php echo $sum;?></span>)</a></li>
    </ul>
</div>