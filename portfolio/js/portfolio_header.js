$(function(){
    $("header .inner ul li").mouseenter(function(){
        $(this).children("div").addClass("on");
        $(this).children("a").css("color","#fff");
    });
    $("header .inner ul li").mouseleave(function(){
        $(this).children("div").removeClass("on");
        $(this).children("a").css("color","#000");
    });
});