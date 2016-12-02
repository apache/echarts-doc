$(document).ready(function () {
    // code highlighting
    $('pre code').addClass('.prettyprint');
    prettyPrint();

    // lazy loading iframe
    $(window).scroll(function () {
        $('iframe').each(function (id, iframe) {
            if (elementInViewport(iframe)) {
                $(iframe).attr('src', $(iframe).attr('data-src'));
            }
        });
    });
});

function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.top >= 0 && rect.left >= 0
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}
