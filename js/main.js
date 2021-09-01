$('.slider_item').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
});

$('.work_slider_item').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.work_prev'),
    nextArrow: $('.work_next'),
    speed: 1000
});

$('.partners_items').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow: $('.partners_arrow_prev'),
    nextArrow: $('.partners_arrow_next')
});