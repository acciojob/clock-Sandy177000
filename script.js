//your JS code here. If required.

var element = document.getElementById("time");

setInterval(function () {
	var d = new Date();
	element.innerHTML = d.toLocaleString();
},1000)






