let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';

define(['jquery'], function($) {
    return {
        setUser:function(phone,pass){
            if (phone.length != 0 && pass.length != 0) {
                $.ajax({
                    type: "get",
                    url: baseUrl+"/lib/login.php",
                    data: {
                        phone:phone,
                        password:pass
                    },
                    dataType: "json",
                    success: function (response) {
                        console.log(response);
                        $('.yes').addClass('act');
                        setTimeout(function(){
                            location.href='../html/user.html';
                        },3000);
                    },
                    error:function (err) {
                        return err;
                      }
                });
            }
        }
    }
});