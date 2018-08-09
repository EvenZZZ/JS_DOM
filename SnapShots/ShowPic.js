function showPic(whichpic){

	if (!document.getElementById("placeholder")) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {
		return false;
	}
	placeholder.setAttribute("src",source);

	if (document.getElementById("description")) {
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery() {
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("imagegallery")) {
		return false;
	}

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
			links[i].onclick = function() {
				if (showPic(this)) {
					return false;
				}
				else{
					return true;
				}
			}
		}
}

function preparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/M8_Week26_Tablet_180625_01.jpg")
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image.");
	description.appendChild(desctext);
	document.body.appendChild(placeholder);
	document.body.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	//gallery.parentNode.insertBefore(placeholder,gallery);
	//gallery.parentNode.insertBefore(description,gallery);
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

// window.onload = prepareGallery();
function addLoadEvent(func) {
    var oldonload = window.onload;//将现有的事件处理函数的值存入变量中
    if (typeof window.onload != 'function') {
        window.onload = func;//如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
    } else {
        window.onload = function() {
            oldonload();
            func();//如果已经绑定了函数，就把新函数追加到现有指令的末尾
      }
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);