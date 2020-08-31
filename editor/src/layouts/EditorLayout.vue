<template>
    <q-layout view="hHh lpr lFr">

        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->

                <q-toolbar-title>
                <!-- <q-avatar>
                </q-avatar> -->
                Apache ECharts Doc Editor
                </q-toolbar-title>

                <q-btn flat icon="clear" @click="restore" v-if="hasUnsaved">Clear Editing Content</q-btn>
                <q-btn flat icon="save" @click="save"> {{ hasUnsaved ? 'Unsaved' : ''}}</q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer :persistent="true" v-model="navOpen" side="left" overlay behavior="desktop" bordered>
            <Nav />
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

import Nav from '../components/Nav';
import { store, saveToServer, detectChangeAndSaveToLocal, clearLocalStorage, restore } from '../store/store';
import { socket } from '../store/socket';

export default {
    components: {
        Nav
    },
    data() {
        return {
            navOpen: true,
            shared: store,

            hasUnsaved: false,
            showClearConfirm: false
        };
    },

    methods: {
        save() {
            saveToServer();
            this.hasUnsaved = false;
        },
        restore() {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Are you sure to clear the editing content?',
                cancel: true,
                persistent: true,
                dark: true
                // position: 'bottom'
            }).onOk(() => {
                restore();
                clearLocalStorage();
                this.hasUnsaved = false;
            }).onCancel(() => {
            }).onDismiss(() => {
            })
        }
    },

    watch: {
        'shared.blocks': {
            handler(newVal) {
                detectChangeAndSaveToLocal(() => {
                    this.hasUnsaved = true;
                }, () => {
                    this.hasUnsaved = false
                });
            },
            deep: true
        }
    }
};
</script>

<style lang="scss" scoped>
.q-header {
    z-index: 10000;
}
</style>
