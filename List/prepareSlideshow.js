function prepareSlideshow(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("linklist")) return false;

	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","images/topics.jpg");
	preview.setAttribute("alt","Topics");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);

	if (!document.getElementById("preview")) return false;
	var preview = document.getElementById("preview");	
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	links[0].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-400,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-600,0,10);
	}
}