$(function() {
    // 下拉框
    $('#header .select').on('click',function() {
        $('#header .top-menu').slideToggle(500);
    });

    // 获取轮播图资源
    $.ajax({
        url:'http://127.0.0.1:9091/api/getlunbo', 
        dataType:'json',  
        success:function(backData){
            // console.log(backData);
            $('#slide .swiper-wrapper').html(template('lunbo',backData));          
        }
    })

    // tab栏切换
    $('#tab .title>ul>li').on('click',function() {
        var xiabiao = $(this).index();
        xiabiao = xiabiao + 1;
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取tab内容资源
        $.ajax({
            url:"http://127.0.0.1:9091/api/gethometab/"+xiabiao,
            dataType:'json',  
            success:function(backData){
                // console.log(backData);  
                $('#tab .tab-body ul').html(template('nav-body',backData));    
                
                if(xiabiao == 1) {
                    $('.tab-body ul li:eq(3) .tab-img').find('img').css({width:"101%"});
                }
                if(xiabiao == 3) {
                    $('.tab-body ul li:eq(1) .tab-img').find('img').css({width:"101%"});
                    
                }
            }
        })

    });
    // 默认显示第一个
    $.ajax({
        url:"http://127.0.0.1:9091/api/gethometab/1",
        dataType:'json',  
        success:function(backData){
            // console.log(backData);  
            $('#tab .tab-body ul').html(template('nav-body',backData));
            $('.tab-body ul li:eq(3) .tab-img').find('img').css({width:"101%"});                 
        }
    })

})

// 轮播图
window.addEventListener('load',function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        direction: 'horizontal',
        // 是循环是否支持无缝轮播
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // effect: 'cube',
        effect: 'slider',          

        // grabCursor: true,
        // 自动轮播
        autoplay: 1000,
        // 解决自动轮播的时候手动后无法再次自动轮播
        autoplayDisableOnInteraction: false
    })
})