!function(a,b){var c=a.documentElement,d="orientationchange"in window?"orientationchange":"resize",e=function(){var a=c.clientWidth;a&&(c.style.fontSize=100*(a/1242)+"px")};a.addEventListener&&(b.addEventListener(d,e,!1),a.addEventListener("DOMContentLoaded",e,!1))}(document,window);
window.onload = function() {
	var Navlist = document.querySelectorAll(".header-menu a");
	var Aboutlist = document.querySelectorAll('.header-about li a');	 
	for(var i = 0; i < Navlist.length; i++) {
		Navlist[i].onclick = function() {
			for(var j =0; j<Navlist.length;j++){
			Navlist[j].className ='';
			}
			this.className+='nav-active';
		}
	}
	
	for(var j = 0; j < Aboutlist.length; j++) {
		Aboutlist[j].onclick = function() {
			for(var i=0; i<Aboutlist.length;i++){
				Aboutlist[i].className= '';
			}
			this.className+='about-active';
		}
	}
}