/**
 * Created by 三页 on 2017/2/26.
 */
(function () {

    /*加载初始状态*/
<<<<<<< HEAD
    $('.show_shopping_car_container').css('height',document.body.offsetHeight +"px") ;
    var arrStat = ['Pictures/Pic/click_food/no_collection.png','Pictures/Pic/click_food/collection.png'];
    var arrStatCopy = ['Pictures/Pic/click_food/collection_dark.png',"Pictures/Pic/click_food/red_stat.png"];
    var shareArr = ['Pictures/Pic/header_icon/share.png',"Pictures/Pic/click_food/share_dark.png"];
    var backArr = ['Pictures/Pic/header_icon/back.png','Pictures/Pic/header_icon/back_gray.png'];
    var storage = window.sessionStorage;
    let allFoodItemCount;

    /*选择配送服务*/
    function choiceServer() {
        setTimeout(function () {
            $('.serverSettingContainer').css({
                'display':'block',
                'height':$(document).height() +"px"
            });
            $('.serverSetting').css({
                "display":'block',
                "top":($(document).height() - $('.serverSetting').height())/2+'px'
            });
        },100);
        let serverPicArr = ['Pictures/Pic/click_food/noClickedServer.png','Pictures/Pic/click_food/clickedServer.png'];
        $('.serverSettingType>div>img').on('click',function () {
            let index = $('.serverSettingType>div>img').index(this);
            $('.serverSettingType>div>img').attr('src',serverPicArr[0]);
            $('.serverSettingType>div>img').eq(index).attr('src',serverPicArr[1]);
            $('.serverSettingItem').eq(index).addClass('show').siblings().removeClass('show');
        });
        /**
         * @className 节点的className
         * @nowIndex 点击后需要添加到的元素的下标
         */
        function showContent(className,nowIndex) {
            /*点击区域，显示选项*/
            $('.'+ className).on('click',function (e) {
                $('.regionListContainer').css({
                    'display':'block',
                    'top':($(document).height() - $('.regionListContainer').height())/2 + "px"
                })
            });


        }
        let nowIndex;
        $('.regionDiv').on('click',function (e) {
            nowIndex = $('.regionDiv').index(this);
            showContent('regionDiv',nowIndex);
        });
        /*选择选项后关闭区域选项框*/
        $('.regionListContainer li').on('click',function (e) {
            let index = $('.regionListContainer li').index(this);
            console.log(index);
            $('.regionListContainer').css('display','none');
            $('.regionDiv').eq(nowIndex).html($('.regionListContainer li').eq(index).html() + '<img src="Pictures/Pic/click_food/serverSettingDown.png"/>');
        });

        /*确认保存信息*/
        $('.sureServer').on('click',function (e) {
            $('.serverSettingContainer').css('display','none');
            $('.serverSetting').css('display','none');
        });

        $('.cancelServer, .serverSettingTitel>img').on('click',function (e) {
            $('.serverSettingContainer').css('display','none');
            $('.serverSetting').css('display','none');
        })
    }

=======
    var shoppingContainer = document.getElementsByClassName('show_shopping_car_container');
    var shoppingBottom = document.getElementsByClassName('shopping_car_bottom');
    $('.show_shopping_car_container').css('height',document.body.offsetHeight +"px") ;
    var arrStat = ['Pictures/Pic/click_food/white_stat.png','Pictures/Pic/click_food/red_stat.png'];
    var backArr = ['Pictures/Pic/header_icon/back.png','Pictures/Pic/header_icon/back_gray.png'];
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    
    /*点击返回上一页*/
    $('.order_back').on('click',function (e) {
        window.history.back();
    });

    /*点击收藏*/
    function Collection() {
<<<<<<< HEAD
        var statIndex = 0;
        storage.setItem("statColor",'white');
        $('.order_collection').on('click',function (e) {
            statIndex++;
            let src = $(this).attr("src");
            switch(src){
                case arrStat[0]:
                    $(this).attr('src',arrStat[1]);
                    break;
                case arrStat[1]:
                    $(this).attr('src',arrStat[0]);
                    break;
                case arrStatCopy[0]:
                    $(this).attr('src',arrStatCopy[1]);
                    break;
                case arrStatCopy[1]:
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
        });
        $('.ShareListContainer>div').on('click',function (e) {
            $('.serverSettingContainer').css("display",'none');
            $('.ShareListContainer').css('display','none');
        });
    }
    /*更多优惠的点击显示*/
    function ShowSafe() {
        var arrSrc= ['Pictures/Pic/click_food/safe_up.png','Pictures/Pic/click_food/safe_down.png'];
=======

        var statIndex = 1;
        $('.order_collection').on('click',function (e) {
            statIndex++;
            if(statIndex >= 2){
                statIndex = 0;
            }
            $(this).attr('src',arrStat[statIndex]);
        });
    }


    /*更多优惠的点击显示*/
    function ShowSafe() {
        var arrSrc= ['Pictures/Pic/click_food/safe_down.png','Pictures/Pic/click_food/safe_up.png'];
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
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
<<<<<<< HEAD
    /*运用swiper来把点菜，评价，商家的各个模块同个tab的切换来实现衔接*/
    function switchTab() {
        var mySwiper = new Swiper('.swiper-container',{
        });
=======



    /*运用swiper来把点菜，评价，商家的各个模块同个tab的切换来实现衔接*/

    function switchTab() {
        var mySwiper = new Swiper('.swiper-container',{
        });

>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
        $('.module_list').click(function(){
            var listIndex = $(this).index();
            console.log(listIndex);
            $('.module_list_default').removeClass('showBottomRed');
            $('.module_list_default').eq(listIndex).addClass("showBottomRed");
            mySwiper.slideTo(listIndex, 1000, false);//切换到第listIndex个slide，速度为1秒
        });
<<<<<<< HEAD
         var setID = setInterval(function () {
            for(let i = 0; i < 3;i ++){
                if($('.swiper-slide').eq(i).hasClass("swiper-slide-active")){
                    $('.module_list_default').removeClass('showBottomRed');
                    $('.module_list_default').eq(i).addClass("showBottomRed");
                }
            }
            if($('.module_list_default ').eq(0).hasClass("showBottomRed")){
                $('.shopping_car_bottom').css('display','block');
            }else{
                $('.shopping_car_bottom').css('display','none');
            }
            console.log('>>>>>>>>>>');
        },500);
    }
    /*监听页面容器的滚动，产生变化*/
    function listenScrollBox() {
        var newOne = document.querySelectorAll(".new");
        var newScrollTop;
=======
    }

    /*监听页面容器的滚动，产生变化*/

    function listenScrollBox() {
        var newOne = document.querySelectorAll(".new");
        var orderContainer = document.querySelectorAll('.order_container');

       /* $('.order_container').on('scroll',function (event) {
            var e = event || window.event;
            console.log('123123123');
        });*/
       var newScrollTop;
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
       newOne[0].addEventListener('scroll',function (e) {
           newScrollTop = newOne[0].scrollTop;
           if(newScrollTop >= 20){
                $('.order_food_header').addClass('headerTransform');
                $('.order_back').attr('src',backArr[1]);
<<<<<<< HEAD
                if( $('.order_collection').attr('src') == arrStat[1]){
                    $('.order_collection').attr('src',arrStatCopy[1]);
                }else{
                    $('.order_collection').attr('src',arrStatCopy[0]);
                }
                $('.order_header_message_container').addClass('headerTransform showTransformHidden');
                $('.businessItemName').css({'display':'block','color':'black'});
                $('.order_share').attr("src",shareArr[1]);
           }else{
               $('.order_share').attr("src",shareArr[0]);
               $('.order_food_header').removeClass("headerTransform");
               if($('.order_collection').attr('src') == arrStatCopy[1]){
                   $('.order_collection').attr('src',arrStat[1]);
               }else{
                   $('.order_collection').attr('src',arrStat[0]);
               }
               $('.order_back').attr('src',backArr[0]);
=======
                $('.order_collection').attr('src',arrStat[1]);
                $('.order_header_message_container').addClass('headerTransform showTransformHidden');
                $('.businessItemName').css({'display':'block','color':'black'});
           }else{
               $('.order_food_header').removeClass("headerTransform");
               $('.order_back').attr('src',backArr[0]);
               $('.order_collection').attr('src',arrStat[0]);
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
               $('.order_header_message_container').removeClass('headerTransform showTransformHidden');
               $('.businessItemName').css({'display':'none','color':'black'});
           }
        })

    }
<<<<<<< HEAD
    /*获取各商品类型的点击切换效果并获取设置内容的高度*/   //切换的高度不对应,导致显示的view不一致
    function ClickTabViewContent() {
        window.onload = function () {
            var foodTypeName = document.getElementsByClassName('food_type_list_item');
            var foodName = document.querySelectorAll(".food_list_item");
            var foodContainerTop = 0;
=======


    /*获取各商品类型的点击切换效果并获取设置内容的高度*/   //切换的高度不对应,导致显示的view不一致
    function ClickTabViewContent() {
        window.onload = function () {

            var foodTypeName = document.getElementsByClassName('food_type_list_item');
            var foodName = document.querySelectorAll(".food_list_item");
            var foodNameContainer = document.querySelector('.food_list_item_container ul');
            var foodContainerTop = 0;
            var prev = 0;
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
            var next ;
            var addNext = 0;
            if(foodTypeName){
                for(let i = 0; i <　foodTypeName.length;i++){
                    foodTypeName[i].setAttribute("contentHeight",foodContainerTop);
                    // console.log(foodName[i].offsetHeight);
                    foodContainerTop += foodName[i].offsetHeight;
                    console.log(foodContainerTop);
                    foodTypeName[i].addEventListener("click",function (e) {
                        setInterval(setScrollTop);
                        next = parseInt(this.getAttribute("contentHeight"));
                        console.log(parseInt(next));
<<<<<<< HEAD
                        console.log($('.food_list_item_ul').scrollTop());
=======

                        console.log($('.food_list_item_ul').scrollTop());

>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
                        var setScrollTop = setInterval(function () {
                            if(next > addNext){
                                addNext += 50;
                                if(addNext >= next){
                                    addNext = next;

                                    clearInterval(setScrollTop);
                                }
                                $('.food_list_item_ul').scrollTop(addNext);
                            }else{
                                addNext -= 50;
                                if(addNext <= next){
                                    addNext = next;
                                    clearInterval(setScrollTop);
                                }
                                $('.food_list_item_ul').scrollTop(addNext);
                            }
                        },50);
                        console.log(addNext);
                    });

                }
            }

        }
    }
<<<<<<< HEAD
=======



>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    /**
     *
     * @param num number
     */
    $('.food_type_list_item').on('click',function (e) {
        $(this).addClass("showFoodListWhite").siblings().removeClass("showFoodListWhite");
    });
<<<<<<< HEAD
   /*购物车功能*/
   function ShoppingCar() {
       /*获取数据并存到本地*/
       setTimeout(function (e) {
           $.ajax({
               url:'./souce/data.json',
               type:'GET',
               dataType:'json',
               success:function (data) {
                   allFoodItemCount = data.foodData.length;
                   for(let i = 0; i < allFoodItemCount;i++){
                       storage.setItem("foodItem"+i,JSON.stringify(data.foodData[i]));
                   }
               },
               error:function (error) {
                   console.log("数据请求失败，注意跨域");
               }
           })

       },1000);

       /**
        * @reduceName 减少按钮的className
        * @countName   数量的className
        * @index 当前的节点的下标
        */
       /*判断当前的数量，少于0则隐藏*/
       function buttonShowOrHidden(reduceName,countName, index) {
           let foodItem = JSON.parse(storage.getItem("foodItem"+index));
           if(foodItem.count <= 0){
               foodItem.count = 0;
               storage.setItem('foodItem'+index,JSON.stringify(foodItem));
               $('.'+reduceName).eq(index).css('visibility','hidden');
               $('.'+countName).eq(index).css('visibility','hidden');
           }else{

               $('.'+reduceName).eq(index).css('visibility','visible');
               $('.'+countName).eq(index).css('visibility','visible');
           }
       }

       /**
        * @index 当前点击的元素下标
        */

       /*购物车列表的中商品的显示与隐藏*/
       function ShoppingListItemShowOrHidden(index) {
            let foodItemIndex = JSON.parse(storage.getItem('foodItem'+index));
            for(let i = 0; i< allFoodItemCount;i++){
                let foodItem = JSON.parse(storage.getItem("foodItem"+i));
                if(foodItem.count != 0){
                    $('.shopping_item').eq(i).css('display','block');
                    $('.reduceCar').eq(index).css('visibility','visible');
                    $('.numberCar').eq(index).css('visibility','visible').text(foodItemIndex.count);
                    if(foodItem.sku == "1"){
                        let str = foodItem.type + foodItem.addFood.split(" ");
                        console.log(str);
                        $('.shoppingItem_name').eq(i).html("<span id='newShoppingItemSpan'>"+ foodItem.foodItem +"</span>"+
                        "<p id='addSkuFoodType'>"+ str +"</p>");
                    }
                }else{
                    $('.shopping_item').eq(i).css('display','none');
                }
            }

       }
        /*添加事件*/
        let isChoiceServer = false;
       $('.add_count').on('click', function (){
           if(!isChoiceServer){
               choiceServer();
               isChoiceServer = true;
           }
           let nowIndex = $(".add_count").index(this);
           let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
           let nowCount = foodItem.count;
           if(foodItem.sku == "0"){
               console.log("无sku商品的直接添加");
               nowCount += 1;
               foodItem.count = nowCount;
               storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
               let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
               console.log(foodItemNext.count);
               $('.now_count').eq(nowIndex).text(foodItemNext.count);
               buttonShowOrHidden("reduce","now_count",nowIndex);

               ShoppingListItemShowOrHidden(nowIndex);
               ShoppingBill();  //购物车总价与数量
               console.log('点击添加ok');
           }else{
               console.log('进入sku页面选择');
               $('.skuFoodHtml').css({
                   'display':'block',
                   'height':$(document).height()+"px",
                   'background-color':'rgb(241,241,241)'
               });
               $('.skuFoodName').text(foodItem.foodItem);
               $('.skuFoodPeace').text(foodItem.peace);
               $('.skuFoodCount').text(foodItem.count);

               /*sku商品数量的添加*/
               let skuFoodCount = foodItem.count;
               $('.skuFoodAddCount').on('click',function () {
                   skuFoodCount += 1;
                   $('.skuFoodCount').text(skuFoodCount);
               });

               /*sku商品数量的减少*/
               $('.skuFoodReduce').on('click',function () {
                   let skuFoodCount = parseInt($('.skuFoodCount').text());
                   skuFoodCount -= 1;
                   if(skuFoodCount <= 0){
                       skuFoodCount = 0;
                   }
                   $('.skuFoodCount').text(skuFoodCount);
               });
               /*sku商品的选择口味*/
               $('.flavorItemPic').on("click",function (e) {
                   let nowIndex = $(".flavorItemPic").index(this);
                   let picSrc = $('.flavorItemPic').eq(nowIndex).attr('src');
                   if(picSrc == 'Pictures/Pic/skuFood/noClickedRound.png'){
                       $(".flavorItemPic").attr('src',"Pictures/Pic/skuFood/noClickedRound.png").
                       eq(nowIndex).attr('src','Pictures/Pic/skuFood/clickedRound.png');
                   }
               });
               $('.addDish').on('click',function (e) {
                   let nowIndex = $(".addDish").index(this);
                   let picSrc = $('.addDish').eq(nowIndex).attr('src');
                   if(picSrc == 'Pictures/Pic/skuFood/noClickedSquare.png'){
                       $(".addDish").eq(nowIndex).attr('src','Pictures/Pic/skuFood/clickedSquare.png');
                   }else{
                       $(".addDish").eq(nowIndex).attr('src','Pictures/Pic/skuFood/noClickedSquare.png');
                   }
               });
               /*点击取消，不保存sku选项*/
               $('.timeHeaderBackMessage').on('click',function () {
                   $('.skuFoodHtml').css('display','none');
                   ShoppingBill();  //购物车总价与数量
               });
               /*点击确认，并保存sku的选择*/
                $('.sure').one('click',function () {
                    let skuFoodCount = parseInt($('.skuFoodCount').text());
                    foodItem.count = skuFoodCount;
                    foodItem['addFood'] = "";
                    $('.addDish').off("click");
                    for(let i= 0; i < $('.flavorItemPic').length;i++){
                        if($('.flavorItemPic').eq(i).attr('src') == "Pictures/Pic/skuFood/clickedRound.png"){
                            foodItem['type'] = $('.flavorItemPic').eq(i).siblings().text();
                        }
                    }
                    for(let i= 0; i < $('.addDish').length;i++){
                        if($('.addDish').eq(i).attr('src') == "Pictures/Pic/skuFood/clickedSquare.png"){
                            foodItem['addFood'] += " "+$('.addDish').eq(i).siblings().text();
                        }
                    }
                    storage.setItem('foodItem'+ nowIndex, JSON.stringify(foodItem));
                    $('.skuFoodHtml').css('display','none');

                    let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
                    console.log(foodItemNext.count);
                    $('.now_count').eq(nowIndex).text(foodItemNext.count);
                    buttonShowOrHidden("reduce","now_count",nowIndex);

                    ShoppingListItemShowOrHidden(nowIndex);
                    ShoppingBill();  //购物车总价与数量
                    console.log('sku添加ok');
                })
           }

       });

       /*减少事件*/
       $('.reduce').on('click', function () {
           let nowIndex = $('.reduce').index(this);
           let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
           let nowCount = foodItem.count;
           nowCount -= 1;
           foodItem.count = nowCount;
           storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
           let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
           $('.now_count').eq(nowIndex).text(foodItemNext.count);
           console.log(foodItemNext.count);
           buttonShowOrHidden("reduce",'now_count',nowIndex);
           ShoppingListItemShowOrHidden(nowIndex);
           ShoppingBill();  //购物车总价与数量
           console.log('点击减少ok');
       });

       /*购物车添加事件*/
       $('.addCar').on('click',function() {
           let nowIndex = $(".addCar").index(this);
           let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
           let nowCount = foodItem.count;
           nowCount += 1;
           foodItem.count = nowCount;
           storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
           let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
           console.log(foodItemNext.count);
           $('.now_count').eq(nowIndex).text(foodItemNext.count);
           buttonShowOrHidden("reduceCar","numberCar",nowIndex);
           ShoppingListItemShowOrHidden(nowIndex);
           console.log('购物车上点击添加ok');
           ShoppingBill();  //购物车总价与数量
       });

       /*购物车减少事件*/
        $('.reduceCar').on('click',function() {
            let nowIndex = $(".reduceCar").index(this);
            let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
            let nowCount = foodItem.count;

            nowCount -= 1;
            foodItem.count = nowCount;
            storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
            let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
            $('.now_count').eq(nowIndex).text(foodItemNext.count);
            console.log(foodItemNext.count);
            buttonShowOrHidden("reduceCar",'numberCar',nowIndex);
            buttonShowOrHidden("reduce",'now_count',nowIndex);
            ShoppingListItemShowOrHidden(nowIndex);
            ShoppingBill();  //购物车总价与数量
            console.log('点击减少ok');

        });

       /*点击弹出购物车*/
       var showIndex = 0;
       $(".shopping_car_pic").on("click",function (e) {
           showIndex++;
           if(showIndex >= 2){
               $('.show_shopping_car_container').css('display','none');
               $('#shopping_car_content').css('display','none');
               showIndex = 0;
           }else{
               $('.show_shopping_car_container').css({'display':'block','height':1000+'px'});
               $('#shopping_car_content').slideDown(500);
               $('.show_shopping_car_container').on("click",function (e) {
                   $(this).css("display",'none');
                   console.log('hah');
                   $('#shopping_car_content').css('display','none');
               });
           }
           /*/!*清除点单的所有信息*!/*/
           $('.clear_shopping').on('click',function (e) {
               storage.clear();
               location.reload();
           });
       });
       
       /*购物车账单*/
       function ShoppingBill() {
           let billPeace = 0;
           let shoppingCount = 0;
           for(let i = 0; i < allFoodItemCount; i++){
               let foodItem = JSON.parse(storage.getItem('foodItem'+ i));
               billPeace += foodItem.count * parseInt(foodItem.peace.substr(1));
               shoppingCount += foodItem.count;
           }
           if(shoppingCount > 0){
               $('.shopping_car_count').css({
                   'display':'block'
               }).text(shoppingCount);
           }else{
               $('.shopping_car_count').css('display','none').text(0);
           }

           let a = billPeace - 40;
           console.log(a);
           if(billPeace > 0){
               $('.shopping_car_pic').attr('src','./Pictures/Pic/click_food/shoppingCar.png');
               $('.altogether').text("$"+ billPeace);
           }else{
               billPeace = 0;
               $('.shopping_car_pic').attr('src','./Pictures/Pic/click_food/no_shopping.png');
               $('.altogether').text("购物篮是空的");
           }

           if(a >= 0){
                $('.lack').text('结算支付').css('background-color','rgb(225,39,63)');
           }else{
               $('.lack').text("还差$"+ (-a)).css('background-color','rgb(170,170,170)');
           }
       }

       /*点击结算*/
       $('.lack').on('click',function () {
           if($(this).text() == '结算支付'){
               $(this).attr('href','orderSettlementHTML/orderSettlement.html');
           }else{
               alert("配送额不够");
           }
       })

   }
   /*评论模块*/
   function commentModule() {
       $('.choice_evaluate_container>img').on('click',function (e) {
           if($('.choice_evaluate_container>img').attr("src") == "Pictures/Pic/evaluate/choice.png"){
               $('.choice_evaluate_container>img').attr("src","Pictures/Pic/evaluate/no_choice.png");
           }else{
               $('.choice_evaluate_container>img').attr("src","Pictures/Pic/evaluate/choice.png");
           }
       });

       $('.evaluate_context_right img').on('click',function (e) {
           let nowIndex = $('.evaluate_context_right img').index(this);
           $('.evaluate_context_right img').attr('src',"Pictures/Pic/evaluate/gray_star.png");
           for(let i = 0; i < nowIndex; i ++){
               $('.evaluate_context_right img').eq(i).attr('src',"Pictures/Pic/evaluate/yellow_star.png");
           }
       })
   }
    /*商家模块的事件*/
    function BusinessTime() {
        var storage = window.sessionStorage;
        $('.peisong').on('click',function () {
            storage.setItem("timeNum",1);
        });
        $('.yinye').on('click',function () {
            storage.setItem('timeNum',0);
        })
=======




    /*点击添加购物车事件*/

    function addShoppingCar() {
        // var foodNumber = document.getElementsByClassName("food_list_item_foodName");
        var arrObj = {'arr':[0,0,0,0,0,0,0,0,0,0,0]};
        var storage = window.sessionStorage;
        var arrCun = JSON.parse(storage.getItem('arr'));
        if(arrCun && arrCun.length >= 0){
            for(var s = 0; s < arrCun.length; s++){
                arrObj.arr[s].push(arrCun[s]);
            }
        }

        var  carListNum = JSON.parse(storage.getItem('numMessage'));
        $('.lack').attr('minMath',40);
        var minMath = parseInt($('.lack').attr("minMath"));
        var nowAllPeace = $('.altogether');

        var reduce = document.querySelectorAll(".reduce");
        var add = document.querySelectorAll(".add_count");
        var numCount = document.querySelectorAll(".now_count");
        var shoppingCarPeace;

        var createBallCount = 0;//一共产生小球的数量
        /*添加商品*/
        $('.add_count').on('click',function (event) {
            var e = event || window.event;
            // setInterval(id);
            var nowIndex = $('.add_count').index(this);
           /* /!*点击小球效果*!/
            $('body').append('<div class="ball"></div>');
            var nowBall = $('.ball').eq(createBallCount).prevObject[createBallCount];
            nowBall.setAttribute('id','ball'+createBallCount);

            console.log(e.clientX);
            $('.ball').eq(createBallCount).css({
                'top':e.clientY-10 +'px',
                'left':"90.5%",
                'height':'0.3rem',
                'background-color':'rgb(225,39,63)',
                'width':'0.3rem',
                'border-radius':'50%',
                'z-index':'99',
                'position':'absolute'
            });
            var left = 90.5;
            console.log(window.screen.height);
            var ballMove = document.querySelectorAll(".ball")[createBallCount];
            var top = e.clientY/window.screen.height*100;
            var id = setInterval(function () {
                left =left - (90.5 - 7.33)/24.04;
                top = top + (100-7.33-top)/24.05;

                ballMove.style.top = top + "%";
                ballMove.style.left = left+'%';

                if(left <= 7.33 || top >= 92.67 ){
                    $('.ball').eq(createBallCount).remove();
                    clearInterval(id);
                }
                console.log(left);
            },24.05);

            createBallCount ++;
*/
            var carCount = 0;
            shoppingCarPeace = 0;
            $.ajax({
                url:"./souce/data.json",
                type:'GET',
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    arrObj.arr[nowIndex] += 1;
                    $('.reduce').eq(nowIndex).css('visibility','visible');
                    $('.now_count').eq(nowIndex).css('visibility','visible').text(arrObj.arr[nowIndex]);
                    console.log(arrObj);
                    var objContent = data.foodData[nowIndex];
                    var foodObj = {'name':objContent.foodItem,'peace':objContent.peace};
                    storage.setItem("foodItem"+nowIndex,JSON.stringify(foodObj));
                    storage.setItem("arr",JSON.stringify(arrObj));

                    /*购物车显示出点击的商品*/
                    if(arrObj.arr[nowIndex] == 1){
                        $('.shopping_item').eq(nowIndex).css('display','block');
                    }
                    $('.numberCar').eq(nowIndex).html(JSON.parse(storage.getItem('arr')).arr[nowIndex]);

                    /*动态获取购物车物品数量和总价*/
                    for(let n = 0 ; n <　JSON.parse(storage.getItem('arr')).arr.length;n++){
                        var arrListItem = parseInt(JSON.parse(storage.getItem('arr')).arr[n]);
                        if( arrListItem != 0 ){
                            carCount = carCount + arrListItem;
                            var itemPeace = parseInt($('.now_peace').eq(n).text().substr('1'));
                            shoppingCarPeace += arrListItem*itemPeace ;
                        }
                        console.log(shoppingCarPeace);
                    }
                    nowAllPeace.text("$"+shoppingCarPeace);
                    if(shoppingCarPeace >= minMath ){
                        $('.lack').css('background-color','rgb(225,39,63)').html('结算支付');
                    }
                    $('.shopping_car_count').css("display",'block').html(carCount);
                    $('.shopping_car_pic').attr("src",'./Pictures/Pic/click_food/shoppingCar.png');
                },
                error:function (err) {
                    console.log("请求失败");
                }
            })
        });

        /*减少商品*/
        $('.reduce').on('click',function (e) {
            shoppingCarPeace = 0;
            var carCount = 0;
            var nowIndex = $('.reduce').index(this);
            var showNum = arrObj.arr[nowIndex];
            console.log(arrObj.arr);
            showNum -= 1 ;
            arrObj.arr[nowIndex] = showNum;
            $('.now_count').eq(nowIndex).text(showNum);
            if(showNum <= 0){
                showNum =0;
                $('.reduce').eq(nowIndex).css('visibility','hidden');
                $('.now_count').eq(nowIndex).css('visibility','hidden');
                storage.removeItem('foodItem'+nowIndex);
            }
            storage.setItem("arr",JSON.stringify(arrObj));

            /*购物车显示出点击的商品*/
            if(arrObj.arr[nowIndex] == 0){
                $('.shopping_item').eq(nowIndex).css('display','none');
            }


            var reduceArr = JSON.parse(storage.getItem("arr")).arr;
            for(var i in reduceArr){
                if(reduceArr[i] != 0){
                    carCount += reduceArr[i];
                    shoppingCarPeace += reduceArr[i]*(parseInt($('.now_peace').eq(i).text().substr('1')));
                }
            }

            nowAllPeace.text("$"+shoppingCarPeace);
            if(shoppingCarPeace < minMath){
                $('.lack').css('background-color','rgb(170,170,170)').text('还差$'+(minMath-shoppingCarPeace));
            }
            $('.shopping_car_count').text(carCount);
            if(carCount == 0 ){
                console.log('>>>>');
                $('.shopping_car_count').css("display",'none').html(carCount);
                $('.shopping_car_pic').attr("src",'./Pictures/Pic/click_food/no_shopping.png');
            }
        });

        /*点击购物车弹出已购商品列表*/
        var showIndex = 0;
        $(".shopping_car_pic").on("click",function (e) {
            showIndex++;
            if(showIndex >= 2){
                $('.show_shopping_car_container').css('display','none');
                $('#shopping_car_content').css('display','none');
                showIndex = 0;
            }else{
                $('.show_shopping_car_container').css({'display':'block','height':1000+'px'});
                $('#shopping_car_content').slideDown(500);
                $('.show_shopping_car_container').on("click",function (e) {
                    $(this).css("display",'none');
                    console.log('hah');
                    $('#shopping_car_content').css('display','none');
                });
            }
            /*清除点单的所有信息*/
            $('.clear_shopping').on('click',function (e) {
                 storage.clear();
                 location.reload();
            });
        });

        /*点击购物车列表上的增减*/
        $('.reduceCar').on('click',function (e) {
            var nowIndex = $('.reduceCar').index(this);
            console.log(nowIndex);
            var reduceCarItemNum = parseInt($('.numberCar').eq(nowIndex).text());
            console.log(reduceCarItemNum);
            reduceCarItemNum--;
            arrObj.arr[nowIndex] = reduceCarItemNum;
            $('.now_count').eq(nowIndex).text(reduceCarItemNum);
            $('.numberCar').eq(nowIndex).text(reduceCarItemNum);
            var shoppingCarCount = parseInt($('.shopping_car_count').text());
            shoppingCarCount--;
            $('.shopping_car_count').text(shoppingCarCount);
            if(reduceCarItemNum <= 0){
                reduceCarItemNum = 0;
                $('.shopping_item').eq(nowIndex).css('display','none')
                $('.reduce').eq(nowIndex).css('visibility','hidden');
                $('.now_count').eq(nowIndex).css('visibility','hidden');
            }
            storage.setItem('arr',JSON.stringify(arrObj));

            /*点击弹出购物列表增减后的总价*/
            console.log();
            console.log();
            var nowAllPeaceNum = parseInt(nowAllPeace.text().substr(1))-
                parseInt(JSON.parse(storage.getItem('foodItem'+nowIndex)).peace.substr(1));
            if(nowAllPeaceNum < minMath){
                $('.lack').css('background-color','rgb(170,170,170)').text('还差$'+(minMath-nowAllPeaceNum));
            }
            if(nowAllPeaceNum <= 0){
                $('.shopping_car_count').css("display",'none').html(shoppingCarCount);
                $('.shopping_car_pic').attr("src",'./Pictures/Pic/click_food/no_shopping.png');
                storage.clear();
            }
            nowAllPeace.text('$'+nowAllPeaceNum);
        });
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    }

    //按顺序加载函数
    function init() {
<<<<<<< HEAD
        // choiceServer();//配送服务选择
        Collection();//点击收藏
        clickShare();//点击分享
=======
        Collection();//点击收藏
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
        ShowSafe();//点击优惠的时候可以全部显示出来
        switchTab();//点击每个模块的时候可以呈现对应的内容
        listenScrollBox();//监听页面容器的滚动变化
        ClickTabViewContent();//点左边切换到右边的商品详情
<<<<<<< HEAD
        ShoppingCar();//添加购物车
        commentModule();//评论模块
        BusinessTime();//商家模块的事件点击
=======
        addShoppingCar();//添加购物车
>>>>>>> 81e4d7ad427b5703767c90862a0d80ace6a01ae4
    }

    init();//启动函数

})();