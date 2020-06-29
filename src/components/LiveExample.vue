<template>
<div id="example-panel" :class="[isDownLayout ? 'down-layout' : 'right-layout']">
    <h2>{{$t('example.title')}}</h2>
    <p class="intro">{{ shared.allOptionExamples ? $t('example.intro') : $t('example.noExample')}}</p>
    <div class="preview-and-code" v-if="shared.currentExampleOption">
        <div class="preview-main"></div>
        <div class="example-code">
            <div class="codemirror-main"></div>
        </div>
        <el-alert
            :title="$t('example.setOptionError')"
            v-if="hasError"
            type="error"
        >
        </el-alert>
    </div>
    <div class="toolbar">
        <el-select size='mini' v-if="shared.allOptionExamples" class="example-list" v-model="shared.currentExampleName"
            :popper-append-to-body="false">
            <el-option v-for="item in shared.allOptionExamples"
                :key="item.name"
                :value="item.name"
                :label="shared.locale === 'en' ? item['title-en'] : item.title"
            ></el-option>
        </el-select>
        <el-button v-if="shared.currentExampleOption" type="primary" icon="el-icon-refresh" size="mini" @click="refreshForce">{{$t('example.refresh')}}</el-button>
        <el-button size='mini' circle icon="el-icon-close" @click="closeExamplePanel"></el-button>
    </div>
</div>
</template>

<script>

// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑

import {store, getPagePath} from '../store';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js'
import beautify from 'js-beautify';
import throttle from 'lodash.throttle';
import arrayDiff from 'zrender/src/core/arrayDiff';
import scrollIntoView from 'scroll-into-view';

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

function diffUpdateCode(oldCode, newCode, cmInstance) {
    const oldLines = oldCode.split(/\n/);
    const newLines = newCode.split(/\n/);
    const result = arrayDiff(oldLines, newLines);

    const changedLines = [];
    const len = result.length;

    for (let i = len - 1; i >= 0; i--) {
        const item = result[i];
        if (item.cmd === '-') {
            cmInstance.replaceRange(
                '', {line: item.idx, ch: 0}, {line: item.idx + 1, ch: 0}
            );
        }
    }

    for (let i = 0; i < len; i++) {
        const item = result[i];
        if (item.cmd === '+') {
            cmInstance.replaceRange(
                newLines[item.idx] + '\n', {line: item.idx, ch: 0}
            );
            changedLines.push(item.idx);
        }
    }

    changedLines.forEach(function (idx) {
        cmInstance.addLineClass(idx, 'wrap', 'option-changed');
    });

    if (len) {
        setTimeout(() => {
            cmInstance.scrollIntoView({
                line: changedLines[0],
                ch: 0
            }, cmInstance.getWrapperElement().clientHeight - 50);
        }, 20);
    }

    return changedLines;
}

function updateOption(option, isRefreshForce) {
    if (this.shared.currentExampleName !== this.lastUpdateExampleName) {
        this.lastUpdateExampleName = this.shared.currentExampleName;
        // Refresh all if example base option is changed.
        this.refreshForce();
        return;
    }

    const viewport = this.$el.querySelector('.preview-main');
    if (!viewport) {
        return;
    }

    // Clear error msg.
    this.hasError = false;
    if (typeof echarts === 'undefined') {
        // TODO Put fetch charts when component is initialized.
        fetchECharts().then(() => {
            if (!this.echartsInstance) {
                this.chartInstance = echarts.init(viewport);
            }
            if (this.shared.cleanMode) {
                this.chartInstance.clear();
            }
            this.chartInstance.setOption(option, true);
        })
    }
    else {
        if (!this.echartsInstance) {
            this.chartInstance = echarts.init(viewport);
        }
        try {
            if (this.shared.cleanMode) {
                this.chartInstance.clear();
            }
            this.chartInstance.setOption(option, true);
        }
        catch (e) {
            // 一些属性切换的时候可能会出现一些位置的错误
            console.error(e);
            this.hasError = true;
        }
    }

    if (!this.cmInstance) {
        this.cmInstance = CodeMirror(this.$el.querySelector('.codemirror-main'), {
            value: this.formattedOptionCodeStr,
            mode: 'javascript',
            // theme: 'paraiso-dark',
            theme: 'dracula',
            readOnly: true
        });
    }
    else {
        // TODO: Highlight the diff lines.
        // TODO: Only change the changed line. optimize
        const oldCode = this.cmInstance.getValue();
        const newCode = this.formattedOptionCodeStr;

        if (this.oldHighlightedLines) {
            this.oldHighlightedLines.forEach((idx) => {
                this.cmInstance.removeLineClass(idx, 'wrap', 'option-changed');
            });
        }

        if (!isRefreshForce) {
            this.oldHighlightedLines = diffUpdateCode(oldCode, newCode, this.cmInstance);
        }
        else {
            this.cmInstance.setValue(newCode);
            this.oldHighlightedLines = [];
        }
    }

    this.lastUpdateExampleName = this.shared.currentExampleName;
}

export default {

    props: ['isDownLayout'],

    data() {
        return {
            shared: store,

            hasError: false,

            lastUpdateExampleName: '',

            oldHighlightedLines: []
        };
    },

    mounted() {
        // TODO use css?
        this.resize = this.resize.bind(this);
        window.addEventListener('resize', this.resize);
        this.resize();

        if (this.shared.currentExampleOption) {
            this.updateOptionThrottled(this.shared.currentExampleOption);
        }

        if (this.shared.allOptionExamples) {
            this.shared.currentExampleName = this.shared.allOptionExamples[0].name;
        }
        else {
            this.shared.currentExampleName = ''
        }
    },

    destroyed() {
        if (this.chartInstance) {
            this.chartInstance.dispose();
            this.chartInstance = null;
        }
        window.removeEventListener('resize', this.resize);
    },

    watch: {
        'shared.currentExampleOption'(newVal) {
            if (newVal) {
                this.updateOptionThrottled(newVal);
            }
        },

        'shared.allOptionExamples'(newVal) {
            // Use the first example as default.
            if (newVal) {
                this.shared.currentExampleName = newVal[0].name;
            }
            else {
                this.shared.currentExampleName = '';
            }
        },
        'shared.currentExampleName'(newVal) {
            this.changeExample(newVal);
        }
    },

    methods: {
        updateOption,

        updateOptionThrottled: throttle(updateOption, 300, {
            leading: false
        }),

        resize() {
            const examplePanel = this.$el;
            const previewMain = examplePanel.querySelector('.preview-main');
            if (this.isDownLayout) {
                examplePanel.style.height = (window.innerHeight * 0.5 - 60) + 'px';
                examplePanel.style.width = 'auto';
            }
            else {
                examplePanel.style.width = examplePanel.parentNode.clientWidth * 0.45 + 'px';
                examplePanel.style.height = 'auto';
            }
            if (this.chartInstance) {
                this.chartInstance.resize();
            }
        },

        refreshForce: function () {
            // Dispose first
            if (this.shared.currentExampleOption) {
                if (this.chartInstance) {
                    this.chartInstance.dispose();
                    this.chartInstance = null;
                }
                this.updateOption(this.shared.currentExampleOption, true);
            }
        },

        closeExamplePanel() {
            this.shared.showOptionExample = false;
        },

        changeExample(exampleName) {
            const example = this.shared.allOptionExamples &&
                this.shared.allOptionExamples.find(item => item.name === exampleName);
            if (!example) {
                this.shared.currentExampleOption = null;
                return false;
            }
            const code = example.code;

            try {
                const func = new Function(code + '\n return option');
                this.shared.currentExampleOption = Object.freeze(func());
            }
            catch(e) {
                console.error(e);
                console.log(code);
            }
        }
    },

    computed: {
        optionCodeStr() {
            const optStr = JSON.stringify(this.shared.currentExampleOption, function (key, value) {
                if (typeof value === 'function') {
                    return "__functionstart__"
                        + value.toString().replace(/\n/g, '__newline__')    // avoid \n being escaped by JSON.stringify
                        + "__functionend__";
                }
                return value;
            });
            return `option = ${optStr}`;
        },

        formattedOptionCodeStr() {
            return beautify.js(this.optionCodeStr
                .replace(/"(\w+)"\s*:/g, '$1:')
                .replace(/"__functionstart__/g, "")
                .replace(/__functionend__"/g, "")
                // newline from function
                .replace(/__newline__/g, '\n'), {
                indent_size: 2
            });
        }
    }
}
</script>

<style lang="scss">

#example-panel {
    position: fixed;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 10px 0px;
    text-align: left;
    background: #fff;

    // transition: width 500ms cubic-bezier(0.215, 0.610, 0.355, 1);


    // background: #162436;
    // border-left: 1px solid #ddd;

    h2 {
        font-weight: normal;
        font-size: 20px;
        color: #333;
        padding-left: 20px;
        font-weight: bold;
        margin: 5px 0;
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

    .el-alert {
        position: absolute;
        top: 0;
    }
    .preview-main {
        background: #fefefe;
    }

    .example-code {
        position: relative;

        .codemirror-main {
            position: absolute;
            left: 10px;
            top: 10px;
            right: 10px;
            bottom: 15px;
            box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.1);
            .CodeMirror {
                height: 100%;
                overflow-y: scroll;
                border-radius: 6px;
                .CodeMirror-scroll {
                    padding: 15px;
                }
                font-family: 'Source Code Pro', monospace;
                font-size: 13px;

                ::-webkit-scrollbar-thumb {
                    width: 8px;
                    min-height: 15px;
                    background: rgba(255, 255, 255, 0.3) !important;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    border-radius: 2px
                }

                .option-changed {
                    background: rgba(255, 255, 255, 0.1);
                    // border-left: 3px solid #32dde6;
                }

                .CodeMirror-cursor {
                    display: none;
                }
            }
        }
    }

    .toolbar {
        position: absolute;
        top: 20px;
        right: 10px;

        .example-list {
            width: 220px;
        }
    }


    &.right-layout {
        bottom: 0;
        top: 40px;
        right: 10px;

        .preview-main {
            width: 100%;
            height: 50%;
        }
        .example-code {
            width: 100%;
            height: 50%;
        }
    }

    &.down-layout {
        left: 300px;
        bottom: 0;
        right: 0;

        .preview-main {
            width: 50%;
            height: 100%;
            float: left;
        }
        .example-code {
            width: 50%;
            height: 100%;
            float: left;
        }
    }
}

</style>