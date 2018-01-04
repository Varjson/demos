window.onload = function() {
	var Navlist = document.querySelectorAll(".header-nav li");
	var Aboutlist = document.querySelectorAll('.header-about a');	 
	for(var i = 0; i < Navlist.length; i++) {
		Navlist[i].onmouseover = function() {
			this.style.borderBottom = '.03rem solid #e0c49c';
			if(this == Navlist[0]) {
				Navlist[0].style.borderBottom = '.03rem solid #e0c49c';
			} else {
				Navlist[0].style.borderBottom = 'none';
			}
		}
		Navlist[i].onmouseout = function() {
			this.style.borderBottom = 'none';
		}
	}
	
	for(var j = 0; j < Aboutlist.length; j++) {
		Aboutlist[j].onmouseover = function() {
			this.style.color = '#c8a771';
			if(this == Aboutlist[1]) {
				Aboutlist[1].style.color = '#c8a771';
			} else {
				Aboutlist[1].style.color = '#010101';
			}
		}
		Aboutlist[j].onmouseout = function() {
			this.style.color = '#010101';
		}
	}
}