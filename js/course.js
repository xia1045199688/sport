$(function () {
    //篮球课程
    $(function () {
        var i=0;
        var w=$("#content_3_con_right_pic").width();
        $("#content_3_background div").eq(0).show().siblings().hide();
        $("#content_3_con_right ul li").eq(0).css({
            "background": "url('img/course_icon_1.png') no-repeat center"
        });
        $("#content_3_con_right ul li").click(function () {
            $(this).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            i=$(this).index();
            $("#content_3_con_right_pic_box").stop().animate({left:-i*w},500);
            $("#content_3_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
        $("#content_3_toLeft").click(function () {
            i--;
            if(i<0){
                i=0;
            }
            // console.log(i);
            $("#content_3_con_right ul li").eq(i).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            $("#content_3_con_right_pic_box").animate({left:-i*w},500);
            $("#content_3_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
        $("#content_3_toRight").click(function () {
            i++;
            if(i>2){
                i=2;
            }
            // console.log(i);
            $("#content_3_con_right ul li").eq(i).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            $("#content_3_con_right_pic_box").animate({left:-i*w},500);
            $("#content_3_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
    })
    //羽毛球课程
    $(function () {
        var i=0;
        var w=$("#content_5_con_right_pic").width();
        $("#content_5_background div").eq(0).show().siblings().hide();
        $("#content_5_con_right ul li").eq(0).css({
            "background": "url('img/course_icon_1.png') no-repeat center"
        });
        $("#content_5_con_right ul li").click(function () {
            $(this).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            i=$(this).index();
            $("#content_5_con_right_pic_box").stop().animate({left:-i*w},500);
            $("#content_5_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
        $("#content_5_toLeft").click(function () {
            i--;
            if(i<0){
                i=0;
            }
            // console.log(i);
            $("#content_5_con_right ul li").eq(i).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            $("#content_5_con_right_pic_box").animate({left:-i*w},500);
            $("#content_5_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
        $("#content_5_toRight").click(function () {
            i++;
            if(i>2){
                i=2;
            }
            // console.log(i);
            $("#content_5_con_right ul li").eq(i).css({
                "background": "url('img/course_icon_1.png') no-repeat center"
            }).siblings().css({
                "background": "url('img/course_icon_2.png') no-repeat center"
            });
            $("#content_5_con_right_pic_box").animate({left:-i*w},500);
            $("#content_5_background div").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        });
    })
    //点击滚屏
    $(function () {
        var i=0;
        // var h=$(window).scrollTop();
        $("#content_2_title ul li").eq(0).css({
            "border": "1px solid #c01d2e"
        });
        $("#content_2_title ul li").click(function () {
            $(this).css({
                "border": "1px solid #c01d2e"
            }).siblings().css({
                "border": "1px solid #a1a0a0"
            });
        });
        $("#content_2_title ul li").eq(0).click(function () {
            $('body,html').animate({'scrollTop':945},300);
        });
        $("#content_2_title ul li").eq(1).click(function () {

            $('body,html').animate({'scrollTop':1933},300);
        });
        $("#content_2_title ul li").eq(2).click(function () {

            $('body,html').animate({'scrollTop':3963},300);
        });
        $("#content_2_title ul li").eq(3).click(function () {

            $('body,html').animate({'scrollTop':3253},300);
        });
        $(window).bind('scroll resize',function(){
            if($(window).scrollTop()<100){
                $("#content_2_title ul li").eq(0).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(1).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(2).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(3).css({
                    "border": "1px solid #a1a0a0"
                });
            }
            if($(window).scrollTop()>=100){
                $("#content_2_title ul li").eq(0).css({
                    "border": "1px solid #c01d2e"
                });
                $("#content_2_title ul li").eq(1).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(2).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(3).css({
                    "border": "1px solid #a1a0a0"
                });
            }
            if ($(window).scrollTop()>1433) {
                $("#content_2_title ul li").eq(0).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(1).css({
                    "border": "1px solid #c01d2e"
                });
                $("#content_2_title ul li").eq(2).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(3).css({
                    "border": "1px solid #a1a0a0"
                });
            }
            if ($(window).scrollTop()>=2823) {
                $("#content_2_title ul li").eq(0).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(1).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(2).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(3).css({
                    "border": "1px solid #c01d2e"
                });
            }
            if ($(window).scrollTop()>3500) {
                $("#content_2_title ul li").eq(0).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(1).css({
                    "border": "1px solid #a1a0a0"
                });
                $("#content_2_title ul li").eq(2).css({
                    "border": "1px solid #c01d2e"
                });
                $("#content_2_title ul li").eq(3).css({
                    "border": "1px solid #a1a0a0"
                });
            }

        });
    })
})