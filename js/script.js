if(!localStorage.getItem("theme")){
	localStorage.setItem("theme", "light")
}

// window.addEventListener("resize", (e) => {
// 	if(document.getElementById("mobile-nav").offsetWidth > 0 && document.getElementsByTagName("body")[0].offsetWidth >= 1100){
// 		document.getElementById("mobile-nav").style.width = "0"
// 	}
// });

function closeNav() {
	document.getElementById("mobile-nav").style.width = "0";
}

function openNav() {
	document.getElementById("mobile-nav").style.width = "80%";
}