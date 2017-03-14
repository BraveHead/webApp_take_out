/**
 * Created by 三页 on 2017/3/2.
 */



    function Ajax() {
        $.ajax({
            url:"../lib/JS/souce/data.json",
            type:'GET',
            dataType:"json",
            sucess:function (data) {
                console.log(data);
            },
            error:function (err) {
                console.log("请求失败");
            }
        })
    }


