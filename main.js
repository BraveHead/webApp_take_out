/**
 * Created by 三页 on 2016/12/31.
 */
(function () {

    var div =  document.querySelector("div");

    var arr = ["blue","yellow",'red'];

    var num = 0;


    setInterval(function () {
        div.style.backgroundColor = arr[num];
        num++;
        if(num >= arr.length){
            num = 0;
        }

        console.log(num);

    },1000);

})();