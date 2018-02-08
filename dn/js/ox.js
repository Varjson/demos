!function(a,b){var c=a.documentElement,d="orientationchange"in window?"orientationchange":"resize",e=function(){var a=c.clientWidth;a&&(c.style.fontSize=100*(a/1242)+"px")};a.addEventListener&&(b.addEventListener(d,e,!1),a.addEventListener("DOMContentLoaded",e,!1))}(document,window);
window.onload = function() {
	var Navlist = document.querySelectorAll(".header-nav li");
	var Aboutlist = document.querySelectorAll('.header-about li a');	
	var priceList = document.querySelectorAll('.price li');	
	var wepayList = document.querySelectorAll('.we-pay li');
	
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
	
	for(var i = 0; i < priceList.length; i++) {
		priceList[i].onclick = function() {
			for(var j =0; j<priceList.length;j++){
			priceList[j].className ='';
			}
			this.className+='sum-color';
		}
	}
	
	for(var i = 0; i < wepayList.length; i++) {
		wepayList[i].onclick = function() {
			for(var j =0; j<wepayList.length;j++){
			wepayList[j].className =' pay-logo ';
			}
			this.className+='sum-color';
		}
	}
}