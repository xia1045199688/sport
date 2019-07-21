$(function () {
    //宁波
    $("#content_1_con_site_1 div").click(function () {
        $("#content_1_con_site_1").toggleClass("content-1-con-site-1-toggle");
        $("#content_1_con_site_1_text").slideToggle("slow");
    });
    $("#content_1_con_site_2 div").click(function () {
        $("#content_1_con_site_2").toggleClass("content-1-con-site-2-toggle");
        $("#content_1_con_site_2_text").slideToggle("slow");
    });
    $("#content_1_con_site_3 div").click(function () {
        $("#content_1_con_site_3").toggleClass("content-1-con-site-3-toggle");
        $("#content_1_con_site_3_text").slideToggle("slow");
    });
    $("#content_1_con_site_3 div").click(function () {
        $("#content_1_toggle").slideToggle("slow");
    });
});