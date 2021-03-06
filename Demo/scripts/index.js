function highlightPage() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  var links = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    var linkurl = links[i].getAttribute("href");
    var currenturl = window.location.href;
    if (currenturl.indexOf(linkurl) != -1) {
      links[i].className = "here";
      var linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id",linktext);
    }
  }
}

function moveElement(elementID,final_x,final_y,interval){
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left){
    elem.style.left = "0px";
  }
  if (!elem.style.top){
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x){
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x){
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist
  }
  if (ypos < final_y){
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y){
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")"
  elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("intro")) return false;
  var intro = document.getElementById("intro");
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("src","images/Eason_all.jpg");
  preview.setAttribute("alt","a glimpse of what awaits you");
  preview.setAttribute("id","preview");
  slideshow.appendChild(preview);
  insertAfter(slideshow,intro);

  var links = document.getElementsByTagName("a");
  var destination;
  for (var i=0; i<links.length; i++){
    links[i].onmouseover = function(){
      destination = this.getAttribute("href");
      if (destination.indexOf("index.html") != -1){
        moveElement("preview",0,0,5);
      }
      if (destination.indexOf("about.html") != -1){
        moveElement("preview",-180,0,5);
      }
      if (destination.indexOf("photos.html") != -1){
        moveElement("preview",-360,0,5);
      }
      if (destination.indexOf("live.html") != -1){
        moveElement("preview",-540,0,5);
      }
      if (destination.indexOf("contact.html") != -1){
        moveElement("preview",-720,0,5);
      }
    }
  }
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);