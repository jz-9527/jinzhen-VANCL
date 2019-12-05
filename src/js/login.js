requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        logins: './logins',
        md5: './md5'
    },
    shim: {}
});
require(['jquery', 'logins', 'md5'], function ($, logins, md5) {
    $('.reg').on('click', function () {
        let phone = $('.phone').val();
        let pass = $('.pass').val();
        let imgcode = $('.verification_code').val();
        let code = $('.code').val();
        let box = $('.box').prop('checked');

        let imgcodes = /^tphnel$/i;
        let phone_checkout = /^[1][3456789]\d{9}$/;
        let pass_check_out = /^\w{6,16}$/;
        //图片验证码正确tphnel
        //手机号输入格式正确
        //验证码统一暂定为123
        //登录密码符合规则
        //确认登录密码和密码相同
        //box的checked值为true

        if (imgcodes.test(imgcode)) {
            if (phone_checkout.test(phone)) {
                if (code == '123') {
                    if (pass_check_out.test(pass)) {
                        if ($('.pass')[0].value == $('.pass')[1].value) {
                            if (box) {
                                // let pass = $.md5(pass);
                                logins.setUser(phone, pass);
                            } else {
                                alert('请勾选服务协议');
                            }
                        } else {
                            alert('确认密码上下一致');
                            pass = null;
                        }
                    } else {
                        alert('密码为6-16位字符');
                        pass = null;
                    }
                } else {
                    alert('手机验证码错误，点击重发');
                    code = null;
                }
            } else {
                alert('手机号格式错误');
                phone = null;
            }
        } else {
            alert('验证码错误');
            imgcode = null;
        }
    });
});

//input获得焦点显示提示
require(['jquery'], function ($) {
    $('input').on({
        focusin: function () {
            $(this).siblings('.sp').addClass('show');
        },
        blur: function () {
            $(this).siblings('.sp').removeClass('show');
        }
    })
});

//符合条件
require(['jquery'], function ($) {
    $('.box').on('click', function () {

        let phone = $('.phone').val();
        let pass = $('.pass').val();
        let imgcode = $('.verification_code').val();
        let code = $('.code').val();
        let box = $('.box').prop('checked');


        // console.log(phone,pass,imgcode,code,box);
        if (phone != '') {
            if (pass != '') {
                if (imgcode != '') {
                    if (code != '') {
                        if (box) {
                            $('.reg').addClass('active').removeAttr('disabled');
                        } else {
                            $('.reg').removeClass('active').attr('disabled', 'disabled');
                        }
                    }
                }
            }
        }
    });

});