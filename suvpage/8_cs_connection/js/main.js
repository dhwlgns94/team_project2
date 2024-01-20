$(document).ready(function(){
    // 문서준비이벤트시작


    $('.qna .a').hide();

    $('.qna dt').click(function(){
        $(this).next().slideDown().siblings(".a").slideUp();
        
    });

    

    
// 문서준비이벤트종료
});
// 문서준비이벤트종료
