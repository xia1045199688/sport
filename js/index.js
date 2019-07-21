$(function () {
    //轮播
    $(function () {
        var i=0;
        var t;
        $("#content_1_pic div").eq(0).show().siblings().hide();
        // $("#content_1_pic_tabs ul").show();
        $("#content_1_pic_tabs ul li").eq(0).css({
                "background":"url('img/index_icon_1.png') no-repeat center"
        });
        $("#content_1_pic_tabs ul li").click(function () {
            $(this).css({
                "background":"url('img/index_icon_1.png') no-repeat center"
            }).siblings().css({
                "background":"url('img/index_icon_2.png') no-repeat center"
            });
            i=$(this).index();
            $("#content_1_pic div").eq(i).fadeIn(500).siblings().fadeOut(500);
        });
        t = setInterval(play, 3000);
        function play() {
            i++;
            if(i>2){
                i=0;
            }
            $("#content_1_pic_tabs ul li").eq(i).css({
                "background":"url('img/index_icon_1.png') no-repeat center"
            }).siblings().css({
                "background":"url('img/index_icon_2.png') no-repeat center"
            })
            $("#content_1_pic div").eq(i).fadeIn(500).siblings().fadeOut(500);
        };
        $("#content_1_pic_tabs ul li").hover(
            //移进
            function () {
                clearInterval(t);
            },
            //鼠标移开
            function() {
                t = setInterval(play, 3000);
            }
        );
    });
    //课程切换
    $(function () {
        var i=0;
        var j=0;
        var t;
        var w=$("#content_2_main_box").width();
        $("#content_2_line ul li").eq(0).css({
            "background-color": "rgba(177,177,176,0.6)"
        });
        $("#content_2_line ul li").click(function () {
            $(this).css({
                "background-color": "rgba(177,177,176,0.6)"
            }).siblings().css({
                "background": "none"
            });
            i=$(this).index();
            $("#content_2_box_wrap").stop().animate({left:-i*w},500);
        });
        t = setInterval(play, 5000);
        function play() {
            if(i==3){
                i=0;
                $("#content_2_box_wrap").css({left:0});
            }
            i++;
            j++;
            if (j==3){
                j=0;
                $("#content_2_line ul li").eq(0).css({
                    "background-color": "rgba(177,177,176,0.6)"
                }).siblings().css({
                    "background": "none"
                })
            }
            $("#content_2_line ul li").eq(j).css({
                "background-color": "rgba(177,177,176,0.6)"
            }).siblings().css({
                "background": "none"
            })
            $("#content_2_box_wrap").stop().animate({left:-i*w},500);
        };
        $("#content_2_line ul li").hover(
            //移进
            function () {
                clearInterval(t);
            },
            //鼠标移开
            function() {
                t = setInterval(play, 3000);
            }
        );
    });
    //校区切换
    $(function () {
        var i=0;
        var j=0;
        var t;
        var w=$("#content_3_box").width();
        $("#content_3_line ul li").eq(0).css({
            "background-color": "rgba(255,255,255,0.5)"
        });
        $("#content_3_line ul li").click(function () {
            $(this).css({
                "background-color": "rgba(255,255,255,0.5)"
            }).siblings().css({
                "background": "none"
            });
            i=$(this).index();
            $("#content_3_box_wrap").stop().animate({left:-i*w},500);
        });
        t = setInterval(play, 5000);
        function play() {
            if(i==3){
                i=0;
                $("#content_3_box_wrap").css({left:0});
            }
            i++;
            j++;
            if (j==3){
                j=0;
                $("#content_3_line ul li").eq(0).css({
                    "background-color": "rgba(255,255,255,0.5)"
                }).siblings().css({
                    "background": "none"
                })
            }
            $("#content_3_line ul li").eq(j).css({
                "background-color": "rgba(255,255,255,0.5)"
            }).siblings().css({
                "background": "none"
            })
            $("#content_3_box_wrap").stop().animate({left:-i*w},500);
        };
        $("#content_3_line ul li").hover(
            //移进
            function () {
                clearInterval(t);
            },
            //鼠标移开
            function() {
                t = setInterval(play, 3000);
            }
        );
    })
});