<template>
<q-card bordered flat v-if="block.value">
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
    }
}
</script>

<style lang="scss">
.CodeMirror {
    height: auto;
    border-radius: 5px;

    .CodeMirror-wrap pre {
        word-break: break-all;
    }
}
.q-card {
    margin: 10px 0;
    padding: 5px;
    .text-overline {
        color: #aaa;
        margin-left: 5px;
    }
}
</style>
