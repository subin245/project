// nav
$(function () {
  $(".nav.n01 .inner .Lmenu .menu a").each(function() {
    let $1menuindex = $(this).index();
    let $1menu = $(".nav.n02 .inner .menu").children("div");
    $(this).click(function() {
      $(".nav.n02 .inner .menu").children("div").removeClass('on');
      $($1menu).eq($1menuindex).addClass('on').siblings().removeClass('on');
      if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        $($1menu).removeClass('on').children().removeClass('on');
    } else {
        $("nav").addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    }
  });
  });

  $('.nav.n02 .inner .menu div li.more').each(function() {
    let $2menuindex = $(this).index();
    let $2menu = $(this).parent("ul").next("div").children('.contentlist');
    $(this).click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $($2menu).eq($2menuindex).addClass('on').siblings().removeClass('on');
    });
  });
  $('.contentlist li a').click(function() {
      $(this).addClass('on').parent('li').siblings().children('a').removeClass('on');
  });
});

// side
$(function () {
  $("#Roffbt").click(function () {
    $("header .side .right.side").toggleClass('off');
  });
  $("#Loffbt").click(function () {
    $("header .side .left.side").toggleClass('off');
  });
});

// sec01 - ticket
$(function () {
  $(".sec01 .inner .ticket").children("li").click(function () {
    $(".sec01 .inner .ticket li").children("h5").removeClass('on');;
    $(this).children("h5").toggleClass('on');
  });
});

// sec01 - select
$(function () {
  $(".sec01 .inner .ticket .common").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".common").removeClass('hide')
  });
  $(".sec01 .inner .ticket .discount").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".discount").removeClass('hide')
  });
  $(".sec01 .inner .ticket .fourGp").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".fourGp").removeClass('hide')
  });
  $(".sec01 .inner .ticket .trip").click(function () {
    $(".sec01 .inner .select").children().addClass('hide'),
    $(".sec01 .inner .select").children(".trip").removeClass('hide')
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