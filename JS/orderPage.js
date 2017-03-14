/**
 * Created by 三页 on 2017/2/26.
 */
(function () {

    /*加载初始状态*/
    var shoppingContainer = document.getElementsByClassName('show_shopping_car_container');
    var shoppingBottom = document.getElementsByClassName('shopping_car_bottom');
    $('.show_shopping_car_container').css('height',document.body.offsetHeight +"px") ;
    var arrStat = ['Pictures/Pic/click_food/white_stat.png','Pictures/Pic/click_food/red_stat.png'];
    var backArr = ['Pictures/Pic/header_icon/back.png','Pictures/Pic/header_icon/back_gray.png'];
    var storage = window.sessionStorage;
    var foodCount = 0;
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
    }

    
    /*点击返回上一页*/
    $('.order_back').on('click',function (e) {
        window.history.back();
    });

    /*点击收藏*/
    function Collection() {

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



    /*运用swiper来把点菜，评价，商家的各个模块同个tab的切换来实现衔接*/

    function switchTab() {
        var mySwiper = new Swiper('.swiper-container',{
        });

        $('.module_list').click(function(){
            var listIndex = $(this).index();
            console.log(listIndex);
            $('.module_list_default').removeClass('showBottomRed');
            $('.module_list_default').eq(listIndex).addClass("showBottomRed");
            mySwiper.slideTo(listIndex, 1000, false);//切换到第listIndex个slide，速度为1秒
        });
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
       newOne[0].addEventListener('scroll',function (e) {
           newScrollTop = newOne[0].scrollTop;
           if(newScrollTop >= 20){
                $('.order_food_header').addClass('headerTransform');
                $('.order_back').attr('src',backArr[1]);
                $('.order_collection').attr('src',arrStat[1]);
                $('.order_header_message_container').addClass('headerTransform showTransformHidden');
                $('.businessItemName').css({'display':'block','color':'black'});
           }else{
               $('.order_food_header').removeClass("headerTransform");
               $('.order_back').attr('src',backArr[0]);
               $('.order_collection').attr('src',arrStat[0]);
               $('.order_header_message_container').removeClass('headerTransform showTransformHidden');
               $('.businessItemName').css({'display':'none','color':'black'});
           }
        })

    }


    /*获取各商品类型的点击切换效果并获取设置内容的高度*/   //切换的高度不对应,导致显示的view不一致
    function ClickTabViewContent() {
        window.onload = function () {

            var foodTypeName = document.getElementsByClassName('food_type_list_item');
            var foodName = document.querySelectorAll(".food_list_item");
            var foodNameContainer = document.querySelector('.food_list_item_container ul');
            var foodContainerTop = 0;
            var prev = 0;
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

                        console.log($('.food_list_item_ul').scrollTop());

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
    /**
     *
     * @param num number
     */
    $('.food_type_list_item').on('click',function (e) {
        $(this).addClass("showFoodListWhite").siblings().removeClass("showFoodListWhite");
    });


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
        * @count 当前的存储的数量
        */
       /*添加数据的方法*/
      /* function addCount(countName,index,count) {
           let foodItem = JSON.parse(storage.getItem("foodItem"+index));
           console.log(foodItem);
           if(foodItem.sku == "0"){
               count += 1;
               foodItem.count = count;
               storage.setItem('foodItem'+index, JSON.stringify(foodItem));
               let foodItemNext = JSON.parse(storage.getItem("foodItem"+index));
               $("."+countName).eq(index).text(foodItemNext.count);
               console.log(foodItemNext.count);
           }

       }*/

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
                }else{
                    $('.shopping_item').eq(i).css('display','none');
                }
            }

       }

        /*
        * @addElement 点击添加事件的节点className
        * @reduceElement 该节点边上的减少按钮的className
        */
       /*添加方法*/
      /* function addFoodCount(addElement,reduceElement) {

           let nowIndex = $('.'+ "add_count").index(this);
           console.log(nowIndex);
           let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
           let nowCount = foodItem.count;
           if(foodItem.sku == "0"){
               nowCount += 1;
               foodItem.count = nowCount;
               storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
               let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
               console.log(foodItemNext.count);
               $('.now_count').eq(nowIndex).text(foodItemNext.count);
               buttonShowOrHidden(reduceElement,addElement,nowIndex);

               ShoppingListItemShowOrHidden(nowIndex);
           }else{

           }
           console.log('点击添加ok');
       }*/
       /*
       * @reduceElement 减少按钮的className
       * */
       /*减少方法*/
       /*function reduceFoodCount(reduceElement) {
           let nowIndex = $('.'+ reduceElement).index();
           let foodItem = JSON.parse(storage.getItem("foodItem"+nowIndex));
           let nowCount = foodItem.count;

           nowCount -= 1;
           foodItem.count = nowCount;
           storage.setItem('foodItem'+nowIndex, JSON.stringify(foodItem));
           let foodItemNext = JSON.parse(storage.getItem('foodItem'+nowIndex));
           $('.now_count').eq(nowIndex).text(foodItemNext.count);
           console.log(foodItemNext.count);
           buttonShowOrHidden(reduceElement,'now_count',nowIndex);
           ShoppingListItemShowOrHidden(nowIndex);
           console.log('点击减少ok');

       }*/

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

               /*点击取消，不保存sku选项*/
               $('.timeHeaderBackMessage').on('click',function () {
                   $('.skuFoodHtml').css('display','none');
                   ShoppingBill();  //购物车总价与数量
               });

               /*点击确认，并保存sku的选择*/
                $('.sure').one('click',function () {
                    let skuFoodCount = parseInt($('.skuFoodCount').text());
                    foodItem.count = skuFoodCount;
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
               $('.shopping_car_pic').attr('src','./Pictures/Pic/click_food/shoppingCar.png')
           }else{
               billPeace = 0;
               $('.shopping_car_pic').attr('src','./Pictures/Pic/click_food/no_shopping.png')
           }
           $('.altogether').text("$"+ billPeace);
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

    /*商家模块的事件*/
    function BusinessTime() {
        var storage = window.sessionStorage;
        $('.peisong').on('click',function () {
            storage.setItem("timeNum",1);
        });
        $('.yinye').on('click',function () {
            storage.setItem('timeNum',0);
        })
    }

    //按顺序加载函数
    function init() {
        // choiceServer();//配送服务选择
        Collection();//点击收藏
        ShowSafe();//点击优惠的时候可以全部显示出来
        switchTab();//点击每个模块的时候可以呈现对应的内容
        listenScrollBox();//监听页面容器的滚动变化
        ClickTabViewContent();//点左边切换到右边的商品详情
        ShoppingCar();//添加购物车
        BusinessTime();//商家模块的事件点击
    }

    init();//启动函数

})();