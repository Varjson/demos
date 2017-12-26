$('.nav li').mouseover(function(){
				$(this).addClass('active').siblings().removeClass('active');
		});
		
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };