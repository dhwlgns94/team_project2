$(document).ready(function(){
    // 문서준비이벤트시작
$(".depth2_bg").hide();
$(".depth2").hide();

$(".depth2_bg").mouseover(function(){
    $(this).stop();
    $(".depth2").stop();
});
$(".depth2_bg").mouseleave(function(){
    $(".depth2, .depth2_bg").stop().slideUp();
});


$("#header .gnb li").mouseover(function(){
    $("#header .logo").css({"border-bottom-color":"rgba(0,0,0,0)"});
    $(".depth2, .depth2_bg").stop().slideDown();
});
$("#header .gnb li").mouseleave(function(){
    $("#header .logo").css({"border-bottom-color":"#0070C0"});
    $(".depth2, .depth2_bg").stop().slideUp();
});


$(".depth2_con").hide();

$("#header .gnb li:nth-child(1)").mouseover(function(){
    $(".gnb_1").show().siblings().hide();
});
$("#header .gnb li:nth-child(1)").mouseleave(function(){
    $(".gnb_1").hide();
});

$("#header .gnb li:nth-child(2)").mouseover(function(){
    $(".gnb_2").show().siblings().hide();
});
$("#header .gnb li:nth-child(2)").mouseleave(function(){
    $(".gnb_2").hide();
});

$("#header .gnb li:nth-child(3)").mouseover(function(){
    $(".gnb_3").show().siblings().hide();
});
$("#header .gnb li:nth-child(3)").mouseleave(function(){
    $(".gnb_3").hide();
});

$("#header .gnb li:nth-child(4)").mouseover(function(){
    $(".gnb_4").show().siblings().hide();
});
$("#header .gnb li:nth-child(4)").mouseleave(function(){
    $(".gnb_4").hide();
});





// 문서준비이벤트종료
});
// 문서준비이벤트종료
