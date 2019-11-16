requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        register: './register'
    },
    shim: {}
});

require(['jquery', 'register'], function ($, register) {
    $('.simbit').on('click', function () {
        let user = $('.user').val();
        let pass = $('.pass').val();
        register.get(user, pass);
        
    });
});