'use strict'

$('.slider_item').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false
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


for(let i=0;i<10;i++)
{
    $($('.checkbox_label')[i]).click(function(){
        $($('.checkbox_label')[i]).toggleClass('active');
    });
};


$('.menu_burger').click(function(){
    $('.menu_burger').toggleClass('active');
    $('.header_nav').toggleClass('active');
});