/*global $*/
$('document').ready(function () {
    'use strict';
    // Toggel User Form
    $('.toggle-user-form').click(function () {
        event.stopPropagation();
        $('.user-form').fadeToggle();
    });
    
    // Pop up cart
    $(".cart-popup").click(function (e) {
        e.stopPropagation();
        $('.pernt-popup').fadeToggle();
    });
    $('.close-popup-cart').click(function () {
        $('.pernt-popup').fadeOut();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.pernt-popup').fadeOut();
        }
    });
   /* ------ 
   
   // Categories Menu
    $('.categories-menu').click(function () {
        event.stopPropagation();
        $('.drobdwon').fadeToggle();
    }); */
});