var btn = document.getElementById("btn");
var username = document.getElementById("username");
var password = document.getElementById("password");

btn.onclick = function() {
	var xmlhttp;
	if(username.value.length == 0 || password.value.length == 0) {
		document.getElementById("result").innerHTML = "";
		return;
	}
	if(window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4) {
			if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304) {
				document.getElementById("result").innerHTML = xmlhttp.responseText;
			}
		}
	}
	xmlhttp.open("POST", "http://127.0.0.1/login.php");
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username=" + username.value + "&password=" + password.value);
	//阻止表单提交
	return false;
}