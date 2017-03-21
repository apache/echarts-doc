Reveal.addEventListener('slidechanged', function(event) {
    if($(event.currentSlide).attr('data-background-iframe') && $(event.currentSlide).hasClass('front')) {
        $('.reveal > .backgrounds').css('z-index', 1);
    }
    else {
        $('.reveal > .backgrounds').css('z-index', 0);
    }

    if ($(event.currentSlide).attr('data-background-opacity')) {
        $('.reveal > .backgrounds').css('opacity', $(event.currentSlide).attr('data-background-opacity'));
    }
    else {
        $('.reveal > .backgrounds').css('opacity', 1);
    }
});