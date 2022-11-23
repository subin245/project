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










// $("#content").scroll(function(){
//     if ($(this).scrollTop() >= 5280 && $(this).scrollTop() < 7392){
//         $("header .inner").addClass("wh");
//     } else{
//         $("header .inner").removeClass("wh");
//     }
//     var scrollValue = $("#content").scrollTop(); 
//     console.log(scrollValue); 
// });

$("#content").scroll(function(){
    var scroll = $("#content").scrollTop();
    var scroll4 = (document.body.clientHeight)*4.9;
    var scroll7 = (document.body.clientHeight)*7;

    if (scroll > scroll4 && scroll < scroll7){
        $("header .inner").addClass("wh");
    } else{
        $("header .inner").removeClass("wh");
    }

    console.log(scroll); 
    // console.log(scroll5); 
    console.log(scroll4); 
});

