function drawCanvasOne() {

    var div = document.getElementById('wave');

    var chart = echarts.init(div);
    var zr = chart.getZr();
    var width = chart.getWidth();
    var height = chart.getHeight();

    var polylineGroup = new echarts.graphic.Group();
    zr.add(polylineGroup);

    var peakCount = 3;
    if (width < 800) {
        peakCount = 2;
    }
    for (var i = 0; i < 3; i++) {
        var points = [];
        for (var j = 0; j <= peakCount + 1; j++) {
            var base = height / 10 * i + height / 6;
            var peak = Math.random() * height / 8 + base;
            var trough = height - Math.random() * height / 8 - base;
            var point = [[
                j * 2 * width / peakCount / 2,
                i % 2 ? peak : trough
            ], [
                (j * 2 + 1) * width / peakCount / 2,
                i % 2 ? trough : peak
            ]];
            points.push(point[0], point[1]);
        }
        var polyline = new echarts.graphic.Polyline({
            shape: {
                points: points,
                smooth: 0.4
            },
            style: {
                stroke: '#fff',
                opacity: 1 / (i + 1),
                lineWidth: 1.2 / (i + 1) + 0.8
            },
            silent: true,
            position: [-i * width / 8, -(i - 0.5) * 35]
        });
        var clipRect = new echarts.graphic.Rect({
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: height
            },
            position: [i * width / 8, 0]
        });
        polylineGroup.add(polyline);
        clipRect.animateTo({
            shape: {
                width: width
            }
        }, 2000, Math.random() * 800);

        polyline.setClipPath(clipRect);
        peakCount += 1;
    }

    $(window).on('resize', function () {
        var w0 = chart.getWidth();
        var h0 = chart.getHeight();
        chart.resize();
        var w1 = chart.getWidth();
        var h1 = chart.getHeight();
        clipRect.setShape({
            width: w1,
            height: h1
        });
        var sx = w1 / w0;
        var sy = h1 / h0;
        polylineGroup.eachChild(function (polyline) {
            polyline.position[0] *= sx;
            polyline.position[1] *= sy;
            polyline.shape.points.forEach(function (pt) {
                pt[0] *= sx;
                pt[1] *= sy;
            });
            polyline.dirty(true);
        });
    });
}

function drawLogo () {

    var div = document.getElementById('animate-logo');
    var chart = echarts.init(div);
    var zr = chart.getZr();


    var E = 'M332.846,107.214l-76.918-0.004c0.536,9.511,3.782,17.147,9.735,22.905c5.954,5.762,13.059,8.639,21.32,8.641c14.054-0.002,24.782-6.816,32.184-20.447l11.265,5.707c-5.044,9.191-10.998,15.984-17.862,20.367c-6.867,4.387-15.074,6.578-24.621,6.578c-13.194,0-24.083-4.465-32.664-13.396c-8.583-8.928-12.874-19.68-12.873-32.258c0-12.572,4.318-23.352,12.955-32.334c8.634-8.979,19.336-13.473,32.102-13.473c12.766,0.002,23.438,4.257,32.022,12.762C328.072,80.769,332.524,92.42,332.846,107.214z M318.042,95.643c-1.609-7.397-5.257-13.159-10.942-17.28c-5.686-4.12-12.229-6.182-19.63-6.183c-15.021,0-24.998,7.82-29.931,23.461L318.042,95.643z';
    var CHARTS = 'M105.563,134.761c-4.155,5.997-9.592,10.566-16.307,13.708c-6.718,3.141-13.988,4.713-21.816,4.713c-12.176,0-22.348-3.949-30.513-11.854c-8.167-7.898-12.249-17.562-12.249-28.985S28.786,91.139,37,83c8.212-8.14,18.844-12.209,31.89-12.209c7.73,0,14.857,1.667,21.38,4.998c6.523,3.333,11.62,7.996,15.293,13.993l-9.422,5.854c-7.055-9.043-16.284-13.563-27.686-13.563c-8.987,0-16.525,2.832-22.613,8.495c-6.088,5.665-9.132,12.686-9.132,21.062c0,8.378,2.995,15.562,8.986,21.561s13.576,8.996,22.759,8.996c11.017,0,20.293-4.568,27.832-13.707L105.563,134.761z M186.566,150.609h-12.03v-37.125c0-7.232-0.219-12.326-0.652-15.277c-0.436-2.949-1.427-5.734-2.971-8.354c-1.547-2.617-3.649-4.616-6.307-5.997c-2.659-1.379-5.848-2.07-9.566-2.07c-3.722,0-7.272,0.856-10.654,2.57c-3.384,1.713-6.283,4.094-8.697,7.14c-2.417,3.048-4.084,6.282-5.001,9.709c-0.919,3.427-1.377,10.281-1.377,20.562v28.842h-12.031V43.519h12.031v40.98c7.828-9.139,17.104-13.708,27.831-13.708c5.701,0,10.872,1.453,15.511,4.355c4.639,2.904,8.117,6.903,10.438,11.994c2.319,5.094,3.479,12.922,3.479,23.489v39.98H186.566z M279.6,150.609h-11.741v-11.422c-8.602,9.33-18.506,13.992-29.716,13.992c-11.211,0-20.801-4.068-28.772-12.209c-7.974-8.14-11.959-17.849-11.959-29.129c0-11.279,4.009-20.94,12.03-28.985c8.021-8.044,17.805-12.066,29.354-12.066c11.547,0,21.235,4.618,29.062,13.851V72.791H279.6V150.609z M239.013,142.186c8.021,0,14.931-2.854,20.729-8.565c5.798-5.713,8.696-12.827,8.696-21.349c0-8.519-2.852-15.657-8.553-21.418c-5.703-5.758-12.683-8.638-20.945-8.638c-8.262,0-15.246,2.977-20.945,8.924c-5.703,5.95-8.553,12.972-8.553,21.062c0,8.092,2.899,15.111,8.698,21.061C223.938,139.212,230.896,142.186,239.013,142.186z M403.95,84.033H383.43v53.583c0,1.999,0.305,3.213,0.914,3.641c0.608,0.429,4.16,0.644,6.6,0.644h9.348v10.138c-4.881,0.764-12.644,1.144-15.185,1.144c-4.881,0-8.491-1.117-10.83-3.355c-2.341-2.234-3.509-5.782-3.509-10.637V84.033h-18.387V72.791h18.387V43.519h12.662v29.272h20.521V84.033z M465.566,81.93l-8.393,7.853c-6.229-5.234-11.933-7.853-17.103-7.853c-3.272,0-6.018,0.928-8.233,2.783c-2.218,1.857-3.326,4.141-3.326,6.854c0,2.712,1.24,5.094,3.722,7.139c2.479,2.049,6.888,4.569,13.222,7.567c6.337,2.998,11.219,6.308,14.648,9.925c3.429,3.618,5.146,8.045,5.146,13.278c0,6.664-2.562,12.279-7.68,16.85c-5.122,4.568-11.43,6.854-18.924,6.854c-10.45,0-19.16-3.998-26.128-11.994l8.233-8.281c5.7,5.996,11.507,8.994,17.419,8.994c4.012,0,7.443-1.188,10.294-3.567c2.85-2.38,4.273-5.163,4.273-8.354c0-3.188-1.294-5.854-3.878-7.996c-2.589-2.142-7.021-4.642-13.303-7.496c-6.282-2.855-11.032-6.021-14.252-9.496c-3.222-3.473-4.83-8.042-4.83-13.706c0-5.663,2.297-10.496,6.889-14.493c4.592-3.998,10.662-5.998,18.211-5.998S457.118,74.504,465.566,81.93z M555.6,95.324c5.701,2.762,10.122,6.568,13.264,11.423c3.139,4.854,4.711,10.138,4.711,15.849c0,9.331-3.456,17.35-10.363,24.062c-6.91,6.711-15.634,10.067-26.165,10.067c-9.472,0-17.228-2.689-23.266-8.068c-6.04-5.377-10.124-13.352-12.248-23.917h12.32c1.835,6.761,4.565,11.778,8.19,15.063c3.622,3.284,8.793,4.926,15.51,4.926c6.715,0,12.344-2.069,16.887-6.211c4.542-4.141,6.813-9.353,6.813-15.635c0-6.283-2.587-11.281-7.756-14.994c-5.171-3.711-12.78-5.662-22.829-5.854V90.612c7.245,0,13.094-1.521,17.538-4.569c4.443-3.046,6.669-6.83,6.669-11.353c0-4.52-1.718-8.28-5.146-11.279c-3.431-2.999-7.587-4.498-12.466-4.498c-4.88,0-8.842,1.356-11.886,4.069c-3.045,2.713-5.632,6.832-7.757,12.351h-12.609c2.124-9.138,5.991-16.135,11.597-20.989c5.604-4.854,12.513-7.283,20.729-7.283c8.212,0,15.34,2.667,21.381,7.997c6.037,5.333,9.059,11.805,9.059,19.419C567.775,83.235,563.717,90.184,555.6,95.324z M343.009,73.464l-8.258,9.995c-2.18-0.856-4.292-1.285-6.339-1.285c-3.971,0-11.378,1.452-14.576,4.355c-3.202,2.905-5.604,6.711-7.202,11.423c-1.604,4.712-2.4,13.208-2.4,25.487v26.701h-12.284V72.322h12.284v8.424c3.198-3.521,6.434-6.14,9.698-7.854c3.265-1.714,10.8-2.57,14.962-2.57C333.053,70.322,337.758,71.371,343.009,73.464z';

    var ePath = echarts.graphic.makePath(E, {
        silent: true
    }, {
        x: -0.5,
        y: -0.5,
        width: 1,
        height: 1
    }, 'center');
    ePath.setStyle({
        stroke: '#AA314D',
        fill: 'rgba(178, 58, 89, 0)',
        lineWidth: 1,
        strokeNoScale: true
    });
    var chartsPath = echarts.graphic.makePath(CHARTS, {
        silent: true
    }, {
        x: -0.5,
        y: -0.5,
        width: 1,
        height: 1
    }, 'center');
    chartsPath.setStyle({
        stroke: '#fff',
        fill: 'rgba(255, 255, 255, 0)',
        lineWidth: 1,
        strokeNoScale: true
    });
    var group = new echarts.graphic.Group();
    group.add(ePath);
    group.add(chartsPath);
    resize();

    zr.add(group);

    var dashLen = 220 / group.scale[0] / chartsPath.scale[0]
        / (1000 / chart.getWidth()); // Adjust by device width
    ePath.dashOffset = 0;

    ePath.animate()
        .when(1500, {
            dashOffset: dashLen
        })
        .during(function () {
            var dashOffset = ePath.dashOffset;
            ePath.setStyle({
                lineDash: [dashOffset, dashLen - dashOffset]
            });
            chartsPath.setStyle({
                lineDash: [dashOffset, dashLen - dashOffset]
            });
        })
        .done(function () {
            ePath.animateTo({
                style: {
                    fill: ePath.style.stroke
                }
            }, 1500, function () {
                ePath.setStyle({
                    fill: '#AA314D'
                });
                ePath.animateTo({
                    rotation: 0.6
                }, 800, 'bounceOut');
            });
            chartsPath.animateTo({
                style: {
                    fill: chartsPath.style.stroke
                }
            }, 1500);
        })
        .start();

    var groupPosition;
    function resize() {
        ePath.style.stroke = null;
        chartsPath.style.stroke = null;
        var chartsPathRect = chartsPath.getBoundingRect();
        var asp = chartsPathRect.width / chartsPathRect.height;
        div.style.height = div.clientWidth * 0.206 + 'px';
        chart.resize();
        var width = chart.getWidth();
        var height = chart.getHeight();
        var eRect = ePath.getBoundingRect();
        var scale = height / 1.6;
        ePath.attr('position', [0.5, 1.15]);
        // ePath.attr('scale', [scale, scale]);

        chartsPath.attr('position', [4.3, 1]);
        chartsPath.attr('scale', [asp * 1.3 , asp * 1.3]);
        group.attr('scale', [scale, scale]);

        var rect = group.getBoundingRect();
        groupPosition = groupPosition || [group.position[0], group.position[1]];
        group.position[0] = groupPosition[0] - rect.width * scale / 2 + width / 2;
        group.position[1] = groupPosition[1] + rect.height * scale / 2 - height / 2;
        ePath.style.stroke = '#B23A59';
        chartsPath.style.stroke = '#fff';
    }

    $(window).resize(resize);
}
