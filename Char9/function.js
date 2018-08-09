var paras = document.getElementsByTagName("p");
for (var i=0; i<paras.length; i++) {
	paras[i].onclick = function () {
		alert ("You clicked on a paragraph.");
	}
}

var para = document.getElementById("example");
alert("The color is "+ para.style.color);
alert("The fontfamily is "+ para.style.fontFamily);
alert("The fontsize is "+ para.style.fontSize);