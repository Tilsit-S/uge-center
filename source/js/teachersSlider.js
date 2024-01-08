$(document).ready(function(){
    $('.teachers__slider').slick({
        arrows: false,
        dots: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    );
});