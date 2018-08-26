function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message",125,25,20);
	var elem2 = document.getElementById("message2");
	elem2.style.position = "absolute";
	elem2.style.left = "50px";
	elem2.style.top = "50px";
	moveElement("message2",250,100,20);
}