requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        users: './users'
    },
    shim: {}
});

//验证登录
require(['jquery', 'users'], function ($, users) {
    $('.pu>.simbit').on('click', function () {
        let phone = $('.user').val();
        let pass = $('.pass').val();
        let phone_checkout=/^[1][3456789]\d{9}$/;
        let pass_check_out=/^\w{1,20}$/;

        if(phone_checkout.test(phone) && pass_check_out.test(pass)){
            $(this).text('登陆中...');
            users.getUser(phone, pass);
        }else if(!phone_checkout.test(phone)){
            $('.slip').addClass('show').text('账号应11位手机号，请检查输入！'); 
        }else if(!pass_check_out.test(pass)){
            $('.slip').addClass('show').text('密码仅限20位以内数字，请检查输入！'); 
        }
        
    });
});

//账号登录和快速登录切换
require(['jquery'],function ($) {
    $('.denglu-right>ul').on('click','li',function (){
        let index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.denglu-right>div').eq(index).addClass('show').siblings().removeClass('show');
    });
})
