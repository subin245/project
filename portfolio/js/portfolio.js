function click() {return;}

$(function () {
    $("header .inner").children(".menubar").children("a").click(function() {
        $("header .inner .Mmenu").toggleClass('on');
        $("header .inner .Smenu").toggleClass('on');
        $("header .inner .Lmenu").toggleClass('on').end();
    });

    $("header .inner div").click(function() {
        if($(this).next(".Lmenu").hasClass('on')) {
            $("body div.sec .inner .info").addClass('move');
        } else {
            $(".sec .inner .info").removeClass('move');
        }
    });
});