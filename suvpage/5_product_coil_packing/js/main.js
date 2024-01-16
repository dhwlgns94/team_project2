$(document).ready(function(){
    // 문서준비이벤트시작

    $('.coil_btn>div').mouseover(function(){
        let Num = $(this).index();
        $(".coil_img>div").eq(Num).siblings().css({"opacity" : "0.2"});
        $(".coil_img>div").eq(Num).css({"opacity" : "1"});
    });

    $('.coil_btn>div').mouseleave(function(){
        let Num = $(this).index();
        $(".coil_img>div").eq(Num).siblings().css({"opacity" : "1"});
        $(".coil_img>div").eq(Num).css({"opacity" : "1"});
    });
    
    $('.pd_option').hide();
    $('.pd_option:nth-child(1)').show();
    $('.coil_btn>div').click(function(){
        let Num = $(this).index();
        $(".product>.pd_option").eq(Num).siblings().hide();
        $(".product>.pd_option").eq(Num).show();
    });



// 문서준비이벤트종료
});
// 문서준비이벤트종료
