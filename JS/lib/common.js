/**
 * Created by 三页 on 2017/3/19.
 */
(function () {
    $('.show_shopping_car_container').css('height',document.body.offsetHeight +"px") ;
    var arrStat = ['Pictures/Pic/click_food/no_collection.png','Pictures/Pic/click_food/collection.png'];
    var arrStatCopy = ['Pictures/Pic/click_food/collection_dark.png',"Pictures/Pic/click_food/red_stat.png"];
    var shareArr = ['Pictures/Pic/header_icon/share.png',"Pictures/Pic/click_food/share_dark.png"];
    var backArr = ['Pictures/Pic/header_icon/back.png','Pictures/Pic/header_icon/back_gray.png'];
    var storage = window.sessionStorage;
    /*点击返回上一页*/
    $('.order_back').on('click',function (e) {
        window.history.back();
    });
    setTimeout(function () {
        if(storage.getItem("icon") == "fullWhite" || storage.getItem("icon") == "fullRed"){
            $(".order_collection").attr("src",arrStat[1]);
        }
    },20);

    /*点击收藏*/
    function Collection() {
        $('.order_collection').on('click',function (e) {
            let src = $(this).attr("src");
            switch(src){
                case arrStat[0]:
                    storage.setItem("icon","fullWhite");
                    $(this).attr('src',arrStat[1]);
                    break;
                case arrStat[1]:
                    storage.setItem("icon","white")
                    $(this).attr('src',arrStat[0]);
                    break;
                case arrStatCopy[0]:
                    storage.setItem('icon',"fullRed");
                    $(this).attr('src',arrStatCopy[1]);
                    break;
                case arrStatCopy[1]:
                    storage.setItem("icon","red");
                    $(this).attr("src",arrStatCopy[0]);
                    break;
                default:
                    alert("图片src有误");
            }

        });
    }

    /*点击分享*/
    function clickShare() {
        $('.order_share').on("click",function (e) {
            $('.serverSettingContainer').css({
                "display":'block',
                "height":$(document).height() + "px"
            });
            $('.ShareListContainer').css({
                "display":'block',
                'top':($(document).height() - $('.ShareListContainer').height())/2 + "px"
            });
            $(".ShareListContainer").css("left",($(document).width()- $(".ShareListContainer").width())/2 + "px");
        });
        $('.ShareListContainer>div').on('click',function (e) {
            $('.serverSettingContainer').css("display",'none');
            $('.ShareListContainer').css('display','none');
        });
    }

    /*更多优惠的点击显示*/
    function ShowSafe() {
        var arrSrc= ['Pictures/Pic/click_food/safe_up.png','Pictures/Pic/click_food/safe_down.png'];
        var index = 1;
        $(".safe_more").on('click',function (e) {
            index++;
            if(index >= 2){
                index = 0;
            }
            $(".safe_more>img").attr("src",arrSrc[index]);
            $('.order_message_safe_hidden').slideToggle("normal");
        });
    }
    /*不同的nav的切换效果*/
    function switchTab() {
        $('.module_list').click(function(){
            var listIndex = $(this).index();
            $('.module_list_default').removeClass('showBottomRed');
            $('.module_list_default').eq(listIndex).addClass("showBottomRed");
        });
    }
    /*监听页面容器的滚动，产生变化*/
    function listenScrollBox() {
        var newOne = document.querySelectorAll(".new");
        var newScrollTop;
        var orderCollection = $(".order_collection");
        newOne[0].addEventListener('scroll',function (e) {
            newScrollTop = newOne[0].scrollTop;
            if(newScrollTop >= 20){
                if(storage.getItem("icon") == "fullWhite" || storage.getItem("icon") == "fullWhite"){
                    orderCollection.attr('src',arrStat[1])
                }else{
                    orderCollection.attr('src',arrStat[0]);
                }
                $('.order_food_header').addClass('headerTransform');
                $('.order_back').attr('src',backArr[1]);

                $('.order_header_message_container').addClass('headerTransform showTransformHidden');
                $('.businessItemName').css({'display':'block','color':'#3c3c3c'});
                $('.order_share').attr("src",shareArr[1]);
            }else{
                if(storage.getItem("icon") == "fullRed" || storage.getItem("icon") == "fullWhite"){
                    orderCollection.attr('src',arrStatCopy[1]);
                }else{
                    orderCollection.attr('src',arrStatCopy[0]);
                }
                $('.order_share').attr("src",shareArr[0]);
                $('.order_food_header').removeClass("headerTransform");

                $('.order_back').attr('src',backArr[0]);
                $('.order_header_message_container').removeClass('headerTransform showTransformHidden');
                $('.businessItemName').css({'display':'none','color':'#3c3c3c'});
            }
        })
    }
    /*点击背景消失*/
    function clickBeiJing() {
        $(".serverSettingContainer").on("click",function (e) {
            $(this).css("display","none");
            $(".ShareListContainer").css("display","none");
        })
    }
    function init() {
        Collection();//点击收藏
        clickShare();//点击分享
        ShowSafe();//点击显示更多优惠
        switchTab();//点击nav的切换效果
        listenScrollBox();//监听容器的滚动变化
        clickBeiJing();//点击背景弹框消失
    }

    init();

})();