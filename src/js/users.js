let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';

//1.拿到账号密码
//2.发送请求
//3.拿到数据
define(['jquery', 'cookie','md5'], function ($, cookie) {
    return {
        getUser: function (phone, pass) {
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
                        if (response[0].user_phone == phone) {
                            location.href = "../html/index.html";
                            cookie.set('user', JSON.stringify(response), 1);
                        } else if (response[0].msg == '0') {
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
        encryption: function (password) {
            return $.md5(password);
        }
    }
});
