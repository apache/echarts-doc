(function () {

    window.initShowCode = function (option, opt) {
        opt = opt || {};

        if (opt.showCode || checkShowCodeFromHash()) {
            var css = getCSS(true);
            $('#main pre').css('width', css.codeWidth);
            $('#main #chart').css('left', css.chartLeft);
        }

        var myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption(option);

        var onResize = opt.onResize || myChart.resize;

        window.addEventListener('resize', onResize);

        window.addEventListener("hashchange", onHashChange, false);

        prettyPrint();

        PerfectScrollbar.initialize($('#main pre')[0], {});

        return myChart;

        function onHashChange() {
            var css = getCSS(checkShowCodeFromHash());

            $('#main pre').css('width', css.codeWidth);

            if (opt.noAnimation) {
                $('#main #chart').css('left', css.chartLeft);
                myChart && onResize();
            }
            else {
                $('#main #chart').animate(
                    {
                        left: css.chartLeft
                    },
                    {
                        duration: 300,
                        easing: 'linear',
                        progress: function () {
                            myChart && onResize();
                        }
                    }
                );
            }
        }

        function checkShowCodeFromHash() {
            var hash = window.location.hash;
            var matchResult = hash.match(/_md2r_fragment_=([a-zA-Z]+)/);
            return matchResult && matchResult[1] === 'code';
        }

        function getCSS(showCode) {
            var targetLeft;
            var gap;
            var codeWidth = opt.codeWidth || 300;

            if (showCode) {
                targetLeft = codeWidth;
                gap = 30;
            }
            else {
                targetLeft = 0;
                gap = 0;
            }

            return {
                codeWidth: targetLeft - gap,
                chartLeft: targetLeft
            };
        }
    };

})();