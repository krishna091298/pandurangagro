// (function ($) {
//     "use strict";

    // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 40) {
    //         $('.navbar').addClass('sticky-top');
    //     } else {
    //         $('.navbar').removeClass('sticky-top');
    //     }

        // Trigger animations for elements when they are in the viewport
        // $('.scroll-animation').each(function () {
        //     if ($(this).offset().top - $(window).scrollTop() < $(window).height()) {
        //         $(this).addClass('visible');
        //     }
        // });

        // Back to top button visibility
    //     if ($(this).scrollTop() > 100) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });

    // Back to top functionality
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    //     return false;
    // });

    // Dropdown on mouse hover
    // $(document).ready(function () {
    //     function toggleNavbarMethod() {
    //         if ($(window).width() > 992) {
    //             $('.navbar .dropdown').on('mouseover', function () {
    //                 $('.dropdown-toggle', this).trigger('click');
    //             }).on('mouseout', function () {
    //                 $('.dropdown-toggle', this).trigger('click').blur();
    //             });
    //         } else {
    //             $('.navbar .dropdown').off('mouseover').off('mouseout');
    //         }
    //     }
    //     toggleNavbarMethod();
    //     $(window).resize(toggleNavbarMethod);
    // });

    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    // Product carousel
    // $(".product-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 45,
    //     dots: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     items: 1,
    //     dots: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    // });

    // Smooth scroll for anchor links
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         const target = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(target).offset().top
//         }, 1500, 'easeInOutExpo');
//     });

// })(jQuery);


(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }

        // Trigger animations for elements when they are in the viewport
        $('.home_imge2').each(function () {
            if ($(this).offset().top - $(window).scrollTop() < $(window).height()) {
                $(this).addClass('visible');
            }
        });

        // Scroll animations for other elements with the class 'scroll-animation'
        $('.scroll-animation').each(function () {
            if ($(this).offset().top - $(window).scrollTop() < $(window).height()) {
                $(this).addClass('visible');
            }
        });

        // Back to top button visibility
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Back to top functionality
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500, 'easeInOutExpo');
    });

})(jQuery);
