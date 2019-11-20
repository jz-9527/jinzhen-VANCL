let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';
define(['jquery','cookie'], function($, cookie) {
    return {
        getDetails:function(list,id){
            $.ajax({
                type: "get",
                url: baseUrl+"/lib/details.php",
                data: {
                    list:list,
                    id:id
                },
                dataType: "json",
                success: function (response) {
                    console.log(response[0]);
                    if(list=='commodity'){
                        $('.classify').append(response[0].com_texture+response[0].com_type+response[0].com_color);
                        $('.product_name').append(response[0].com_texture+response[0].com_type+response[0].com_color);
                        $('.img1').html(`<img src="../images/${response[0].com_img}">`);
                        $('.smallimg').attr('src',`../images/${response[0].com_img}`);
                        $('.big_img').html(`<img src="../images/${response[0].com_img}">`);
                        $('.price>.money').html(response[0].current_price);
                        $('.active').html(response[0].com_color);

                        if(response[0].com_model==null){
                            $('.cm').html('XXL');
                        }else{
                            $('.cm').html(response[0].com_model);
                        }
                    }else if(list=='new'){
                        $('.classify').append(response[0].new_name);
                        $('.product_name').append(response[0].new_name);
                        $('.img1').html(`<img src="../images/${response[0].new_img}">`);
                        $('.smallimg').attr('src',`../images/${response[0].new_img}`);
                        $('.big_img').html(`<img src="../images/${response[0].new_img}">`);
                        $('.price>.money').html(response[0].original_cost);
                        $('.active').html('浅灰');
                        $('.cm').html('XXL');
                    }
                },
                error:function (err) {
                    return err;
                }
            });
        },
    }
});