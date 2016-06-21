jQuery(document).ready(function($) {
    $(window).resize(function(event) {
        $height = $(window).innerHeight() * 0.9;
        $(".mainFrame").css('height', $height);
    });
    $height = $(window).innerHeight() * 0.9;
    $(".mainFrame").css('height', $height);
    $(document).ready(function() {
        Materialize.updateTextFields();
    });

    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $(document).ready(function() {
        $('select').material_select();
    });


    $(".check").click(function(event) {
        $listening = parseInt($(".listening").val());
        $reading = parseInt($(".reading").val());
        $speaking = parseInt($(".speaking").val());
        $writing = parseInt($(".writing").val());
        $avarage = ($listening + $reading + $speaking + $writing) / 4;
        $point = $avarage - Math.floor($avarage);

        if ($(".reading").val() == 0 || $(".listening").val() == 0 || $(".writing").val() == 0 || $(".speaking").val() == 0) {
            $('#modal1').openModal();
        } else {
            if (typeof($("#test5").attr("checked")) == "string" && typeof($("#test6").attr("checked")) != "string") {
                if ($point == 0.5) {
                    $(".resultScore").text($avarage);
                } else if ($point < 0.5) {
                    $(".resultScore").text(Math.floor($avarage));
                } else {
                    $(".resultScore").text(Math.ceil($avarage));
                }
            } else if (typeof($("#test6").attr("checked")) == "string" && typeof($("#test5").attr("checked")) != "string") {
                if ($point == 0.5) {
                    $(".resultScore").text($avarage);
                } else if ($point < 0.5) {
                    $(".resultScore").text(Math.floor($avarage));
                } else {
                    $(".resultScore").text(Math.ceil($avarage));
                }

            } else { $('#modal2').openModal(); }
        }


    });

    $('.tooltipped').tooltip({ delay: 50 });
    $("#readingX").change(function(event) {

        $corrects = $(this).val();
        $resultReading = 0;

        if (typeof($("#test5").attr("checked")) == "string" && typeof($("#test6").attr("checked")) != "string") {
            if ($corrects >= 4 && $corrects <= 5) {
                $resultReading = 2.5;
            } else if ($corrects >= 6 && $corrects <= 7) {
                $resultReading = 3;
            } else if ($corrects >= 8 && $corrects <= 9) {
                $resultReading = 3.5;
            } else if ($corrects >= 10 && $corrects <= 12) {
                $resultReading = 4.0;
            } else if ($corrects >= 13 && $corrects <= 14) {
                $resultReading = 4.5;
            } else if ($corrects >= 15 && $corrects <= 18) {
                $resultReading = 5.0;
            } else if ($corrects >= 19 && $corrects <= 22) {
                $resultReading = 5.5;
            } else if ($corrects >= 23 && $corrects <= 26) {
                $resultReading = 6.0;
            } else if ($corrects >= 27 && $corrects <= 29) {
                $resultReading = 6.5;
            } else if ($corrects >= 30 && $corrects <= 32) {
                $resultReading = 7.0;
            } else if ($corrects >= 33 && $corrects <= 34) {
                $resultReading = 7.5;
            } else if ($corrects >= 35 && $corrects <= 36) {
                $resultReading = 8.0;
            } else if ($corrects >= 37 && $corrects <= 38) {
                $resultReading = 8.5;
            } else if ($corrects >= 39 && $corrects <= 40) {
                $resultReading = 9.0;
            }
        } else if (typeof($("#test6").attr("checked")) == "string" && typeof($("#test5").attr("checked")) != "string") {

            if ($corrects >= 6 && $corrects <= 8) {
                $resultReading = 2.5;
            } else if ($corrects >= 9 && $corrects <= 11) {
                $resultReading = 3;
            } else if ($corrects >= 12 && $corrects <= 14) {
                $resultReading = 3.5;
            } else if ($corrects >= 15 && $corrects <= 18) {
                $resultReading = 4.0;
            } else if ($corrects >= 19 && $corrects <= 22) {
                $resultReading = 4.5;
            } else if ($corrects >= 23 && $corrects <= 26) {
                $resultReading = 5.0;
            } else if ($corrects >= 27 && $corrects <= 29) {
                $resultReading = 5.5;
            } else if ($corrects >= 30 && $corrects <= 31) {
                $resultReading = 6.0;
            } else if ($corrects >= 32 && $corrects <= 33) {
                $resultReading = 6.5;
            } else if ($corrects >= 34 && $corrects <= 35) {
                $resultReading = 7.0;
            } else if ($corrects >= 36 && $corrects <= 36) {
                $resultReading = 7.5;
            } else if ($corrects >= 37 && $corrects <= 38) {
                $resultReading = 8.0;
            } else if ($corrects == 39) {
                $resultReading = 8.5;
            } else if ($corrects == 40) {
                $resultReading = 9.0;
            }
        }
        $(".readingScore").text($resultReading);
    });
    $clicked = 0;
    $clicked2 = 0;
    $("#test5").click(function(event) {
    	$resultReading=0;
        $(".readingScore").text("");
        $clicked++;
        if ($clicked % 2 == 0) {
            $(this).attr({
                'checked': ''
            });
            $("#test6").removeAttr('checked');
        } else {
            $(this).removeAttr('checked');
        }
    });
    $("#test6").click(function(event) {
    	$resultReading=0;
        $(".readingScore").text("");
        $clicked2++;
        if ($clicked2 % 2 == 0) {
            $(this).attr({
                'checked': ''
            });
            $("#test5").removeAttr('checked');
        } else {
            $(this).removeAttr('checked');
        }

    });

});
