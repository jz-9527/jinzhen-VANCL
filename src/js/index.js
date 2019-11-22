requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        users: './users',
        cookie: './cookie',
        lazyload: './query.lazyload',
    },
    shim: {}
});
//检测登录状态
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
                location.href = './index.html';
            })
            ;
        $('.text-muted').html('欢迎光临:' + user);

        $('.login').html('切换用户')
            .css('color', 'red')
            .attr('href', './user.html')
            .on('click', function () {
                cookie.remove('user');
            });
    } else {
        console.log('无账号登录');
    }
});
// 数据库加载数据渲染页面
require(['jquery', 'indexs'], function ($, indexs) {
    indexs.getComm();
    indexs.getNewComm();
});
//购物车按钮
require(['jquery', 'cookie'], function ($, cookie) {
    if (cookie.get('commodity')) {
        let cook = JSON.parse(cookie.get('commodity'));
        $('.car').text('购物车（' + cook.length + ')');
    }
});

//秒杀
require(['jquery'],function($){
    
});
//图片延迟加载
// require(['lazyload'],function($){
//     $(function() {
//         $(".lazy").lazyload({effect: "fadeIn"});
//     });
// });
