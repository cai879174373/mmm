$(function(){
    $.ajax({
        type: "get",
        url: "http://47.52.242.30:9090/api/getbaicaijiatitle",
      
        dataType: "json",
        success: function (data) {
            // console.log(data);
            var html=template('baicaijiatitleTpl',data);
            $('#main .nav-tabs').html(html);

            // var htmlul=template('bcjcountTpl',data);
            // $('#main .tab-content ').html(htmlul);
            

        }
    });

    //显示白菜价函数
    baicaijia(0);
    function baicaijia(id){
        $.ajax({
            type:"get",
            url: "http://47.52.242.30:9090/api/getbaicaijiaproduct",
            data: {titleid:id},
            dataType: "json",
            success: function (data) {
                console.log(data);

                var html =template('baicaijiaTpl',data);
                $('.list-content ul').html(html);
                
            }
        });
    }
    // 给标题
    // 注册委托事件
    $('#main .nav-product').on('click','li',function(){
        // console.log( $(this));
        $(this).addClass('active').siblings().removeClass('active');
        var id=$(this).data('id');
        // console.log(id);
        baicaijia(id);
    });

    
     var ul=$('.nav-product')[0];
        // 1. 定义开始 滑动 中  滑动距离全局变量
        var startY = 0;
        var moveY = 0;
        var distanceY = 0;
        // 之前移动的距离
        var cureentY = 0 ;
        var count=0;
        // 触摸开始手指按下就触发 一个次滑动只会触发一次
        ul.addEventListener('touchstart', function (e) {
            // 2. 在滑动开始的获取startY的位置
            startY = e.touches[0].clientX;
        });
        // 触摸移动中就会不断触发 一次滑动会触发很多次
        ul.addEventListener('touchmove', function (e) {
            // 3. 在滑动中获取moveY的位置
            moveY = e.touches[0].clientX;
            // console.log(startY);
            // console.log(moveY);
            // 4. 求到滑动距离 moveY - startY
            distanceY = moveY - startY;
            // 5. 把当前计算的位移距离设置给ul transform 位移属性 一定要带px单位 
            // 下一次滑动的时候跟上之前位移的距离currentY
            count=cureentY+distanceY;
            if(count>0){
                count=0;
            }
            if(count<-480){
                count=-480;
            }


            ul.style.transform = 'translateX('+(count)+'px)';
        });
        // 触摸结束也是一次滑动只触发一次
        ul.addEventListener('touchend', function (e) {
            // console.log(distanceY);
            // 滑动结束的时候要把之前的位移距离累加起来
            cureentY += distanceY;
            console.log(cureentY);
           
        });
        
        // ul.style.transform = 'translateX('+(cureentY)+'px)';
        // ul.style.transform = 'translateX('+(cureentY+distanceY)+'px)';
      
        

})