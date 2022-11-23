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

    // $('.txt a').click(function(e){
    //     var projectname = $(this).attr('class')
    //     var secHeight = $(".sec").height()
    //     var gotoProject = $('#'+ projectname).offset().top
    //     console.log(gotoProject)

    //     $("#content").animate({
    //         scrollTop: gotoProject
    //     }, 1000);
    //     e.preventDefault()
    // });

});










$("#content").scroll(function(){
    if ($(this).scrollTop() >= 5280 && $(this).scrollTop() < 7392){
        $("header .inner").addClass("wh");
    } else{
        $("header .inner").removeClass("wh");
    }
    var scrollValue = $("#content").scrollTop(); 
    console.log(scrollValue); 

});


// function vh(v) {
//     var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     return (v * h) / 100;
// }
//   $(function() {
//     $("#content").on("scroll", function() {
//         if($("#content").scrollTop() > vh(470) && $("#content").scrollTop() < vh(700)) {
//             $("header .inner").addClass("wh");
//         } else {
//             $("header .inner").removeClass("wh");
//         }
//     });
// });
