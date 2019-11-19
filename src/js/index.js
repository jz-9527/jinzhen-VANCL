requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        logins: './indexs',
        cookie: './cookie'
    },
    shim: {}
});
//检测登录状态
require(['jquery', 'cookie'], function ($, cookie) {
    //检查账号
    let cook = cookie.get('user');
    let user = JSON.parse(cook)[0].user_phone;
    console.log(cook);
    console.log(user);
    if (cook) {
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
    }
});