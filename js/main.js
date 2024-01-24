$(document).ready(function () {
    // 문서준비이벤트시작

    const slide3 = new Swiper(".slide3", {
        speed: 1500, 
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
          },
    
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1490 && $(this).scrollTop() < 2616) {
            $(".vision_icon > img").addClass("on");
            $(".vision_icon > img").removeClass("off");


            $(".icon_3things img").addClass("on");
            $(".icon_3things img").removeClass("off");
        }
        else {
            $(".vision_icon > img").removeClass("on");
            $(".vision_icon > img").addClass("off");

            $(".icon_3things img").removeClass("on");
            $(".icon_3things img").addClass("off");
        }


        if ($(this).scrollTop() > 2400 && $(this).scrollTop() < 5727) {
            $(".products_right").fadeIn();
        }
        else {
            $(".products_right").fadeOut();

        }
        // 첫번째탭메뉴
        if ($(this).scrollTop() > 2400 && $(this).scrollTop() < 3161) {
            $(".products_right li:nth-child(1)").addClass("on");
            $(".products_right li:nth-child(1) .products_ball").addClass("on");
        }
        else {
            $(".products_right li:nth-child(1)").removeClass("on");
            $(".products_right li:nth-child(1) .products_ball").removeClass("on");


        }
        //두번쩨탭메뉴
        if ($(this).scrollTop() >= 3161 && $(this).scrollTop() < 4252) {
            $(".products_right li:nth-child(2)").addClass("on");
            $(".products_right li:nth-child(2) .products_ball").addClass("on");

        }
        else {
            $(".products_right li:nth-child(2)").removeClass("on");
            $(".products_right li:nth-child(2) .products_ball").removeClass("on");


        }

        //세번째텝메뉴
        if ($(this).scrollTop() >= 4252) //&& $(this).scrollTop() < 4252)
        {
            $(".products_right li:nth-child(3)").addClass("on");
            $(".products_right li:nth-child(3) .products_ball").addClass("on");

        }
        else {
            $(".products_right li:nth-child(3)").removeClass("on");
            $(".products_right li:nth-child(3) .products_ball").removeClass("on");

        }



        // 그래프 효과
        if ($(this).scrollTop() >= 6911) //&& $(this).scrollTop() < 8300)
        {
            $(".wave_1").addClass("on");
            $(".wave_1").removeClass("off");
            $(".wave_2").addClass("on");
            $(".wave_2").removeClass("off");
            $(".wave_3").addClass("on");
            $(".wave_3").removeClass("off");

            $(".right_chart li:nth-child(1) div").addClass("on");
            $(".right_chart li:nth-child(2) div").addClass("on");
            $(".right_chart li:nth-child(3) div").addClass("on");
            $(".right_chart li:nth-child(1) div").removeClass("off");
            $(".right_chart li:nth-child(2) div").removeClass("off");
            $(".right_chart li:nth-child(3) div").removeClass("off");
        }
        else {
            $(".wave_1").removeClass("on");
            $(".wave_1").addClass("off");
            $(".wave_2").removeClass("on");
            $(".wave_2").addClass("off");
            $(".wave_3").removeClass("on");
            $(".wave_3").addClass("off");

            $(".right_chart li:nth-child(1) div").removeClass("on");
            $(".right_chart li:nth-child(2) div").removeClass("on");
            $(".right_chart li:nth-child(3) div").removeClass("on");
            $(".right_chart li:nth-child(1) div").addClass("off");
            $(".right_chart li:nth-child(2) div").addClass("off");
            $(".right_chart li:nth-child(3) div").addClass("off");


        }


        if ($(this).scrollTop() >= 4252 && $(this).scrollTop() >= 4300) //&& $(this).scrollTop() < 4252)
        {




        //     var memberCountConTxt= 9931;
  
        //     $({ val : 0 }).animate({ val : memberCountConTxt }, {
        //      duration: 2000,
        //     step: function() {
        //       var num = numberWithCommas(Math.floor(this.val));
        //       $(".memberCountCon").text(num);
        //     },
        //     complete: function() {
        //       var num = numberWithCommas(Math.floor(this.val));
        //       $(".memberCountCon").text(num);
        //     }
        //   });
          
        //   //3자리마다 , 찍기
        //   function numberWithCommas(x) {
        //       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //   }



    

            // // 1num
            // var memberCountConTxt = 9931;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 2000,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_1").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_1").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }

            // var memberCountConTxt = 10083;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 2000,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_2").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_2").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }
            // var memberCountConTxt = 11968;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 2500,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_3").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".left_num_3").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }


        }

        // cost

            // // 1num
            // var memberCountConTxt = 11967820000;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 1000,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_1").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_1").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }




            // var memberCountConTxt = 4741690000;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 1500,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_2").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_2").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }



            // var memberCountConTxt = 400080000;

            // $({ val: 0 }).animate({ val: memberCountConTxt }, {
            //     duration: 2000,
            //     step: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_3").text(num);
            //     },
            //     complete: function () {
            //         var num = numberWithCommas(Math.floor(this.val));
            //         $(".cost_num_3").text(num);
            //     }
            // });

            // //3자리마다 , 찍기
            // function numberWithCommas(x) {
            //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // }
 
 
        
    });


    $('.products_right').hide();
    $('.products_left div').hide();


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




    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1000 && $(this).scrollTop() <= 9300) {
    //       $(".gobottom").fadeIn("slow");
    //     } else {
    //       $(".gobottom").fadeOut("slow");

    //     };

    //     if ($(this).scrollTop() > 6420 && $(this).scrollTop() <= 9662) {
    //       $(".gobottom").css( "color", "#ffffff" );
    //       $('.gobottom').mouseenter(function(){
    //         $(this).css("background-color","#E7D264");
    //         $(this).css("color" , "#000000");

    //       });
    //       $('.gobottom').mouseleave(function(){
    //         $(this).css('background-color','rgba(0,0,0,0)');
    //         $(this).css("color" , "#ffffff");

    //       });
    //     }


    //      else {
    //       $(".gobottom").css({ "color": "#333333" });
    //       $('.gobottom').mouseenter(function(){
    //         $(this).css("background-color","#00046E");
    //         $(this).css("color" , "#ffffff");

    //       });
    //       $('.gobottom').mouseleave(function(){
    //         $(this).css("background-color" , "rgba(255,255,255,0)");
    //         $(this).css("color" , "#333333");

    //       });
    //     };

    //   });


    // gsap.utils.toArray(".parallax_section").forEach((panel, i) => {
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         start: "top top",
    //         pin: true,
    //         pinSpacing: false
    //     });
    // });

    $(window).resize(function(){ 
        if (window.innerWidth <= 500) {  // 현재 띄워진 창 크기가 640px 이상일때
    
        /* 640 이상일때의 스크립트 */ 
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1000) {
               $(".vision_icon > img").addClass("on");
               $(".vision_icon > img").removeClass("off");
    
    
               $(".icon_3things img").addClass("on");
               $(".icon_3things img").removeClass("off");
            }
            else {
               $(".vision_icon > img").removeClass("on");
               $(".vision_icon > img").addClass("off");
    
               $(".icon_3things img").removeClass("on");
               $(".icon_3things img").addClass("off");
            }
        });
        } else {

                


        /* 640 이하일때의 스크립트 */ 
    
        }
    
    }).resize();

    let panels = gsap.utils.toArray(".parallax_section");

    let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
            pin: true,
            pinSpacing: false
        });
    });

    // ScrollTrigger.create({
    //     snap: {
    //         snapTo: (progress, self) => {
    //             let panelStarts = tops.map(st => st.start), 
    //             snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
    //             return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
    //         },
    //         duration: 0.5
    //     }
    // });
    



    

    // 문서준비이벤트종료
});
// 문서준비이벤트종료

// autobanner1
