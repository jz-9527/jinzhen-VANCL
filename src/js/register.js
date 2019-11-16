let baseUrl='http://127.0.0.1:8080/H1910/test/VANCL.com';

//1.拿到账号密码
//2.发送请求
//3.拿到数据
define(['jquery','cookie'], function($, cookie) {
    return{
        get:function(user,pass){
            if(user.length!=0 && pass.length!=0){
                $.ajax({
                    type: 'get',
                    url: baseUrl+'/lib/user.php',
                    dataType: "json",
                    data:{
                        username:user,
                        password:pass
                    },
                    success: function (response) {
                        let msg=response.msg;
                        if(Number(msg)){
                            location.href = "../html/index.html";
                        }else{
                            $('.slip').addClass('show'); 
                            user=null;
                            pass=null;
                        }
                    },
                    error:function (xhr,err) {
                        return err;
                    }
                });
            }
        }
    }
});