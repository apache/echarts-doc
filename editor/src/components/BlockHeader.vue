<template>
<!-- <q-card> -->
<h5 class="block-header">
    <q-input
        type="text"
        v-model="block.value"
        :class="'header-level-' + block.level"
    >
        <template v-slot:prepend>
            <span class="prefix">
                <q-input v-model="headerPrefix"></q-input>
            </span>
        </template>
    </q-input>
</h5>
<!-- </q-card> -->
</template>

<script>

import { parseHeader, countLevel } from '../../common/blockHelper';

export default {
    props: ['block'],
    computed: {

        headerRules() {
            return [
                val => !!parseHeader(val) || 'Invalid header'
            ];
        },

        headerPrefix: {
            get() {
                return '#'.repeat(this.block.level);
            },
            set(val) {
                this.block.level = countLevel(val);
            }
        }
    }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

h5.block-header {
    margin: 10px 0 10px 0;

    .q-field {
        font-size: 14px;
        font-family: 'Source Sans Pro', monospace, sans-serif;

        &.header-level-1 {
            font-size: 24px;
            margin-top: 20px;
            .prefix .q-input {
                font-size: 26px;
                width: 20px;
            }
        }

        &.header-level-2 {
            font-size: 20px;
            margin-top: 20px;
            .prefix .q-input {
                font-size: 22px;
                width: 25px;
            }
        }
        &.header-level-3 {
            font-size: 18px;
            margin-top: 10px;
            .prefix .q-input {
                font-size: 20px;
                width: 35px;
            }
        }
        &.header-level-4 {
            font-size: 16px;
            .prefix .q-input {
                font-size: 18px;
            }
        }

        .prefix .q-input {
            font-size: 16px;
            width: 50px;
        }
    }

    input {
        width: 100%;
        border: none;
    }
}
</style>
