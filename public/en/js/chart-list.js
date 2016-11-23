var charts = [];

$(document).ready(function() {

    // chart type as category
    var $container = $('#explore-container .chart-list-panel');
    for (var type in CHART_TYPES) {
        $container.append('<h3 class="chart-type-head" id="chart-type-'
            + type + '">' + CHART_TYPES[type] + '</h3>')
            .append('<div class="row" id="chart-row-' + type + '"></div>');
    }

    // load charts
    for (var eid = 0, elen = EXAMPLES.length; eid < elen; ++eid) {
        // show title if exists
        var title = EXAMPLES[eid].title || '未命名图表';
        var subtitle = EXAMPLES[eid].subtitle || '点击查看详情';

        // append dom element
        var $row = $('<div class="col-lg-3 col-md-4 col-sm-6"></div>');
        var $chart = $('<div class="chart"></div>');
        $('#chart-row-' + EXAMPLES[eid].type).append($row.append($chart));

        $link = $('<a class="chart-link" href="demo.html#'
            + EXAMPLES[eid].id + '"></a>');
        $chart.append($link);
        $link.append('<h4 class="chart-title">' + title + '</h4>')

        // load chart image
        $chartArea = $('<img class="chart-area" data-original="' + GALLERY_THUMB_PATH
            + EXAMPLES[eid].id + '.png" />');
        $link.append($chartArea);
    }

    // chart nav highlighting as scrolling
    var waypoints = $('.chart-type-head').waypoint(function (direction) {
        var names = this.element.id.split('-');
        if (names.length === 3) {
            $('#left-chart-nav li').removeClass('active');
            $('#left-chart-nav-' + names[2]).parent('li').addClass('active');
        }
    }, {
        offset: 70
    });

    window.addEventListener('hashchange', function () {
        // move window down at the height of navbar so that title will not
        // be hidden when goes to hash tag
        scrollBy(0, -80);

        // changes highlighting as hash tag changes
        var names = location.hash.split('-');
        if (names.length === 3) {
            $('#left-chart-nav li').removeClass('active');
            $('#left-chart-nav-' + names[2]).parent('li').addClass('active');
        }
    });

    // highlight the first chart in chart navbar
    $('#left-chart-nav li').first().addClass('active');

    // Lazy load
    $('.chart-area').lazyload();
});
