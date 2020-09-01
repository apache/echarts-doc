<template>
<q-card bordered flat class="block-content">
    <div class="text-overline">Description</div>
    <div class="editor-main"></div>
</q-card>
<!-- <textarea v-model="block.value"></textarea> -->
</template>

<script>

import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

export default {
    props: ['block'],

    mounted() {
        const el = this.$el.querySelector('.editor-main');
        const editor = CodeMirror(el, {
            value: this.block.value,
            mode: 'markdown',
            // lineNumbers: true,
            theme: 'default',
            viewportMargin: Infinity,
            // lineWrapping: true,
            extraKeys: {
                Enter: 'newlineAndIndentContinueMarkdownList'
            }
        });

        editor.on('change', () => {
            this.block.value = editor.getValue();
        });

        this.editor = editor;
    },

    watch: {
        'block.value'(newVal) {
            if (this.editor) {
                if (newVal !== this.editor.getValue()) {
                    this.editor.setValue(newVal);
                }
            }
        }
    }
};
</script>

<style lang="scss">

.q-card.block-content {
    margin: 10px 0;
    padding: 5px;

    .CodeMirror {
        height: auto;
        border-radius: 5px;

        .CodeMirror-wrap pre {
            word-break: break-all;
        }
    }
    .text-overline {
        color: #aaa;
        margin-left: 5px;
    }
}
</style>
