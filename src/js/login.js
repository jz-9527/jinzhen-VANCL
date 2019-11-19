requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        logins: './logins'
    },
    shim: {}
});
require(['jquery','logins'],function ($,logins) {
    $('.reg').on('click',function(){
        let phone=$('.phone').val();
        let pass=$('.pass').val();
        let img=$('.code').val();
        let box=$('.box').val();
        console.log($('.box').prop('checked'));
        console.log($('.pass')[0].value);
        console.log($('.pass')[1].value);

        // if($('.pass')[0].value == $('.pass')[1].value){
        //     logins.get(phone,pass);
        // }
        
    });
});