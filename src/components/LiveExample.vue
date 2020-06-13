
<template>
<div id="example-panel">
    <h2>{{$t('example.title')}}</h2>
    <p class="intro">{{$t('example.intro')}}</p>
    <div class="preview-main"></div>
</div>
</template>

<script>

// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑

import {store, getPagePath} from '../store';

let chartInstance;

let echartsLoadPromise;

function fetchECharts() {
    return echartsLoadPromise || (echartsLoadPromise = new Promise(function (resolve) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/echarts@4.8.0/dist/echarts.min.js';
        script.async = true;
        script.onload = function () {
            resolve();
            echartsLoadPromise = null;
        }
        document.body.appendChild(script);
    }));
}

export default {

    data() {
        return {
            shared: store
        };
    },

    mounted() {
        const examplePanel = this.$el;
        const previewMain = examplePanel.querySelector('.preview-main');
        // TODO use css?
        function resize() {
            examplePanel.style.width = examplePanel.parentNode.clientWidth * 0.45 + 'px';
            previewMain.style.height = previewMain.clientWidth * 3 / 4 + 'px';
        }
        window.addEventListener('resize', resize);
        resize();
    },

    watch: {
        'shared.previewOption'(newVal) {
            if (newVal) {
                this.updateOption(newVal);
            }
        }
    },

    methods: {
        updateOption(option) {
            if (typeof echarts === 'undefined') {
                fetchECharts().then(() => {
                    chartInstance = echarts.init(this.$el.querySelector('.preview-main'));
                    chartInstance.setOption(option);
                })
            }
            else {
                chartInstance.setOption(option);
            }
        }
    }
}
</script>

<style lang="scss">

#example-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    top: 40px;
    padding: 10px 0px;
    right: 10px;
    text-align: left;

    // background: #162436;
    // border-left: 1px solid #ddd;

    h2 {
        font-weight: normal;
        font-size: 18px;
        color: #B03A5B;
        padding-left: 20px;
    }

    p.intro {
        color: #aaa;
        padding-left: 20px;
    }

    .preview-main {
        width: 100%;
        background: #fefefe;
    }
}

</style>