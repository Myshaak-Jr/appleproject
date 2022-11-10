var onReady = function(){
	var toggleShowMenuMenu = function(){
		document.getElementById("menu").classList.toggle("shown");
	}

	for (const element of document.querySelectorAll("#menu li.toggle, #menu li.blank")) {
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