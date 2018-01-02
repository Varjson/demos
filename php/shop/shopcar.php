<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>购物车</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="./js/jquery.js"></script>
    <script>
        $(function () {
            // 当点击+按钮是触发
            $(".add").click(function () {
                // 获取当前选中行的id
                var _id = $(this).attr("data-id");
                var obj = this;

                // 通过此id，将SESSION购物车中此商品的数量+1
                $.get("ajax.php",{addid: _id}, function (responseText, status) {
                    // 将页面中的数量+1
                    $(obj).parent().find("span").html(responseText);

                    // 修改购物车总数量
                    calcPrice(obj, responseText);
                    calcTotalPrice(); // 计算总价格和购物车数量
                });
            });

            // 当点击-按钮是触发
            $(".sub").click(function () {
                // 获取当前选中行的id
                var _id = $(this).attr("data-id");
                var obj = this;

                $.get("ajax.php",{subid: _id}, function (responseText, status) {
                    $(obj).parent().find("span").html(responseText);
                    // 修改购物车总数量
                    calcPrice(obj, responseText);
                    calcTotalPrice();// 计算总价格和购物车数量
                });
            });
            
            // 删除
            $(".del").click(function () {
                var _id = $(this).attr("data-id");
                var obj = this;

                $.get("ajax.php",{delid: _id}, function (responseText, status) {
                    $(obj).parent().parent().remove();
                    calcTotalPrice();// 计算总价格和购物车数量
                });
            });

            // 计算购物车总数量
            function calcPrice(obj, num){
                // 计算小计
                // 获取 class=totalWW
                var price = $(obj).parent().parent().find(".price").html();
                var total = price*num;
                $(obj).parent().parent().find(".total").html(total.toFixed(2));
            }

            //计算总价格和购物车数量
            function calcTotalPrice(){
                // 计算总计
                var sum = 0;
                $.each($(".total"), function (i, item) {
                    sum += parseFloat(item.innerText);
                });
                $("#totalPrice").html(sum.toFixed(2));

                var sum2 = 0;
                $.each($(".num"), function (i, item) {
                    sum2 += parseInt(item.innerText);
                });
                $("#totalNum").html(sum2)
            }
        })



    </script>
</head>
<body>
<div class="header">
    <?php
    include_once "header.php";
    include_once "db.php";
    ?>
</div>
<div class="wrap clearfix">
    <?php
    // 接收post数据
    if(isset($_POST['cb'])){
        // 多选删除
        $cb = $_POST['cb'];
        foreach($cb as $value){
            unset($_SESSION['cart'][$value]);
        }
    }

    // 实现加
    if(isset($_GET['addid'])){
        $id = $_GET['addid'];
        $_SESSION['cart'][$id]['num']++;
    }

    // 实现减
    if(isset($_GET['subid'])){
        $id = $_GET['subid'];
        if($_SESSION['cart'][$id]['num']>1){
            $_SESSION['cart'][$id]['num']--;
        }
    }

    if(isset($_GET['id'])){
        // 1. 根据id数据库查询商品所有的信息
        $id = $_GET['id'];
        $sql = "select * from products where id=".$id;
        $result = mysql_query($sql);
        $product_info = mysql_fetch_assoc($result);



        // 2. 组装购物车
        if(isset($_SESSION['cart'])){
            // 第二次以后添加购物车
            $arr = $_SESSION['cart'];
            // 判断购物车中是否存在此商品
            if(array_key_exists($id,$arr)){
                $arr[$id]['num']++; // 商品数量++
            }else{
                // 累加一个新的商品到购物车
                $arr[$id] = array(
                    'title'=>$product_info['title'],
                    'image'=>$product_info['image'],
                    'price'=>$product_info['price'],
                    'num'=>1
                );
            }
        }else{
            // 第一次添加购物车
            $arr[$id] = array(
                'title'=>$product_info['title'],
                'image'=>$product_info['image'],
                'price'=>$product_info['price'],
                'num'=>1
            );
        }
        // 3. 将组装好的数组放到购物车中
        $_SESSION['cart'] = $arr;
    }

    if(isset($_GET['delid'])){
        $delid = $_GET['delid'];
        unset($_SESSION['cart'][$delid]);
    }
    ?>
<form action="shopcar.php" method="post" id="form1">
<table align="center" border="1">
    <?php
    if(isset($_SESSION['cart']) && count($_SESSION['cart'])>0){
        ?>
    <tr>
        <th><input type="checkbox" id="all_checked"/>商品ID</th>
        <th>图片</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
    </tr>
        <?php
        $sum = 0;
        foreach($_SESSION['cart'] as $key=>$value){
            $xiaoji = $value['price'] * $value['num'];
            $sum+=$xiaoji;
            echo <<<cart
        <tr>
            <td><input type="checkbox" class="cb" name="cb[]" value="{$key}"/>{$key}</td>
            <td><img src="images/{$value['image']}"/></td>
            <td>{$value['title']}</td>
            <td><span class="price">{$value['price']}</span></td>
            <td><a href="javascript:;" data-id="{$key}" class="sub">-</a> <span class="num">{$value['num']}</span> <a href="javascript:;" class="add" data-id="{$key}">+</a></td>
            <td><span class="total">{$xiaoji}</span></td>
            <td><a href="javascript:;" data-id="{$key}" class="del">删除</a></td>
        </tr>
cart;
        }
    ?>
    <tr>
        <td colspan="5"><a href="javascript:void(0);" onclick="delall()">删除已选择的</a></td>
        <td colspan="2">总价：<span id="totalPrice"><?php echo $sum;?></span></td>
    </tr>
</table>
</form>
    <?php
    }else{
        echo "<a href='products.php'>购物车为空，请去购买吧！</a>";
    }
    ?>
    <script>
        function delall(){
            // 提交表单
            document.getElementById("form1").submit();
        }
        window.onload = function () {
            var all_checked = document.querySelector("#all_checked");
            all_checked.onclick = function () {
                // 获取所有的checkbox
                var cb = document.querySelectorAll(".cb");
                if(this.checked){
                    for(var i=0; i<cb.length; i++){
                        cb[i].checked = true; // 全选
                    }
                }else{
                    for(var i=0; i<cb.length; i++){
                        cb[i].checked = !cb[i].checked; // 反选
//                        cb[i].click();
                    }
                }
            }
        }
    </script>
</div>

<div class="footer">
    <?php
    include_once "footer.php";
    ?>
</div>
</body>
</html>