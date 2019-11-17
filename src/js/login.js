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
        
        logins.get(phone,pass);
    });
});