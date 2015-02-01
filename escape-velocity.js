jQuery(document).ready(function (){

    /*menu*/

    jQuery('.list').hide();
    jQuery('li a[href=#active], .second,').hover(function () {
        $('.second').show();
    },function () {
        jQuery('.second').hide();
    });

    jQuery('li a[href=#active2], .third').hover(function () {
        $('.third, .second').show();
    },function () {
        jQuery('.third').hide();
    });












});