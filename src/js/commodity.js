requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        commoditys: './commoditys'
    },
    shim: {}
});

require(['jquery', 'commoditys'], function ($, commoditys) {
    let list = location.search.slice(1).split('=')[1];
    let list_id = location.hash.slice(1);
    commoditys.getDetails(list, list_id);
});

require(['jquery', 'cookie'], function ($, cookie) {
    //检查账号
    let cook = cookie.get('user'); 
    if (cook) {
        let user = JSON.parse(cook)[0].user_phone;
        $('.register').html('退出登录')
            .css('color', 'red')
            .attr('href', 'javascript:void(0)')
            .on('click', function () {
                cookie.remove('user');
                location.href='./index.html';
            })
            ;
        $('.text-muted').html('欢迎光临:'+user);

        $('.login').html('切换用户')
        .css('color', 'red')
        .attr('href', './user.html')
        .on('click', function () {
            cookie.remove('user');
        });
    }else{
        console.log('无账号登录');
    }
});

//放大镜和选项卡
require(['jquery'], function () {

    $('.image>ul>li').on('mouseover', function () {
        let src = $(this).children().attr('src');
        $(this).addClass('active').siblings().removeClass('active');
        $('.smallimg').attr('src', src);
        $('.big_img').html(`<img src="../images/${src}" >`);
    });

    $('.small').on({
        'mouseover': function () {
            $('.big_img').addClass('show');
            $('.lit').addClass('show');
        },
        'mouseout': function () {
            $('.big_img').removeClass('show');
            $('.lit').removeClass('show');
        },
        'mousemove': function (ev) {
            ev = ev || event;
            let lit = $('.lit');
            let big_img = $('.big_img');
            let bimg = $('.big_img>img');

            let top = ev.pageY - $(this).offset().top - (lit.height() / 2);
            let left = ev.pageX - $(this).offset().left - (lit.width() / 2);

            if (left <= 0) {
                left = 0;
            } else if (left > $(this).width() - lit.width()) {
                left = $(this).width() - lit.width();
            }

            if (top <= 0) {
                top = 0;
            } else if (top > $(this).height() - lit.height()) {
                top = $(this).height() - lit.height();
            }
            lit.css({
                top: top + 'px',
                left: left + 'px',
                'width': ($(this).width() * big_img.width()) / bimg.width(),
                'height': ($(this).height() * big_img.height()) / bimg.height(),
            });

            let ratio = bimg.width() / $(this).width();
            bimg.css({
                left: -left * ratio + 'px',
                top: -top * ratio + 'px'
            });

        }
    });

});

//添加到购物车
require(['jquery', 'cookie'], function ($, cookie) {
    $('.add').on('click', function () {
        let commodity = cookie.get('commodity');
        let comm = {
            name: location.search.substr(4) + location.hash.substr(1),
            product_name: $('.product_name').text(),
            src: $('.smallimg').attr('src').substr(10),
            money: $('.money').text(),
            cm: $('.cm').text(),
            num: $('.number').val(),
        }
        if (commodity) {
            commodity = JSON.parse(commodity);
            if (commodity.some(elm => elm.name == comm.name)) {
                commodity.forEach(val => {
                    val.name == comm.name ? val.num = comm.num : null;
                });
                
            } else {
                commodity.push(comm);
            }
        } else {
            commodity = [];
            commodity.push(comm);
        }
        cookie.set('commodity', JSON.stringify(commodity), 1);
    });
});

//购物车按钮
require(['jquery','cookie'],function ($,cookie){
    let cook=JSON.parse(cookie.get('commodity'));
    $('.car').text('购物车（'+cook.length+')');
});