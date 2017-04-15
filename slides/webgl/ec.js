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


var $timer = document.createElement('div');
$timer.id = 'timer';
$timer.style.cssText = 'position:absolute;right:10px;top:10px;z-index;1000;width:100px;height:50px;';
var timerChart = echarts.init($timer);
document.body.appendChild($timer);

timerChart.setOption({
    series: [{
        name:'Timer',
        type:'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '160%',
        center: ['50%', '80%'],
        splitNumber: 5,
        axisLine: {
            lineStyle: {
                color: [[0.5, '#dd0000'],[0.8, '#dddd00'],[1, '#00dd00']],
                width: 2
            }
        },
        axisTick: {
            splitNumber: 5,
            length :5,
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            length: 5,
            lineStyle: {
                color: 'auto'
            }
        },
        pointer : {
            width : 3
        },
        title : {
            show : false
        },
        detail : {
            formatter:function () { return ''},
            textStyle: {
                color: 'auto',
                fontWeight: 'bolder'
            }
        },
        data:[{value: 0, name: 'current'}]
    }]
});

var timeAll = 45 * 60 * 1000;
var elapsedTime = 0;
var timeInterval = 1000 * 30;
setInterval(function () {
    elapsedTime += timeInterval;
    timerChart.setOption({
        series: [{
            name: 'Timer',
            data: [{
                name: 'current',
                value: elapsedTime / timeAll * 100
            }]
        }]
    })
}, timeInterval);