let baseUrl = 'http://127.0.0.1:8080/H1910/test/VANCL.com';

define(['jquery'], function ($){
    return {
        getComm:function (){
            $.ajax({
                type: "get",
                url: baseUrl+"/lib/comm.php",
                dataType: "json",
                success: function (res) {
                    let comm='';
                    res.forEach(val=>{
                        if(val.com_gender==null){
                            val.com_gender=' ';
                        }
                        if(val.com_model==null){
                            val.com_model=' ';
                        }
                        comm+=`
                            <a href="./commodityDetails.html?id=${val.com_id}">
                                <img src="../images/${val.com_img}" alt="..">
                                <span class="commodity_name">${val.com_type}${val.com_name}&nbsp;${val.com_texture}&nbsp${val.com_gender}&nbsp;${val.com_model}&nbsp;${val.com_color}&nbsp;</span>
                                <del>￥${val.original_cost}</del>
                                <span class="vip_price">充值后<h3>${val.current_price}</h3>元</span>
                                <span class="now"><strong>￥</strong>${val.vip_price}</span>
                            </a>
                        `;
                    });
                    $('.discounts').html(comm);
                },
                error:function (err) {
                    return err;
                }
            });
        },
        getNewComm:function (){
            $.ajax({
                type: "get",
                url: baseUrl+"/lib/newcom.php",
                dataType: "json",
                success: function (res) {
                    let newcomm='';
                    res.forEach(val=>{
                        newcomm+=`
                            <a href="./commodityDetails.html">
                                <img src="../images/${val.new_img}" alt="..">
                            </a>
                        `;
                    });
                    $('.new_Products').html(newcomm);
                },
                error:function (err) {
                    return err;
                }
            });
        }
    }
});