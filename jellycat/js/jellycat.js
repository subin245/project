// // Header
// $(document).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//         $("header").addClass("hideBar");
//     }
//     else if (scroll < 299) {
//         $("header").removeClass("hideBar");
//     }
// });

    // 메뉴버튼모양변경
  $(document).ready(function() {    
    $('.menuBt').click(function() {
        $('.menuBt').toggleClass('active');
        $('.menu').toggleClass('active');
    });
  });

// <-- Initialize Swiper -->

// about
var swiper = new Swiper(".mySwiper01", {
    speed: 800,
    parallax: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// product
var swiper = new Swiper(".mySwiper02", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        641: {
            slidesPerView: 3,
            spaceBetween: 5,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//footer family site menu
$(function () {
    $(".family_site a.m").click(function () {
        $(this).next().addBack().toggleClass('on').end()
            .find('.m, ul').removeClass('on').end()
            .parent().siblings().find('.m, ul').removeClass('on');
        return false;
    });

    $(".footer02 .pHide").click(function () {
        $(".footer02 p").next().addBack().toggleClass('on').end()
            .find(".footer02 p").removeClass('on').end()
            .parent().siblings().find(".footer02 p").removeClass('on');
        return false;
    });
});