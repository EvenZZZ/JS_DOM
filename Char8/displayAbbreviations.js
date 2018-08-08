function displayAbbreviations(){
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;

	//取得所有缩略词
	var abbreviations = document.getElementsByTagName('abbr');
	if (abbreviations.length < 1) {
		return false;
	}
	var defs = new Array();

	//遍历这些缩略词
	for (var i=0; i<abbreviations.length; i++){
		if (abbreviations[i].childNodes.length < 1) continue;
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		alert(key);
		defs[key] = definition;
	}

	//创建定义列表
	var dlist = document.createElement("dl");
	for (key in defs){
		var definition = defs[key];
		//创建定义标题和定义描述
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		//把他们添加进定义列表
		dtitle.appendChild(dtitle_text);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
		if (dlist.childNodes.length < 1) return false;
	}
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//添加标题到body
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}