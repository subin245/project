$(function () {
    $("header .inner").children(".menubar").children("a").click(function(e) {
        $("header .inner").children().toggleClass('on');
        e.preventDefault()

    });

    $("header .inner > div:first-child").click(function() {
        if($(this).next(".Lmenu").hasClass('on')) {
            $("body div.sec .inner .info").addClass('move');
        } else {
            $(".sec .inner .info").removeClass('move');
        }
    });

});