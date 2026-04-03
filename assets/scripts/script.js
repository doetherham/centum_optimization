

$(function() {
    const $slider = $('.slider_list');
    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
        dots: false,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1100,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 1 }
            }
        ]
    });
});


flatpickr('#calendar-tomorrow', {
  "minDate": new Date().fp_incr(1)
});


