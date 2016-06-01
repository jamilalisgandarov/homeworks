jQuery(document).ready(function($) {
    $(".overlay").mouseover(function(event) {
        $(".overlay").css({
            "opacity": '0.5'
        });
        $(".overlayedPicMain").css({
            "transform": "scale(1.3)"
        })
    });
    $(".overlay").mouseout(function(event) {
        $(".overlay").css({
            "opacity": '0'
        });
        $(".overlayedPicMain").css({
            "transform": "scale(1)"
        })
    });


    $(".overlay1").mouseover(function(event) {
        $(this).css({
            "opacity": '0.5'
        });
        $(this).siblings().css({
            "transform": "scale(1.3)"
        })
    });
    $(".overlay1").mouseout(function(event) {
        $(this).css({
            "opacity": '0'
        });
        $(this).siblings().css({
            "transform": "scale(1)"
        })
    });
    var myVid = $(".video");
    console.log(myVid.muted = true);
});
