$(function(){
    $(".sec02 .card").mouseenter(function(){
        $(this).children(".txt").addClass("on");
    });
    $(".sec02 .card").mouseleave(function(){
        $(".sec02 .card .txt").removeClass("on");
    });
});