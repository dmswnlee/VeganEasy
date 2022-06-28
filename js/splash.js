$(document).ready(function() {

    $(".logo").addClass("on");
    $(".vegan").addClass("on");

    setTimeout(function(){
        $(".splash").fadeOut(500);
        }, 3000 );

    setTimeout(function(){
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)

    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }
    },4000);

    setTimeout(function(){
            $(".loader-wrapper").fadeOut(500);
            $(".loader").fadeOut(500);
        },7000);
    
    
    setTimeout(function(){
        location.href = "01_login.html";
    },7000);

    
});