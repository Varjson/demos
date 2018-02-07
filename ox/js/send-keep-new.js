window.onload = function() {
//	这里是选择服务大区的变量开始
	var lis = document.querySelectorAll('.select-all li');
	var divs = document.querySelectorAll('#show > div');
	var quLis = document.querySelectorAll('.show_two_left li');
	var quDivs = document.querySelectorAll('.show_two_right');
	
	var flag = true;
	for(var i =0; i<lis.length;i++){
		lis[i].onclick = function(){
				if(flag){
					for(var j=0; j<divs.length;j++){
					if(lis[j]==this){
						divs[j].style.display = 'block';
						lis[j].style.background = '#eeeeee';
						lis[j].style.height = '.94rem';
						lis[j].style.lineHeight = '.94rem';
						lis[j].style.margin = '0';
					}else{
						divs[j].style.display= 'none';
						lis[j].style.background = '#FFFFFF';
					}
						flag = false;
				}
				}else{
							for(var j=0; j<divs.length;j++){
							if(lis[j]==this){
								divs[j].style.display = 'none';
								lis[j].style.background = '#eeeeee';
								lis[j].style.height = '.94rem';
								lis[j].style.lineHeight = '.94rem';
								lis[j].style.margin = '0';
							}else{
								divs[j].style.display= 'none';
								lis[j].style.background = '#FFFFFF';
							}
						}
							flag =true;
				}
			
			}
			
		}

	
	for(var i =0; i<quLis.length;i++){
		quLis[i].onclick = function(){
			for(var j=0; j<quDivs.length;j++){
				if(quLis[j]==this){
					quDivs[j].style.display = 'block';
					quLis[j].style.background = '#eeeeee';
				}else{
					quDivs[j].style.display= 'none';
					quLis[j].style.background = '#f7f7f7';
				}
			}
		}
	}
//	这里是选择服务大区的变量结束
	
//	这里是发布订单的变量
	var alert = document.querySelector(".alert-bg");
	var order_three = document.querySelector(".order-three");
	var alert_close = document.querySelector(".alert-close");
	var alert_content_time_list = document.querySelectorAll(".alert-content-time li");
	var alert_content_way_list = document.querySelectorAll(".alert-content-way li");
	var alert_content_long = document.querySelectorAll(".alert-content-long li");
	
//	这里是发布订单的变量结束
		
//	这里是发布订单点击函数开始
 	order_three.onclick= function(){
		alert.style.display = 'block';
	}
	alert_close.onclick =function(){
		alert.style.display = 'none';
	}
	
	for(var i = 0; i < alert_content_time_list.length; i++) {
		alert_content_time_list[i].onclick = function() {
			for(var j =0; j<alert_content_time_list.length;j++){
			alert_content_time_list[j].className ='';
			}
			this.className+='alert-active';
		}
	}
	
	for(var j = 0; j < alert_content_way_list.length; j++) {
		alert_content_way_list[j].onclick = function() {
			for(var i=0; i<alert_content_way_list.length;i++){
				alert_content_way_list[i].className= '';
			}
			this.className+='alert-active';
		}
	}
	
	for(var i = 0; i < alert_content_long.length; i++) {
		alert_content_long[i].onclick = function() {
			for(var j =0; j<alert_content_long.length;j++){
			alert_content_long[j].className ='';
			}
			this.className+='alert-active';
		}
	}
//	这里是发布订单点击函数结束
	
	//这里是切换游戏开始
	var tab = document.querySelector('#tab');
	var game_close = document.querySelector('.game-close');
	var game = document.querySelector('.game');
	var gameLis = document.querySelectorAll('.game li a');
	var game_1 = document.querySelector('#game_1');
	var game_2 = document.querySelector('#game_2');
	var a =1;
	
	tab.onclick = function(){
		game.style.display = 'block';
	}
	game_close.onclick= function(){
		game.style.display = 'none';
	}
	
	for(var i = 0; i < gameLis.length; i++) {
		gameLis[i].onclick = function() {
			for(var j =0; j<gameLis.length;j++){
			gameLis[j].className ='';
			}
			this.className+='game-active';
		}
	}
	//这里是切换游戏结束
	
}