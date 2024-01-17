$(document).ready(function(){
    // 문서준비이벤트시작
    $('.product').hide();
    $('.product:nth-child(1)').show();
    $('.tab_btn').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        let Num = $(this).index();
        $(".prd>.product").eq(Num).siblings().hide();
        $(".prd>.product").eq(Num).fadeIn();
    });


    
// 문서준비이벤트종료
});
// 문서준비이벤트종료
