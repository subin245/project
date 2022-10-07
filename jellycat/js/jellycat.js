// Header
$(document).scroll(function() {
    var scroll = $(window).scrollTop();
      if (scroll > 300){
        $( "header" ).addClass( "hideBar" );
      }
      else if (scroll < 299){
        $( "header" ).removeClass( "hideBar" );
      }
  });

  


//about slide
$(function () {
    $(".about .next_b").click(function () {
        $(".cards div:first").insertAfter(".cards div:last");
    });

    $(".about .prev_b").click(function () {
        $(".cards div:last").insertBefore(".cards div:first");
    });
});

//about paging
$(function () {
    $(".about .cards div:first").show();
    $("ul.paging li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var imgIndex = $(this).index();
        $(".cards div").eq(imgIndex).stop(true).fadeIn().siblings().fadeOut();
    }).hover(function() {
        $(this).addClass("on").siblings().removeClass("on").end();
    });
});

//product slide button
$(function () {
    $(".bt .next_b").click(function () {
        $(".friends a:first").insertAfter(".friends a:last");
    });

    $(".bt .prev_b").click(function () {
        $(".friends a:last").insertBefore(".friends a:first");
    });
});

////////////////// product slide paging
$(function () {
    $(".friends a:first").show();
    $("ul.paging li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var imgIndex = $(this).index();
        $(".friends a").eq(imgIndex).stop(true).fadeIn().siblings().fadeOut();
    });
    $("ul.paging li").hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
    });
});

//footer family site menu
$(function () {
    $(".family_site a.m").click(function () {
        $(this).next().addBack().toggleClass('on').end()
            .find('.m, ul').removeClass('on').end()
            .parent().siblings().find('.m, ul').removeClass('on');
        return false;
    });

    if ($('.family_site a.m').hasClass('on')) {
        console.log('클래스 있음');
    } else {
        console.log('클래스 없음');
    }
});