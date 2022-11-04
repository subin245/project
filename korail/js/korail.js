// nav
$(function () {
  $("#menu").children("div").hover(function () {
    $(this).toggleClass('on');
    $(this).children("ul").toggleClass('on');
  });
});

// sec01 이벤트 베너
var swiper = new Swiper(".mySwiper01", {
    slidesPerView: 1,
    spaceBetween: 0,
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

// sec02 관광열차
  var swiper = new Swiper(".mySwiper02", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// sec03 자유여행
  var swiper = new Swiper(".mySwiper03", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });