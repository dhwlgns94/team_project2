$(document).ready(function(){
    // 문서준비이벤트시작
$(".sec_3 .inner .list").addClass("off");


$('.sti > li:nth-child(1)').click(function(){
    $("#sec_3 .inner .list:nth-child(1)").removeClass("off").siblings().addClass("off");
});
$('.sti > li:nth-child(2)').click(function(){
    $("#sec_3 .inner .list:nth-child(2)").removeClass("off").siblings().addClass("off");
});
$('.sti > li:nth-child(3)').click(function(){
    $("#sec_3 .inner .list:nth-child(3)").removeClass("off").siblings().addClass("off");
});


    
// 문서준비이벤트종료
});
// 문서준비이벤트종료
