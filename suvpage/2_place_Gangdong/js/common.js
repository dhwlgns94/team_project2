$(document).ready(function(){
    // 문서준비이벤트시작
$(".depth2_bg").hide();
$(".depth2").hide();
$("#header .gnb li").mouseover(function(){
    $("#header .logo").css({"border-bottom-color":"rgba(0,0,0,0)"});
    $(".depth2, .depth2_bg").stop().slideDown();
});
$("#header .gnb li").mouseleave(function(){
    $("#header .logo").css({"border-bottom-color":"#0070C0"});
    $(".depth2, .depth2_bg").stop().slideUp();

});


// 문서준비이벤트종료
});
// 문서준비이벤트종료
