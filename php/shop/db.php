<?php
$link = @mysql_connect("localhost","root","") or die("数据库连接失败");
mysql_select_db("db4");
mysql_query("set names utf8");