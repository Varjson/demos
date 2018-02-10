
var navList = document.querySelectorAll('.navbar li a');
var itemList = document.querySelectorAll('.article .item');
console.log(itemList);
for(var i = 0; i<navList.length; i++){

	navList[i].onclick = function(){
		//菜单颜色和背景色的切换
		for(var k = 0; k<navList.length ; k++){
			navList[k].className = '';
		}
		this.className += 'menu-active';
		//菜单对应内容的切换
		for(var j = 0 ;j< itemList.length; j++){
			if(navList[j] == this){
				itemList[j].style.display = 'block';
			}else{
				itemList[j].style.display = 'none';
			}
		}
		
	}
}
