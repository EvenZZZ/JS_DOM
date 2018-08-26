//addLoadEvent
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

//insertAfter
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

//addClass
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}


function getHTTPObject(){
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function(){
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
      catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
      catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
      catch (e) {}
      return false;
    }
    return new XMLHttpRequest();
  }