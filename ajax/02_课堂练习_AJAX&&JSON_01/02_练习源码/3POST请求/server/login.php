<?php
header("Access-Control-Allow-Origin: *");

$username = $_POST["username"];
$password = $_POST["password"];

echo "欢迎{$username}登录，您输入密码为：{$password}";

?>