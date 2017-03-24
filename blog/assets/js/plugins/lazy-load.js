(function () {

    if (typeof jQuery === 'undefined') {
        return;
    }

    var $ = jQuery;
    var env = window['MD_ENV'];
    var $ = jQuery;
    var useThumb = env && (env.os.phone || env.os.tablet);

    var blockList = $('.ec-lazy');
    var $win = $(window);

    blockList.each(function (index, block) {
        block = $(block);
        var src = block.attr('data-src');
        block.attr('data-src', src);
    });

    // Lazy load.
    $win.on('scroll', showBlock);

    $(showBlock);

    function initThumb(block, $block, blockThumb, blockSrc) {
        $block.css('lineHeight', $block.height() + 'px');
        block.innerHTML = [
            '<img style="width:100%;height:auto;margin:0;padding:0;vertical-align:middle;" src="', blockThumb, '"/>',
            // for vertial middle
            '<div style="vertical-align: middle; height: 100%; width: 0"></div>',
            '<div style="cursor:pointer;thumb-btn;position:absolute;bottom:10px;width:100%;height:22px;line-height:22px;text-align:center;">',
                '<em style="font-style:normal;border-radius:3px;padding:3px 5px;margin:3px 5px;color:white;background:#337ab7;font-size:12px;line-height:1.5;">点击图片加载真实图表</em>',
            '</div>',
            '<div class="ec-lazy-block-mask" style="cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;margin:0;"></div>'
        ].join('');
        $block.find('.ec-lazy-block-mask').on('click', function () {
            initIFrame(block, $block, blockThumb, blockSrc);
        });
    }

    function initIFrame(block, $block, blockThumb, blockSrc) {
        block.innerHTML = [
            '<iframe style="overflow:hidden;width:100%;height:100%;margin:0;padding:0;" src="' , blockSrc, '">',
            'frameborder="no" border="0" marginwidth="0" marginheight="0"',
            'scrolling="no" hspace="0" vspace="0"></iframe>'
        ].join('');
    }

    function showBlock() {
        blockList.each(function (idx, block) {
            var $block = $(block);

            var blockSrc = $block.attr('data-src');
            var blockThumb = $block.attr('data-thumb');

            if (!blockSrc) {
                return;
            }

            $block.css({
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                padding: 0
            });

            var winScrollTop = $win.scrollTop();
            var blockTop = block.offsetTop;

            var winHeight = $win.height();
            var winBottom = winScrollTop + winHeight;
            var blockBottom = blockTop + $block.height();

            if (winBottom >= blockTop && winBottom <= (blockBottom + winHeight)) {
                $block.attr('data-src', '');
                (useThumb && blockThumb)
                    ? initThumb(block, $block, blockThumb, blockSrc)
                    : initIFrame(block, $block, blockThumb, blockSrc);
            }
        });
    }

})();