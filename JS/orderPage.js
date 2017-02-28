/**
 * Created by 三页 on 2017/2/26.
 */
(function () {

    /*更多优惠的点击显示*/
    var arrSrc= ['Pictures/Pic/click_food/safe_down.png','Pictures/Pic/click_food/safe_up.png'];
    var index = 1;
    $(".safe_more").on('click',function (e) {
        index++;
        if(index >= 2){
            index = 0;
        }
        $(".safe_more>img").attr("src",arrSrc[index]);
        $('.order_message_safe_hidden').slideToggle("normal");
    });


    /*运用swiper插件来把点菜，评价，商家的各个模块同个tab的切换来实现衔接*/
    var mySwiper = new Swiper('.swiper-container',{
    });

    $('.module_list').click(function(){
        var listIndex = $(this).index();
        console.log(listIndex);
        $('.module_list_default').removeClass('showBottomRed');
        $('.module_list_default').eq(listIndex).addClass("showBottomRed");
        mySwiper.slideTo(listIndex, 1000, false);//切换到第listIndex个slide，速度为1秒
    });

    /*左边商品分类点击*/    //未完成功能
    // var nowOffsetTop = $('.food_list_item').eq(0).scrollTop;
    $('.food_type_list_item').on('click',function (e) {
        var number = $(this).index();
        $(this).addClass("showFoodListWhite").siblings().removeClass("showFoodListWhite");
        // var NextOffsetTop = $('.food_list_item').eq(number).scrollTop;
        // var length = (-NextOffsetTop+nowOffsetTop)/100 + "rem";
        // $('.food_list_item_container>ul').css('scrollTop',length);
        $.scrollTo('#id'+number,500);
    });






})();