/**
 * Created by 三页 on 2017/3/9.
 */
(function () {

    /*返回上一页*/
    function orderSettleBack() {
        $('.orderSettleBack').on('click',function (e) {
            window.history.back();
        })
    }

    /*选择地址*/
    function choiceAddress() {
        $(".xuanZhong").eq(0).css("display","inline-block");
        $(".addAddressItemContainer").on("click",function () {
            let nowIndex = $(".addAddressItemContainer").index(this);
            $(".xuanZhong").css("display",'none').eq(nowIndex).css("display","inline-block");
        })
    }

    let payTypeArr = ['../Pictures/Pic/orderSettle/noClickedType.png','../Pictures/Pic/orderSettle/clickedType.png'];
    let btnToggleArr = ['../Pictures/Pic/orderSettle/btn_toggle_n.png','../Pictures/Pic/orderSettle/btn_toggle_s.png'];

    /*选择不同的支付方式*/
    function choicePayType() {
        $('.payTypeClicked').on('click',function (e) {
            let nowIndex = $('.payTypeClicked').index(this);
            let picSrc = $('.payTypeClicked').eq(nowIndex).attr("src");
            if(picSrc == payTypeArr[0]){
                $('.payTypeClicked').attr("src",payTypeArr[0]).eq(nowIndex).attr("src",payTypeArr[1]);
            }else{
                $('.payTypeClicked').attr("src",payTypeArr[1]).eq(nowIndex).attr("src",payTypeArr[0]);
            }
        })
    }

    /*选择优惠开关*/
    function clickedToggle() {
        $('.buttonYuE').on('click',function (e) {
            if($(this).attr("src") == btnToggleArr[0]){
                $(this).attr("src",btnToggleArr[1]);
            }else{
                $(this).attr("src",btnToggleArr[0]);
            }
        })
    }

    /*点击添加优惠券*/

    function addCoupon() {
        /*点击添加优惠券*/
        $('.addNewAddress').on('click',function (e) {
            $(".addCouponAlert").css({
                'display':'block',
                'height':$(document).height() +'px'
            });

            $('.addCouponNumber').css({
                'top':($(document).height() - $('.addCouponNumber').height())/2 + 'px',
                'display':'block'
            });
        });
        /*确认和取消优惠券的添加*/
        $(".cancelCoupon").on("click",function (e) {
            $('.addCouponAlert').css("display",'none');
            $('.addCouponNumber').css('display','none');
        });
        $('.sureCoupon').on('click',function (e) {
            $('.addCouponAlert').css("display",'none');
            $('.addCouponNumber').css('display','none');
        });
        
        /*删除过期优惠券*/
        $('.deleteCoupon>img').on('click',function (e) {
            let index = $('.deleteCoupon>img').index(this);
            $('.overdueCoupon').eq(index).css('display','none');
        })

    }

    /*填写备注*/

    function FillRemarks() {
        $('.defaultChoice>span').on('click',function (e) {
            let nowIndex = $('.defaultChoice>span').index(this);
            let text =  $('.fillRemarksText').text();
            $('.fillRemarksText').text(text+" "+$('.defaultChoice>span').eq(nowIndex).text());
        });
       $('.closeFillRemarks').on('click',function (e) {
           window.history.back();
       })
    }

    function init() {
        orderSettleBack();//返回上一页
        choiceAddress();//选择地址
        choicePayType();//选择不同的支付方式
        clickedToggle();//选择优惠是否
        addCoupon(); //点击添加优惠券
        FillRemarks();//给商家填写备注
    }

    init();
})();