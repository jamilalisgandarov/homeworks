jQuery(document).ready(function() {
    // for (i = 0; i < $("li").length; i++) {
    //     $("li").eq(i).removeClass('first');
    //     $("li").eq(i + 1).removeClass('first1').addClass('first');
    //     $("li").eq(i + 2).removeClass('first2').addClass('first1');
    //     $("li").eq(i + 3).removeClass('first3').addClass('first2');
    //     $("li").eq(i + 4).removeClass('first4').addClass('first3');
    //     $("li").eq(i + 5).addClass('first3');
    // }
    var i = 0;
    $('.down').click(function() {

        $("li").eq(i).removeClass();
        $("li").eq(i + 1).removeClass().addClass('first');
        $("li").eq(i + 2).removeClass().addClass('first1');
        $("li").eq(i + 3).removeClass().addClass('first2');
        $("li").eq(i + 4).removeClass().addClass('first3');
        $("li").eq(i + 5).removeClass().addClass('first4');
        $("li").eq(i + 6).removeClass().addClass('first5');
        $("li").eq(i + 7).removeClass().addClass('first6');
        if (i + 7 == $("li").length) {
            i = -7;
        }
        i++;
    });
    $('.up').click(function() {
        i--;
        console.log(i);

        $("li").eq(i).removeClass();
        $("li").eq(i + 1).removeClass().addClass('first');
        $("li").eq(i + 2).removeClass().addClass('first1');
        $("li").eq(i + 3).removeClass().addClass('first2');
        $("li").eq(i + 4).removeClass().addClass('first3');
        $("li").eq(i + 5).removeClass().addClass('first4');
        $("li").eq(i + 6).removeClass().addClass('first5');
        $("li").eq(i + 7).removeClass().addClass('first6');
        if (i < 0) {
            i = $("li").length - 1;
        }

    });
});
