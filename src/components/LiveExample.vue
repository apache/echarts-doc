
<template>
<div id="example-panel">
    <h2>{{$t('example.title')}}</h2>
    <p class="intro">{{$t('example.intro')}}</p>
    <div class="preview-and-code">
        <div class="preview-main"></div>
        <div class="example-code">
            <div class="codemirror-main"></div>
        </div>
    </div>
</div>
</template>

<script>

// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑

import {store, getPagePath} from '../store';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/mode/javascript/javascript.js'
import beautify from 'js-beautify';

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
        const self = this;
        const examplePanel = this.$el;
        const previewMain = examplePanel.querySelector('.preview-main');
        // TODO use css?
        function resize() {
            examplePanel.style.width = examplePanel.parentNode.clientWidth * 0.45 + 'px';
            if (self.chartInstance) {
                self.chartInstance.resize();
            }
        }
        window.addEventListener('resize', resize);
        resize();
    },

    watch: {
        'shared.previewOption'(newVal) {
            if (newVal) {
                this.updateOption(newVal);
                this.updateCode();
            }
        }
    },

    methods: {
        updateOption(option) {
            const viewport = this.$el.querySelector('.preview-main');
            if (typeof echarts === 'undefined') {
                fetchECharts().then(() => {
                    if (!this.echartsInstance) {
                        this.chartInstance = echarts.init(viewport);
                    }
                    this.chartInstance.setOption(option);
                })
            }
            else {
                if (!this.echartsInstance) {
                    this.chartInstance = echarts.init(viewport);
                }
                this.chartInstance.setOption(option);
            }
        },

        updateCode() {
            if (!this.cmInstance) {
                this.cmInstance = CodeMirror(this.$el.querySelector('.codemirror-main'), {
                    value: this.formattedOptionCodeStr,
                    mode: 'javascript',
                    theme: 'paraiso-dark'
                });
            }
            else {
                this.cmInstance.setValue(this.formattedOptionCodeStr);
            }
        }
    },

    computed: {
        optionCodeStr() {
            return `const option = ${JSON.stringify(this.shared.previewOption)}`;
        },

        formattedOptionCodeStr() {
            return beautify.js(this.optionCodeStr.replace(/"(\w+)"\s*:/g, '$1:'));
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
        margin: 5px 0;
        font-size: 12px;
    }

    .preview-and-code {
        position: absolute;
        top: 90px;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .preview-main {
        width: 100%;
        background: #fefefe;
        height: 50%;
    }

    .example-code {
        width: 100%;
        height: 50%;
        position: relative;

        // h4 {
        //     margin: 0 10px;
        //     padding: 0;
        // }

        .codemirror-main {
            height: 100%;

            .CodeMirror {
                height: 100%;
                overflow-y: scroll;
            }
        }
    }
}

</style>