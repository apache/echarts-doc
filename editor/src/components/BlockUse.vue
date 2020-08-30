<template>
<q-card flat>
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

    <q-input label="Parameters" v-model="block.args"></q-input>
       <!-- {{block.target}} -->
    <!-- </q-card-section> -->
</q-card>
</template>

<script>

import { store } from '../store/store';

export default {
    props: ['block'],

    data() {
        return {
            targetFilterKeyword: ''
        }
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
                    ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
                    ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.q-card {
    margin: 10px 0;
    padding: 5px 10px;
    border-left: 3px solid $deep-purple-8;
    // background-color: #e8effc;
}
</style>
