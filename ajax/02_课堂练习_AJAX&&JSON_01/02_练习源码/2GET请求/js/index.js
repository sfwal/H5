var txt = document.getElementById("txt");

txt.onkeyup = function() {
	var xmlhttp;
	var str = txt.value;
	if(str.length == 0) {
		document.getElementById("txtHint").innerHTML = "";
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
				document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
			}
		}
	}
	xmlhttp.open("GET", "http://127.0.0.1/name.php?q=" + str, true);
	xmlhttp.send();
}