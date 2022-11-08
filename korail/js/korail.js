// nav
$(function () {
  $("#menu").children("div").hover(function () {
    $(this).toggleClass('on');
    $(this).children("ul").toggleClass('on');
  });
});

// ticket
$(function () {
  $(".sec01 .inner .ticket").children("li").click(function () {
    $(".sec01 .inner .ticket li").children("h5").removeClass('on');;
    $(this).children("h5").toggleClass('on');
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

  //sec05 Notice
  $(function () {
    $(".sec05 .Notice .tab li:eq(0)").click(function () {
      $(".sec05 .Notice .tab li h5").removeClass('on');
      $(this).children("h5").toggleClass('on');
      $(".sec05 .Notice .content div").removeClass('on');
      $(".sec05 .Notice .content .Notice01").toggleClass('on');
    });
    $(".sec05 .Notice .tab li:eq(1)").click(function () {
      $(".sec05 .Notice .tab li h5").removeClass('on');
      $(this).children("h5").toggleClass('on');
      $(".sec05 .Notice .content div").removeClass('on');
      $(".sec05 .Notice .content .Notice02").toggleClass('on');
    });
    $(".sec05 .Notice .tab li:eq(2)").click(function () {
      $(".sec05 .Notice .tab li h5").removeClass('on');
      $(this).children("h5").toggleClass('on');
      $(".sec05 .Notice .content div").removeClass('on');
      $(".sec05 .Notice .content .Notice03").toggleClass('on');
    });
  });