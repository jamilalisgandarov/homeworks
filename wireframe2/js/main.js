jQuery(document).ready(function($) {
    $(window).scroll(function(event) {
        var y = $(window).scrollTop();
        if (y > 100) {
            $(".menu").css({
                "position": 'fixed',
                "background-color": '#ccc'
            })
        } else {
            $(".menu").css({
                "position": '',
                "background-color": ''
            })
        }

    });
});
