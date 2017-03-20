Reveal.addEventListener('slidechanged', function(event) {
    if($(event.currentSlide).attr('data-background-iframe')) {
        $('.reveal > .backgrounds').css('z-index', 1);
    }
    else {
        $('.reveal > .backgrounds').css('z-index', 0);
    }
});