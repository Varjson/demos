$(function(){

	/*初始化*/
	var counter = 0; /*计数器*/
	var pageStart = 0; /*offset*/
	var pageSize = 2; /*size*/
	
	/*首次加载*/
	getData(pageSize);
	
	/*监听加载更多*/
	$(document).on('click', '.more', function(){
		counter ++;
		pageStart = counter * pageSize;
		
		getData(pageStart, pageSize);
	});
    
	
	function getData(offset,size){
		$.ajax({
			type: 'GET',
			url: 'json/index.json'+ '?' + offset + '/' + size, //这里offset,size无作用，仅方便调试
			dataType: 'json',
			success: function(reponse){

				var data = reponse.list;
				var sum = reponse.list.length;

				var result = '';
				
				/************业务逻辑块：实现拼接html内容并append到页面*****************/
				
				//console.log(offset , size, sum);
				
				/*如果剩下的记录数不够分页，就让分页数取剩下的记录数
				* 例如分页数是5，只剩2条，则只取2条
				*
				* 实际MySQL查询时不写这个不会有问题
				*/
				if(sum - offset < size ){
					size = sum - offset;
				}
				
				/*使用for循环模拟SQL里的limit(offset,size)*/
				for(var i=offset; i< (offset+size); i++){
					if(data[i].id %2 == 0){
					result +='<div class="section-group">'+
					'<a href="javascript:void(0);"><img src="images/index-section-'
					+data[i].imgId+'.png"></a>'+
							'<div class="section-detail">'+ 
							'<p>'+data[i].name+'</p>'+
							'<span>'+ data[i].free+'</span>'+
							'</div>'+
							'</div>';
					}else{
						result +='<div class="section-group">'+
						'<a href="javascript:void(0);"><img src="images/index-section-'
						+data[i].imgId+'.png"></a>'+
							'<div class="section-detail">'+ 
							'<p>'+data[i].name+'</p>'+
							'<span>'+ data[i].price+'</span>'+
							'</div>'+
							'</div>';
					}
				}
				$('.section-group-').append(result);
				
				/*******************************************/
	
				/*隐藏more*/
				if ( (offset + size) >= sum){
					$(".more").hide();
				}else{
					$(".more").show();
				}
			},
			error: function(xhr, type){
				alert('Ajax error!');
			}
		});
	}
});