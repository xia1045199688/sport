$(function () {
    //管理切换
    $(function () {
        var i=0;
        $("#content_5_con_toLeft").click(function () {
            i--;
            if(i<0){
                i=0;
            }
            // console.log(i);
            $("#content_5_con_box_wrap").animate({left:-i*364},500);
        });
        $("#content_5_con_toRight").click(function () {
            i++;
            if(i>3){
                i=3;
            }
            // console.log(i);
            $("#content_5_con_box_wrap").animate({left:-i*364},500);
        });
    })
    //员工切换
    $(function () {
        var i=0;
        // var w=$("#content_5_staff_main").width();
        $("#content_5_staff_toLeft").click(function () {
            i--;
            if(i<0){
                i=0;
            }
            // console.log(i);
            $("#content_5_staff_wrap").animate({left:-i*176},500);
        });
        $("#content_5_staff_toRight").click(function () {
            i++;
            if(i>6){
                i=6;
            }
            // console.log(i);
            $("#content_5_staff_wrap").animate({left:-i*176},500);
        });
    })
})