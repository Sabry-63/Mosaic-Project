/*global $*/
$("document").ready(function() {
    "use strict";
    // Toggel User Form
    $(".toggle-user-form").click(function() {
        event.stopPropagation();
        $(".user-form").fadeToggle();
    });

    // Pop up cart
    $(".cart-popup").click(function(e) {
        e.stopPropagation();
        $(".pernt-popup").fadeToggle();
    });
    $(".close-popup-cart").click(function() {
        $(".pernt-popup").fadeOut();
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $(".pernt-popup").fadeOut();
        }
    });
    
    // Pricing Slider
    $(".pric-menu").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        rtl: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //Testmonial said-testmonial
    $('.said-testmonial').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="slick_left fas fa-angle-right"></i>',
        nextArrow: '<i class="slick_right fas fa-angle-left"></i>',
        dots: false,
        rtl: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });



});
