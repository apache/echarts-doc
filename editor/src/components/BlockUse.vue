<template>
<q-card flat class="block-use">
    <!-- <q-card-section class="q-pt-xs"> -->
    <q-select
        filled
        v-model="block.target"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        label="Use Target"
        @filter="filterTargetsList"
        :options="targetsList"
    >
        <template v-slot:no-option>
            <q-item>
                <q-item-section class="text-grey">
                No results
                </q-item-section>
            </q-item>
        </template>
    </q-select>

    <q-toolbar>
        <q-toolbar-title class="text-overline">Parameters</q-toolbar-title>
        <q-btn flat round icon="add" size="xs" @click="addArg"></q-btn>
    </q-toolbar>
    <div class="args row items-center">
        <div v-for="(arg, index) in block.args" :key="arg[0] || index" class="row items-center">
            <q-icon name="label" class="text-blue-8 q-mx-md" style="font-size:20px;"></q-icon>
            <q-input v-model="arg[0]"></q-input>
            <div class="q-mx-md equal">=</div>
            <q-input v-model="arg[1]" @keyup="onArgValEditing(arg)"></q-input>
            <q-btn round flat icon="close" size="xs" @click="removeArg(index)"></q-btn>
        </div>
    </div>
       <!-- {{block.target}} -->
    <!-- </q-card-section> -->
</q-card>
</template>

<script>

import { store } from '../store/store';
import { countLevel } from '../../common/blockHelper';

export default {
    props: ['block'],

    data() {
        return {
            targetFilterKeyword: ''
        };
    },

    mounted() {
        this.$el.querySelector('input').setAttribute('autocomplete', 'off');
    },

    computed: {
        targetsList() {
            let list = store.targets.map(target => target.name);
            if (this.targetFilterKeyword) {
                list = list.filter(item => item.indexOf(this.targetFilterKeyword) >= 0);
            }
            return list;
        }
    },

    methods: {
        filterTargetsList(val, update) {
            update(() => {
                this.targetFilterKeyword = val;
            }, ref => {
                if (val !== '' && ref.options.length > 0) {
                    ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
                    ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
                }
            });
        },

        onArgValEditing(arg) {
            const usedTarget = store.targetsMap[this.block.target];
            if (arg[0] === 'prefix' && usedTarget) {
                if (arg[1].match(/#+/)) {
                    this.block.level = countLevel(arg[1]) + usedTarget.topLevel;
                }
            }
        },

        removeArg(index) {
            this.block.args.splice(index, 1);
        },

        addArg() {
            this.block.args.push(['', '']);
        }
    }
};
</script>

<style lang="scss">
.q-card.block-use {
    margin: 10px 0;
    padding: 5px 10px;
    border-left: 3px solid $deep-purple-8;

    .args {
        .equal {
            font-size: 18px;
        }

        .q-field__control {
            height: 30px;
        }
    }
    // background-color: #e8effc;
}
</style>
