<template>
    <ListViewTop />
    <ListViewSongs />
    参数: {{$route.params}}
</template>


<script lang="ts" setup>
import ListViewTop from './components/ListViewTop.vue'
import ListViewSongs from './components/ListViewSongs.vue'
import { onBeforeMount, ref } from '@vue/runtime-core';
import { getMusicListDetail } from '@/api';
import { useRoute } from 'vue-router';

const listDetail = ref(null);
onBeforeMount(async () => {
    // listDetail.value = await getMusicListDetail(Number(useRoute().params.id));
});
</script>

<style lang="less" scoped></style>