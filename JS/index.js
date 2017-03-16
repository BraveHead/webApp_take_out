/**
 * Created by 三页 on 2017/2/23.
 */
/*外卖首页列表*/
(function () {

<<<<<<< HEAD
    /*返回上一页*/
    $('.back').on('click',function (e) {
       window.history.back();
    });

=======
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    /*首页切换商家在线状态和商家列表对应显示*/
    $(".Selection_mode a").eq(0).addClass("selection_mode_now").css('color','rgb(255,255,255)');

    $(".Selection_mode a").on("click",function (e) {
        var index = $(this).index();
        $(this).eq($(this).index(this)).css('color','rgb(255,255,255)').siblings().css("color",'rgb(255,193,60)');

        $(this).eq($(this).index(this)).addClass("selection_mode_now").siblings().removeClass("selection_mode_now");

        $(".distribution_list").eq(index).addClass('show').siblings().removeClass("show");

    });
<<<<<<< HEAD
=======





>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    /*首页切换各类型餐馆的列表*/
    $('.category').on('click',function (e) {
        // var index1 = $(this).index(this);
        var index = $(this).index();
        console.log(index);
        $(this).addClass("in")
            .siblings().removeClass('in');
        // console.log($(".business_container"));
        $(".show>.business_container").eq(index).addClass("show").siblings().removeClass("show");
    });

<<<<<<< HEAD
=======
    /*拖动餐厅列表*/

   /* var moveEvent = document.getElementsByClassName("selection_type_scroll");
    console.log(moveEvent);
    moveEvent.addEventListener("mousedown",function (e) {

        var clientDownX = e.clientLeft;
        console.log(clientDownX);
        var clientMoveX;
        moveEvent.addEventListener("mousemove",function (e) {

            clientMoveX = e.clientLeft;
        });
        moveEvent.addEventListener("mouseup",function (e) {

            moveEvent.left= clientMoveX -clientDownX +"px";
        })


    });*/






>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    /*点击排序方法*/
        /*点击下拉*/

    $('.sort').on("click",function (e) {

        $(".fixed_sort").slideDown("normal").addClass("show");
        $(this).addClass("sort_back");
        $(".sort>img").attr('src',"Pictures/Pic/header_icon/sort_clicked.png");

    });

        /*点击切换选中*/
    $(".fixed_sort li").on("click",function (e) {
        $(this).addClass("fixed_sort_clicked").siblings().removeClass("fixed_sort_clicked");
        $(".fixed_sort").slideUp('normal',function () {
            $(".sort>img").attr('src',"Pictures/Pic/header_icon/sort_gray.png");
        }).removeClass("show");
    });
<<<<<<< HEAD

    /*搜索地址*/
    $('.searchInputCheck').on('input propertychange',function (e) {
        if($(this).val() == 'no'){
            $('.ShowSearchAddress').html("<img src='./Pictures/Pic/header_icon/Vector-Smart-Object.png' class='daXiang'/>" +
                "<p>阿偶~你想找的不在这里哎</p>" +
                "<h5>啊~查无此地区！检查下你的输入再试吧！</h5>");
        }
    });
    /*热门搜索*/


    $('.hot_search_content_type>span').on('click',function (e) {
        let nowIndex = $('.hot_search_content_type>span').index(this);
        $('.history_search_content_type').prepend('<span>'+ $('.hot_search_content_type>span').eq(nowIndex).text()
            +'<img src="Pictures/Pic/header_icon/clear_item.png"/></span>');
    });
    $('.history_search_content_type>span>img').on('click',function (e) {
        let nowIndex = $('.history_search_content_type>span>img').index(this);
        $('.history_search_content_type>span').eq(nowIndex).hide()
    });
    $('.clear_both_pic').on('click',function (e) {
        $('.history_search_content_type').html(" ");
    });



=======
        /*点击弹回*/
   /* $('.sort_back').on("click",function (e) {

        console.log('123');
    });*/
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
})();