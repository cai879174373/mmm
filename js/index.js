(function(window){
    // 执行菜单栏函数
    menuList();
    list();
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: true,
        autoplay: {
            delay: 1000,
            // 是否在轮播到最后一张停下来 loop模式下无效 true就会停下来 false不停
            stopOnLastSlide: false,
            // 当手触摸滑动后是否要禁止自动轮播图 true禁止 false不禁止
            disableOnInteraction: false,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      });

    //   封装一个菜单栏函数
    function menuList(){
        $.ajax({
            url:'http://47.52.242.30:9090/api/getindexmenu',
            success:function(data){
                // console.log(data);
                // 调用模板
                var html=template('menuTpl',data);
                // console.log(html);
                $('#main #menu').html(html);
                $('.menu-item:nth-child(n+9)').hide();
                $('#main .btn-more').on('click',function(){
                    $('.menu-item:nth-child(n+9)').fadeToggle();
                } )

                
            }
        })
    }
    //封装一个列表详情函数

    function list(){
        $.ajax({
            url:'http://47.52.242.30:9090/api/getmoneyctrl',
            success:function(data){
                console.log(data);
                // 调用模板
                var html=template('listTpl',data);
                $('#list ul').html(html);

                
            }
        })
    }
})(window)