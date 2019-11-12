/*global $*/
$('document').ready(function () {
    'use strict';
    // Toggel User Form
    $('.toggle-user-form').click(function () {
        event.stopPropagation();
        $('.user-form').fadeToggle();
    });
    
   /* ------ 
   
   // Categories Menu
    $('.categories-menu').click(function () {
        event.stopPropagation();
        $('.drobdwon').fadeToggle();
    }); */
});