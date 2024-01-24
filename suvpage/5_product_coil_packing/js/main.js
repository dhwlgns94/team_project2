$(document).ready(function(){
    // 문서준비이벤트시작

    $('.coil_btn>div').mouseover(function(){
        let Num = $(this).index();
        $(".coil_img>div").eq(Num).siblings().css({"opacity" : "0.2"});
        $(".coil_img>div").eq(Num).css({"opacity" : "1"});
        $(".order>.prd").eq(Num).fadeIn();
        $(".order>.prd").eq(Num).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.coil_btn>div').mouseleave(function(){
        let Num = $(this).index();
        $(".coil_img>div").eq(Num).siblings().css({"opacity" : "1"});
        $(".coil_img>div").eq(Num).css({"opacity" : "1"});
    });
    
    $('.order>.prd').hide();
    $('.order>.prd:nth-child(1)').show();
    $('.coil_btn>div').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        let Num = $(this).index();
        $(".order>.prd").eq(Num).siblings().hide();
        $(".order>.prd").eq(Num).fadeIn();
    });



// 문서준비이벤트종료
});
// 문서준비이벤트종료
