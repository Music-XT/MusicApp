<template>
    <ListViewTop />
    <ListViewSongs />
    <router-link to="/">To Home</router-link>
</template>


<script lang="ts" setup>
import ListViewTop from './components/ListViewTop.vue'
import ListViewSongs from './components/ListViewSongs.vue'
</script>

<style lang="less" scoped></style>