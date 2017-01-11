(function () {

    var Reveal = window.Reveal;
    var indexOf = uncurry([].indexOf);
    var forEach = uncurry([].forEach);

    var CSS_FRAGMENT = 'fragment';
    var CSS_VISIBLE = 'visible';
    var ATTR_SRC = 'data-md2r-src';
    var ATTR_STYLE = 'data-md2r-style';

    Reveal.addEventListener('ready', function(event) {
        processIFrames(event.currentSlide, activeIFrame);
    });

    Reveal.addEventListener('slidechanged', function(event) {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        processIFrames(event.currentSlide, activeIFrame);
        processIFrames(event.previousSlide, inactiveIFrame);
    });

    Reveal.addEventListener('fragmentshown', function(event) {
        // event.fragment = the fragment DOM element
        // event.fragments = []
        event.fragments.forEach(function (fragment) {
            processIFrames(fragment, activeIFrame);
        })
    });

    Reveal.addEventListener('fragmenthidden', function(event) {
        // event.fragment = the fragment DOM element
        // event.fragments = []
        event.fragments.forEach(function (fragment) {
            processIFrames(fragment, inactiveIFrame);
        });
    });

    Reveal.addEventListener('overviewshown', function(event) {
    });

    Reveal.addEventListener('overviewhidden', function(event) {
    });

    function processIFrames(container, action) {
        if (!container) {
            return;
        }

        if (container.tagName.toLowerCase() === 'iframe') {
            action(container);
        }

        var iframes = container.querySelectorAll('iframe');
        forEach(iframes, function (iframe) {
            var ancestor = getAncestor(iframe, container, CSS_FRAGMENT);
            if (!ancestor || hasClass(ancestor, CSS_VISIBLE)) {
                action(iframe);
            }
        });
    }

    function activeIFrame(ifrEl) {
        var url = ifrEl.getAttribute(ATTR_SRC);
        if (url) {
            ifrEl.src = url;
        }
        var style = ifrEl.getAttribute(ATTR_STYLE);
        if (style) {
            ifrEl.setAttribute('style', style);
        }
    }

    function inactiveIFrame(ifrEl) {
        ifrEl.src = 'about:blank';
    }

    function uncurry(method) {
        return function () {
            return Function.call.apply(method, arguments);
        };
    }

    // Notice: do not check whether terminalAncestor has the className,
    // and do not return terminalAncestor.
    function getAncestor(el, terminalAncestor, className) {
        while (el && el !== terminalAncestor) {
            if (hasClass(el, className)) {
                return el;
            }
            el = el.parentNode;
        }
        return null;
    }

    function hasClass(el, className) {
        return indexOf(el.classList, className) >= 0;
    }

})();