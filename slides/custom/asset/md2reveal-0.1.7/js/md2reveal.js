(function () {

    var Reveal = window.Reveal;
    var indexOf = uncurry([].indexOf);
    var forEach = uncurry([].forEach);

    var CSS_FRAGMENT = 'fragment';
    var CSS_VISIBLE = 'visible';
    var ATTR_SRC = 'data-md2r-src';
    var ATTR_STYLE = 'data-md2r-style';
    var ATTR_FRAGMENT_STACK = 'data-md2r-fragment-stack';
    var ATTR_FRAGMENT_INDEX = 'data-fragment-index';
    var ATTR_FRAGMENT_PARAM = 'data-fragment-param';
    var ATTR_LAST_SRC_INACTIVE = 'data-last-src-inactive';
    var HASH_MD2_FRAGMENT = '_md2r_fragment_';
    var ABOUT_BLANK = 'about:blank';

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
            var ref = getRefFragment(fragment);
            if (ref) {
                pushFragmentStack(ref.targetFragment, ref);
                processIFrames(ref.targetFragment, stepInfoIFrame, ref);
            }
            else {
                var fragmentInfo = {
                    fragmentIndex: getFragmentIndex(fragment),
                    fragmentParam: getFragmentParam(fragment)
                };
                pushFragmentStack(fragment, fragmentInfo);
                processIFrames(fragment, activeIFrame, fragmentInfo);
            }
        });
    });

    Reveal.addEventListener('fragmenthidden', function(event) {
        // event.fragment = the fragment DOM element
        // event.fragments = []
        event.fragments.forEach(function (fragment) {
            var ref = getRefFragment(fragment);
            if (ref) {
                popFragmentStack(ref.targetFragment);
                var last = getFragmentStackLast(ref.targetFragment);
                last && processIFrames(ref.targetFragment, stepInfoIFrame, last);
            }
            else {
                popFragmentStack(fragment);
                processIFrames(fragment, inactiveIFrame);
            }
        });
    });

    Reveal.addEventListener('overviewshown', function(event) {
    });

    Reveal.addEventListener('overviewhidden', function(event) {
    });

    function processIFrames(container, action, actionArg) {
        if (!container) {
            return;
        }

        if (container.tagName.toLowerCase() === 'iframe') {
            action(container, actionArg);
            return;
        }

        var iframes = container.querySelectorAll('iframe');
        forEach(iframes, function (iframe) {
            var ancestor = getAncestor(iframe, container, CSS_FRAGMENT);
            if (!ancestor || hasClass(ancestor, CSS_VISIBLE)) {
                action(iframe, actionArg);
            }
        });
    }

    function getRefFragment(currFragment) {
        var refId = currFragment.getAttribute('data-fragment-ref-id');
        if (refId) {
            return {
                fragmentIndex: getFragmentIndex(currFragment),
                fragmentParam: getFragmentParam(currFragment),
                targetFragment: document.getElementById(refId)
            };
        }
    }

    function getFragmentIndex(fragment) {
        return fragment.getAttribute(ATTR_FRAGMENT_INDEX);
    }

    function getFragmentParam(fragment) {
        return fragment.getAttribute(ATTR_FRAGMENT_PARAM) || '';
    }

    function activeIFrame(ifrEl, fragmentInfo) {
        var url = ifrEl.getAttribute(ATTR_LAST_SRC_INACTIVE);
        ifrEl.setAttribute(ATTR_LAST_SRC_INACTIVE, '');
        stepInfoIFrame(ifrEl, fragmentInfo, url);

        var style = ifrEl.getAttribute(ATTR_STYLE);
        if (style) {
            ifrEl.setAttribute('style', style);
        }
    }

    function inactiveIFrame(ifrEl) {
        if (ifrEl.src && ifrEl.src !== ABOUT_BLANK) {
            ifrEl.setAttribute(ATTR_LAST_SRC_INACTIVE, ifrEl.src);
        }
        ifrEl.src = ABOUT_BLANK;
    }

    function pushFragmentStack(fragment, fragmentInfo) {
        var fragmentStack = getFragmentStack(fragment);
        fragmentStack.push(fragmentInfo.fragmentIndex + ':' + fragmentInfo.fragmentParam);
        setFragmentStack(fragment, fragmentStack);
    }

    function popFragmentStack(fragment) {
        var fragmentStack = getFragmentStack(fragment);
        fragmentStack.pop();
        setFragmentStack(fragment, fragmentStack);
    }

    function getFragmentStack(fragment) {
        var str = fragment.getAttribute(ATTR_FRAGMENT_STACK);
        return str ? str.split('_') : [];
    }

    function setFragmentStack(fragment, fragmentStack) {
        fragment.setAttribute(ATTR_FRAGMENT_STACK, fragmentStack.join('_'));
    }

    function getFragmentStackLast(fragment) {
        var fragmentStack = getFragmentStack(fragment);
        if (fragmentStack.length) {
            var last = fragmentStack[fragmentStack.length - 1].split(':');
            return {
                fragmentIndex: last[0],
                fragmentParam: last[1] || ''
            };
        }
    }

    function stepInfoIFrame(ifrEl, fragmentInfo, url) {
        if (!url) {
            url = ifrEl.getAttribute(ATTR_SRC);
        }
        if (!url) {
            return;
        }

        if (url.indexOf('#') < 0) {
            url += '#';
        }

        if (fragmentInfo) {
            var ifrFlag = HASH_MD2_FRAGMENT + '=' + fragmentInfo.fragmentParam;
            if (url.indexOf(HASH_MD2_FRAGMENT + '=') < 0) {
                url += ifrFlag;
            }
            else {
                url.replace(/_md2r_fragment=\d+/, ifrFlag);
            }
        }

        ifrEl.src = url;
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