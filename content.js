//using ajax to retrieve content of web page
//based on example page 578 Internet and world wide web by Deitel et al


window.addEventListener("load", registerListeners, false);
var asynchrequest;

function registerListeners() {
	
	var img;
	img=document.getElementById("rentalpic");
	img.addEventListener("mouseover", function () { getContent("content/rentalcontent.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("childcarepic");
	img.addEventListener("mouseover", function () { getContent("content/childcarecontent.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("crimepic");
	img.addEventListener("mouseover", function () { getContent("content/crimecontent.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
    img=document.getElementById("buspic");
	img.addEventListener("mouseover", function () { getContent("content/buscontent.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
}

function getContent(infopage) {

		asynchrequest= new XMLHttpRequest();
		asynchrequest.onreadystatechange = function() {
    if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
      document.getElementById("details").innerHTML = asynchrequest.responseText;
    }
  };
  asynchrequest.open("GET", infopage, true);
  asynchrequest.send();
}


function clearContent() {
	
	document.getElementById("details").innerHTML="";

}