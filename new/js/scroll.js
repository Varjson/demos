    //第一步：下拉过程 
    function slideDownStep1(dist){  // dist 下滑的距离，用以拉长背景模拟拉伸效果 
        var slideDown1 = document.getElementById("slideDown1"), 
            slideDown2 = document.getElementById("slideDown2"); 
        slideDown2.style.display = "none"; 
        slideDown1.style.display = "block"; 
        slideDown1.style.height = (parseInt("20px") - dist) + "px"; 
    } 
    //第二步：下拉，然后松开， 
    function slideDownStep2(){  
        var slideDown1 = document.getElementById("slideDown1"), 
            slideDown2 = document.getElementById("slideDown2"); 
        slideDown1.style.display = "none"; 
        slideDown1.style.height = "20px"; 
        slideDown2.style.display = "block"; 
        //刷新数据 
        //location.reload(); 
    } 
    //第三步：刷新完成，回归之前状态 
    function slideDownStep3(){  
        var slideDown1 = document.getElementById("slideDown1"), 
            slideDown2 = document.getElementById("slideDown2"); 
        slideDown1.style.display = "none"; 
        slideDown2.style.display = "none"; 
    } 
 
    //下滑刷新调用 
    k_touch("content","y"); 
    //contentId表示对其进行事件绑定，way==>x表示水平方向的操作，y表示竖直方向的操作 
    function k_touch(contentId,way){  
        var _start = 0, 
            _end = 0, 
            _content = document.getElementById(contentId); 
        _content.addEventListener("touchstart",touchStart,false); 
        _content.addEventListener("touchmove",touchMove,false); 
        _content.addEventListener("touchend",touchEnd,false); 
        function touchStart(event){  
            //var touch = event.touches[0]; //这种获取也可以，但已不推荐使用 
 
            var touch = event.targetTouches[0]; 
            if(way == "x"){  
                _start = touch.pageX; 
            }else{  
                _start = touch.pageY; 
            } 
        } 
        function touchMove(event){  
            var touch = event.targetTouches[0]; 
            if(way == "x"){  
                _end = (_start - touch.pageX); 
            }else{  
                _end = (_start - touch.pageY); 
                //下滑才执行操作 
                if(_end < 0){ 
                    slideDownStep1(_end); 
                } 
            } 
 
        } 
        function touchEnd(event){  
            if(_end >0){  
                console.log("左滑或上滑  "+_end); 
            }else{  
                console.log("右滑或下滑"+_end); 
                slideDownStep2(); 
                //刷新成功则 
                //模拟刷新成功进入第三步 
                setTimeout(function(){  
                    slideDownStep3(); 
                },1500); 
            } 
        } 
    } 