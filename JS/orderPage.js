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
    }

    //按顺序加载函数
    function init() {
        Collection();//点击收藏
        ShowSafe();//点击优惠的时候可以全部显示出来
        switchTab();//点击每个模块的时候可以呈现对应的内容
        listenScrollBox();//监听页面容器的滚动变化
        ClickTabViewContent();//点左边切换到右边的商品详情
        addShoppingCar();//添加购物车
    }

    init();//启动函数

})();