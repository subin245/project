function click() {return;}

$(function () {
    $("header .inner").children(".menubar").children("a").click(function() {
        $("header .inner").children().toggleClass('on');
    });

    $("header .inner div").click(function() {
        if($(this).next(".Lmenu").hasClass('on')) {
            $("body div.sec .inner .info").addClass('move');
        } else {
            $(".sec .inner .info").removeClass('move');
        }
    });
});