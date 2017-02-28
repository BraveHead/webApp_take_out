/**
 * Created by 三页 on 2017/2/23.
 */
/*外卖首页列表*/
(function () {

    /*首页切换商家在线状态和商家列表对应显示*/
    $(".Selection_mode a").eq(0).addClass("selection_mode_now").css('color','rgb(255,255,255)');

    $(".Selection_mode a").on("click",function (e) {
        var index = $(this).index();
        $(this).eq($(this).index(this)).css('color','rgb(255,255,255)').siblings().css("color",'rgb(255,193,60)');

        $(this).eq($(this).index(this)).addClass("selection_mode_now").siblings().removeClass("selection_mode_now");

        $(".distribution_list").eq(index).addClass('show').siblings().removeClass("show");

    });





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
        /*点击弹回*/
   /* $('.sort_back').on("click",function (e) {

        console.log('123');
    });*/
})();