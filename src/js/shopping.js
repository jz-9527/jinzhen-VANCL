requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        logins: './logins',
        cookie: './cookie'
    },
    shim: {}
});
//检测登录状态
require(['jquery', 'cookie'], function ($, cookie) {
    //检查账号
    if (cook = cookie.get('user')) {
        let user = JSON.parse(cook)[0].user_phone;
        $('.register').html('退出登录')
            .css('color', 'red')
            .attr('href', 'javascript:void(0)')
            .on('click', function () {
                cookie.remove('user');
                location.href = './index.html';
            })
            ;
        $('.text-muted').html('欢迎光临:' + user);

        $('.login').html('切换用户')
            .css('color', 'red')
            .attr('href', './user.html')
            .on('click', function () {
                cookie.remove('user');
            });
    } else {
        console.log('无账号登录');
    }
});

//购物车渲染
require(['jquery', 'cookie'], function ($, cookie) {
    if (cookie.get('commodity') && cookie.get('commodity') != '[]') {
        cook = cookie.get('commodity');
        $('.nul').addClass('hidden');
        $('.shopping').children('p,div').removeClass('hidden');
        cook = JSON.parse(cook);
        let str = '';
        cook.forEach(val => {
            let count = (val.money * val.num).toFixed(2);
            str += `
            <div class="list">
                <input type="checkbox" class="box2" checked='checked'>
                <img src="../images/${val.src}" alt="" class="img">
                <span class="name">${val.product_name}</span>
                <span class="size">${val.cm}</span>
                <span class="money">￥${val.money}</span>
                <input type="number" class="num" value="${val.num}">
                <span class="sp">-</span>
                <span class="moneys">￥${count}</span>
                <button class="btn">删除</button>
            </div>
            `;
        });
        $('.shopp').html(str);

    } else {
        $('.shopping').children('p,div').addClass('hidden');
        $('.nul').removeClass('hidden');
    }

});
//删除按钮删除一条宝贝
require(['jquery', 'cookie'], function ($, cookie) {
    $('.shopp').on('click', '.btn', function () {
        let index = $(this).index('.list>.btn');
        let cook = JSON.parse(cookie.get('commodity'));
        cook.splice(index, 1);
        cookie.set('commodity', JSON.stringify(cook), 1);
        location.href = './shopping.html';
    });
});
//购物车之全选功能
require(['jquery', 'cookie'], function ($, cookie) {
    //全选按钮
    let folag = true;
    $('.box2').not('.list>.box2').on('click', function () {
        folag = !folag;
        $('.box2').prop('checked', folag);
    });
    //全选旁的删除键，删除指定带勾的商品
    $('.rem').on('click', function () {
        let cook = JSON.parse(cookie.get('commodity'));
        let box = $('.list>.box2');
        let index = [];
        box.each(function () {
            if (this.checked == true) {
                index.push($(this).index('.box2'));
            }
        });

        for (let i = index.length - 1; i >= 0; i--) {
            cook.splice(i, 1);
        }

        cookie.set('commodity', JSON.stringify(cook), 1);
        location.href = './shopping.html';
    });

});

//显示总价和商品总件数
require(['jquery', 'cookie'], function ($, cookie) {
    if (cookie.get('commodity')) {
        let box2 = $('.list>.box2');
        moneys();
        box2.on('click', function () {
            moneys();
        });
    }
    function moneys() {
        let money = $('.moneys');
        let count = 0;
        let len = 0;
        let box2 = $('.list>.box2');
        money.each(function (i) {
            if (box2.eq(i).prop('checked')) {
                count += Number(Number(this.innerHTML.substr(1)).toFixed(2));
                len++;
            }
        });
        $('.nums').text('数量总计:' + len + '件');
        $('.monyes').not('.list>.monyes').text('￥:' + count.toFixed(2));
    }
});

//结算
require(['jquery', 'cookie'], function ($, cookie) {
    $('.account').on('click', function () {
        if(cook = cookie.get('user')){
            location.href='../html/sham.html';
        }else{
            location.href='../html/user.html';
        }
    });
})
