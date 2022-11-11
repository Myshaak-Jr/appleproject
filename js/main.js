var onReady = function(){
	var toggleShowMenuMenu = function(){
		document.getElementById("navbar").classList.toggle("shown");
	}

	for (const element of document.querySelectorAll("#navbar li.toggle, #navbar li.blank")) {
		element.addEventListener("click", toggleShowMenuMenu);
	}


};
  
if (
	document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	onReady();
} else {
	document.addEventListener("DOMContentLoaded", onReady);
}