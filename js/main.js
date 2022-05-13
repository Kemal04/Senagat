new Splide('#banner', {
    type: 'loop',
    arrows: false,
    
}).mount();

new Splide('#category', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    arrows: false,
    breakpoints:
    {
        991: { perPage: 4, gap: '1.5rem', },
        768: { perPage: 3, gap: '1.5rem', },
        575: { perPage: 2, gap: '1rem', },
    }
}).mount();

new Splide('#product-1', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints:
    {
        991: { perPage: 4, gap: '1.5rem', },
        768: { perPage: 3, gap: '1.5rem', },
        575: { perPage: 2, gap: '1rem', },
    }
}).mount();

new Splide('#product-2', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints:
    {
        991: { perPage: 4, gap: '1.5rem', },
        768: { perPage: 3, gap: '1.5rem', },
        575: { perPage: 2, gap: '1rem', },
    }
}).mount();

new Splide('#product-3', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints:
    {
        991: { perPage: 4, gap: '1.5rem', },
        768: { perPage: 3, gap: '1.5rem', },
        575: { perPage: 2, gap: '1rem', },
    }
}).mount();

new Splide('#image-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: false,
    breakpoints:
    {
        991: { perPage: 3, gap: '1.5rem', },
        768: { perPage: 3, gap: '1.5rem', },
        575: { perPage: 1, gap: '1rem', },
    }    
}).mount();    


new Splide('#slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,

}).mount();    

new Splide('#slider-blog', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,

}).mount();    

















// dropdown
$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function (e) {
        if ($(this).attr('href') == '#')
            e.preventDefault();
        if ($(this).next('.submenu').length) {
            $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.submenu').hide();
        })
    });
}