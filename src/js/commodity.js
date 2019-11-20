requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        commoditys: './commoditys'
    },
    shim: {}
});

require(['jquery','commoditys'],function ($,commoditys){
    let list=location.search.slice(1).split('=')[1];
    let list_id=location.hash.slice(1);
    commoditys.getDetails(list,list_id);
});

//放大镜和选项卡
require(['jquery'],function(){

    $('.image>ul>li').on('mouseover',function(){
        let src=$(this).children().attr('src');
        $(this).addClass('active').siblings().removeClass('active');
        $('.smallimg').attr('src',src);
        $('.big_img').html(`<img src="../images/${src}" >`);
    });

    $('.small').on({
        'mouseover':function(){
            $('.big_img').addClass('show');
            $('.lit').addClass('show');
        },
        'mouseout':function (){ 
            $('.big_img').removeClass('show');    
            $('.lit').removeClass('show');
        },
        'mousemove':function(ev){
            ev=ev||event;
            let lit=$('.lit');
            let big_img=$('.big_img');
            let bimg=$('.big_img>img');

            let top=ev.pageY-$(this).offset().top-(lit.height()/2);
            let left=ev.pageX-$(this).offset().left-(lit.width()/2);
            
            if(left<=0){
                left=0;
            }else if(left>$(this).width()-lit.width()){
                left=$(this).width()-lit.width();
            }

            if(top<=0){
                top=0;
            }else if(top>$(this).height()-lit.height()){
                top=$(this).height()-lit.height();
            }
            lit.css({
                top:top+'px',
                left:left+'px',
                'width':($(this).width()*big_img.width())/bimg.width(),
                'height':($(this).height()*big_img.height())/bimg.height(),
            });

            let ratio=bimg.width()/$(this).width();
            bimg.css({
                left:-left*ratio +'px',
                top:-top*ratio+'px'
            });
            
        }
    });
    
});

//添加到购物车
require(['jquery','cookie'],function($,cookie){
    $('.add').on('click',function () {
        let comm={
            src:$('.smallimg').attr('src').substr(10),
            money:$('.money').text(),
            color:$('.active').text(),
            num:$('.number').val(),
        }
        cookie.set('commodity',JSON.stringify(comm),1);
    });
});