/**
 * Created by 三页 on 2017/3/9.
 */
(function () {

    /*返回上一页*/
    function backToPrev() {
        $('.backLoading').on('click',function () {
            window.history.back();
        })
    }

    /*忘记密码界面的选项切换*/
    function tabChange() {
        $('.contactTab>span').on('click',function () {
            let index = $('.contactTab>span').index(this);
            console.log(index);
            $('.contactTab>span').eq(index).addClass('collectTabShow').siblings().removeClass('collectTabShow');
            $('.forgetTab').eq(index).addClass("show").siblings(".forgetTab").removeClass('show');
        });
    }

    /*入口函数*/
    function init() {
        backToPrev();//返回上一页
        tabChange();//密码界面选项卡
    }

    init(); //执行函数
})();