$(document).ready(function(){
    // 문서준비이벤트시작



$(".tabs li:nth-child(1)").click(function(){
  $(".flex_1").fadeIn();
  $(".flex_2").fadeOut();


});
$(".tabs li:nth-child(2)").click(function(){
  $(".flex_2").fadeIn();
  $(".flex_1").fadeOut();

});

$(".flex_2").hide();
// 문서준비이벤트종료
});
// 문서준비이벤트종료
