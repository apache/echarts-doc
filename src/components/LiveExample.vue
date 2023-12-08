<template>
<div id="example-panel" :class="shared.computedOptionExampleLayout + '-layout'">
    <h2>{{$t('example.title')}}</h2>
    <p class="intro">{{ shared.allOptionExamples ? $t('example.intro') : $t('example.noExample')}}</p>
    <div class="preview-and-code" v-if="shared.currentExampleOption">
        <div class="preview-main" v-loading="isLoading"></div>
        <div class="example-code">
            <div class="codemirror-main">
                <el-link
                    icon="el-icon-edit-outline"
                    class="btn-to-editor"
                    :title="$t('example.toEditor')"
                    @click="toEditor"
                />
            </div>
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
        <el-button v-if="shared.currentExampleOption"
            type="primary"
            icon="el-icon-refresh"
            size="mini"
            :title="$t('example.refresh')"
            @click="refreshForce"></el-button>
        <el-button
            style="margin-left: 0"
            type="primary"
            icon="el-icon-s-operation"
            size="mini"
            :title="$t('example.changeLayout')"
            v-popover:changeLayoutPopover></el-button>
        <el-button size='mini' circle icon="el-icon-close" @click="closeExamplePanel"></el-button>
    </div>
    <el-popover
        ref="changeLayoutPopover"
        placement="bottom"
        trigger="click"
        v-model="showChangeLayoutPopover">
        <div class="example-change-layout">
            <div class="layout-title"><i class="el-icon-s-operation"></i>{{$t('example.changeLayout')}}</div>
            <div class="layout-mode">
                <el-radio-group v-model="shared.optionExampleLayout" @change="changeLayout" size="mini">
                    <el-radio-button
                        v-for="layout in optionExampleLayouts"
                        :key="layout"
                        :label="layout">{{$t('example.layout.' + layout)}}</el-radio-button>
                </el-radio-group>
            </div>
        </div>
    </el-popover>
</div>
</template>

<script>

// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑

import {store, updateOptionExampleLayout, optionExampleLayouts} from '../store';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript.js'
import beautifier from 'js-beautify';
import {throttle} from 'lodash-es';
import arrayDiff from 'zrender/lib/core/arrayDiff';
import { compressToBase64 } from 'lz-string';

let echartsLoadPromise;

function fetchECharts() {
    return echartsLoadPromise || (echartsLoadPromise = new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = store.locale === 'zh'
            ? 'https://lib.baomitu.com/echarts/latest/echarts.min.js'
            : 'https://fastly.jsdelivr.net/npm/echarts@latest/dist/echarts.min.js';
        script.async = true;
        script.onload = function () {
            echartsLoadPromise = null;
            resolve();
        }
        script.onerror = function () {
            echartsLoadPromise = null;
            reject('Failed to load echarts');
        }
        document.body.appendChild(script);
    }));
}

function diffUpdateCode(oldCode, newCode, cmInstance) {
    const oldLines = oldCode.split(/\n/);
    const newLines = newCode.split(/\n/);
    const diff = arrayDiff(oldLines, newLines);

    const changedLines = [];

    // Remove lines from bottom to top so the line number won't be changed.
    for (let i = diff.length - 1; i >= 0; i--) {
        const item = diff[i];
        if (item.removed) {
            for (let k = item.count - 1; k >= 0; k--) {
                const idx = item.indices[k];
                cmInstance.replaceRange(
                    '', {line: idx, ch: 0}, {line: idx + 1, ch: 0}
                );
            }
        }
    }
    for (let i = 0; i < diff.length; i++) {
        const item = diff[i];
        if (item.added) {
            for (let k = 0; k < item.count; k++) {
                const idx = item.indices[k];
                cmInstance.replaceRange(
                    newLines[idx] + '\n', {line: idx, ch: 0}
                );
                changedLines.push(idx);
            }
        }
    }

    changedLines.forEach(function (idx) {
        cmInstance.addLineClass(idx, 'wrap', 'option-changed');
    });

    if (diff.length) {
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
        this.isLoading = true;
        fetchECharts().then(() => {
            if (!this.echartsInstance) {
                this.chartInstance = echarts.init(viewport);
            }
            if (this.shared.cleanMode) {
                this.chartInstance.clear();
            }
            this.chartInstance.setOption(option, true);
        }).finally(() => {
            this.isLoading = false;
        });
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

    data() {
        return {
            shared: store,

            hasError: false,

            lastUpdateExampleName: '',

            oldHighlightedLines: [],

            showChangeLayoutPopover: false,

            optionExampleLayouts,

            isLoading: true
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
            if (this.shared.computedOptionExampleLayout !== 'right') {
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
        },

        changeLayout(layout) {
            this.showChangeLayoutPopover = false;
            updateOptionExampleLayout(layout);
            this.$nextTick(() => {
                this.resize();
            });
        },

        toEditor() {
            // PENDING: use pure base64 rather than lz-string to encode the code?
            const code = compressToBase64(this.formattedOptionCodeStr)
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            window.open(`https://echarts.apache.org/examples/editor.html?code=${code}&_source=echarts-doc-preview`, '_blank');
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
            return beautifier.js(this.optionCodeStr
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
        top: 75px;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .el-alert {
        position: absolute;
        top: 0;
    }
    .preview-main {
        position: relative;
        padding: 0 10px;
        background: #fefefe;
        box-sizing: border-box;
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

        .btn-to-editor {
            position: absolute;
            right: 5px;
            top: 8px;
            z-index: 10;
            font-size: 16px;

            &:not(:hover) {
                color: #fff;
            }
         }
    }

    .toolbar {
        position: absolute;
        top: 15px;
        right: 10px;

        .example-list {
            width: 180px;
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

    &.bottom-layout {
        left: 300px;
        bottom: 0;
        right: 10px;

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


    &.top-layout {
        left: 300px;
        // dev
        // top: 40px;
        top: 50px;
        right: 10px;

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

.example-change-layout {
    .layout-title > i {
        font-size: 14px;
        margin-right: 5px;
    }
    .layout-mode {
        margin-top: 10px;
    }
}

</style>