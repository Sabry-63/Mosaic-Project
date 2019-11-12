/*global $, console */

$(function () {
    'use strict';
    // Icons Bars
    $('.icons-bar-toggel').click(function () {
        $('.icons-bar-toggel span').toggleClass('trns');
        $('nav').fadeToggle();
    });
    
    // Show Sctions
    $('.list li a').click(function (e) {
        e.preventDefault();
        $('.block').hide();
        $($(this).data('targets')).addClass('block').siblings().removeClass('block');
        $($(this).data('targets')).fadeIn('slow');
        if ($('nav').css('display') === 'block') {
            $('nav').fadeOut(300);
            $('.icons-bar-toggel span').removeClass('trns');
        }
    });
    
    
    // Show PopUp Fuinctios
    $('.porto .porto_box .overlay').click(function () {
        var src_imges = $(this).parent('.porto_box').children('img').attr('src'),
            links = $(this).parent('.porto_box').children('img').data('link');
        $('.porto .popup').fadeIn();
        $('.porto .popup .ineer-popup img').attr('src', src_imges);
        $('.ineer-popup .details').click(function () {
            $('.details').attr('href', links);
        });
    });
    
    // Hide PopUp Fuinctios
    $('.porto .popup').click(function () {
        $(this).fadeOut();
    });
    $('.porto .popup .ineer-popup').click(function (e) {
        e.stopPropagation();
    });
    $('.btn-close').click(function (e) {
        e.preventDefault();
        $('.porto .popup').fadeOut();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.porto .popup').fadeOut();
        }
    });
    
});
