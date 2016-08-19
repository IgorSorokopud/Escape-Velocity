jQuery(document).ready(function () {

    /*menu*/
    jQuery('li a[href=#active], .second,').hover(
        function () {
            jQuery('.second').show();
        }, function () {
            jQuery('.second').hide();
    });

    jQuery('li a[href=#active2], .third').hover(
        function () {
            jQuery('.third, .second').show();
    },
        function () {
            jQuery('.third').hide();
    });

    /*drop-down*/
    jQuery('#menu').toggle(
        function () {
            jQuery('#drop-down').show();
    },
        function () { 
            jQuery('#drop-down').hide();
    });

    jQuery(window).resize(function () {
        var width = jQuery(this).width();
        if (width >= 730){
                jQuery('#drop-down').hide();
        }
    });
});
