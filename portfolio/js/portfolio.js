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

$("#content").scroll(function(){
    var scroll = $("#content").scrollTop();
    var scroll0 = (document.body.clientHeight);
    var scroll1 = (document.body.clientHeight)*2;
    var scroll2 = (document.body.clientHeight)*2.6;
    var scroll3 = (document.body.clientHeight)*2.9;
    var scroll4 = (document.body.clientHeight)*3.9;
    var scroll5 = (document.body.clientHeight)*4.9;
    var scroll6 = (document.body.clientHeight)*5.9;
    var scroll7 = (document.body.clientHeight)*6.9;

    // if (scroll > scroll4 && scroll < scroll7){
    //     $("header .inner").addClass("wh");
    // } else{
    //     $("header .inner").removeClass("wh");
    // }
    if (scroll >= 0 && scroll < scroll0){
        $("header .inner").removeClass("bl");
        $("header .inner").removeClass("or");
        $("header .inner").removeClass("gd");
        $("header .inner").addClass("wh");
    } else if (scroll > scroll2 && scroll < scroll4){
        $("header .inner").removeClass("wh");
        $("header .inner").removeClass("or");
        $("header .inner").removeClass("gd");
        $("header .inner").addClass("bl");
    } else if (scroll > scroll3 && scroll < scroll5){
        $("header .inner").removeClass("bl");
        $("header .inner").removeClass("wh");
        $("header .inner").removeClass("gd");
        $("header .inner").addClass("or");
    } else if (scroll > scroll4 && scroll < scroll6){
        $("header .inner").removeClass("bl");
        $("header .inner").removeClass("or");
        $("header .inner").removeClass("gd");
        $("header .inner").addClass("wh");
    } else if (scroll > scroll5 && scroll < scroll7){
        $("header .inner").removeClass("bl");
        $("header .inner").removeClass("or");
        $("header .inner").removeClass("wh");
        $("header .inner").addClass("gd");
    } else{
        $("header .inner").removeClass("bl");
        $("header .inner").removeClass("or");
        $("header .inner").removeClass("gd");
        $("header .inner").removeClass("wh");
    }

    // console.log(scroll); 
    // console.log(scroll0); 
    // console.log(scroll1); 
});