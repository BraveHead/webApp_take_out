/**
 * Created by 三页 on 2017/3/6.
 */
(function () {

    function skuFoodItemClick() {

        var storage = window.sessionStorage;
        var index = storage.getItem('nowIndex');
        console.log(index);

    }

    skuFoodItemClick();


})();