let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';
define(['jquery'], function($) {
    return {
        get:function(phone,pass){
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
                },
                error:function (err) {
                    return err;
                  }
            });
        }
    }
});