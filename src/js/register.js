let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';

//1.拿到账号密码
//2.发送请求
//3.拿到数据
define(['jquery', 'cookie'], function ($, cookie) {
    return {
        get: function (phone, pass) {
            if (phone.length != 0 && pass.length != 0) {
                $.ajax({
                    type: 'get',
                    url: baseUrl + '/lib/user.php',
                    dataType: "json",
                    data: {
                        phone: phone,
                        password: pass
                    },
                    success: function (response) {
                        console.log(response);
                        if (response[0].user_name) {
                            location.href = "../html/index.html";
                            cookie.set('user',JSON.stringify(response),1);
                        } else if(typeof response =='object'){
                            $('.slip').addClass('show').text('账号或者密码错误，请检查输入！');
                            phone = null;
                            pass = null;
                        }
                    },
                    error: function (xhr, err) {
                        return err;
                    }
                });
            }
        },
        
    }

});