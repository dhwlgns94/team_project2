$(document).ready(function(){
    // 문서준비이벤트시작



    $(".howcome_tab > li:nth-child(1)").addClass("on");
    $(".gang_box").addClass("on");

    $(".howcome_tab > li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".tab_1").click(function(){
        $(".gang_box").addClass("on").siblings().removeClass("on");
    });
    $(".tab_2").click(function(){
        $(".singi_box").addClass("on").siblings().removeClass("on");
    });



// 문서준비이벤트종료
});
// 문서준비이벤트종료
