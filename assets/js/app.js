$(function() {

    let header = $('#header'),
    introH = $('#intro').innerHeight(),
    scroll = $(window).scrollTop();

    /* Fixing header */

    checkScroll(scroll);

    $(window).on('scroll', function() {

        scroll = $(this).scrollTop();
        checkScroll(scroll);

    });

    function checkScroll(scroll) {

        if (scroll >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

    }

    /* smooth sliding */

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let $this = $(this),
        blockId = $this.data('scroll'),
        blockOfSet = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOfSet
        }, 1000)
    });

    /* burger menu - for phones*/

    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('active');

    });

    /* accordion collapse */

    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();

        let $this = $(this),
        blockId = $this.data('collapse');

        $this.toggleClass('active');


    });

    /* slider-slick.js */

    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});