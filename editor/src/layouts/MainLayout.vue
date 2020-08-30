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

                <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
            </q-toolbar>
            <!-- <q-tabs align="left">
                <q-route-tab to="/page1" label="Page One" />
                <q-route-tab to="/page2" label="Page Two" />
                <q-route-tab to="/page3" label="Page Three" />
            </q-tabs> -->
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

export default {
    components: {
        Nav
    },
    data() {
        return {
            navOpen: true
        };
    }
};
</script>

<style lang="scss" scoped>
.q-header {
    z-index: 10000;
}
</style>
