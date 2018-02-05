var la = 1;	//选中的日期，老日期
	var lb = 1; //选中的时间，老时间
	// 开启弹层
	$('#test').on('click',function(){
		$("#pickuptime").show();
	});
	// 关闭弹层
	$('#close').on('click',function(){
		var riqi = $("#riqi_"+la).text();
		var shij = $("#shij_"+lb).text();
		$("#sj").text(riqi+' '+shij);
		$("#pickuptime").hide();
	});
	// 日期方法
	function riqi(a){
		$("#riqi_"+a).addClass("pickuptime-on");
		// 把之前选中的日期，去掉变色
		$("#riqi_"+la).removeClass("pickuptime-on");
		// 选中的日期，变为老日期
		la	=	a;
	}
	function shij(b){
		$("#shij_"+b).addClass("pickuptime-on");
		// 把之前选中的时间，去掉变色
		$("#shij_"+lb).removeClass("pickuptime-on");
		// 选中的时间，变为老时间
		lb	=	b;
	}