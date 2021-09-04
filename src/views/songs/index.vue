<template>
    <ListViewTop
        :cover-img-url="listDetail?.coverImgUrl"
        :play-count="listDetail?.playCount"
        :name="listDetail?.name"
        :creator="listDetail?.creator"
        :description="listDetail?.description"
        :comment-count="listDetail?.commentCount ?? 0"
        :share-count="listDetail?.shareCount ?? 0"
    />
    <ListViewSongs
        :subscribed-count="listDetail?.subscribedCount?? 0"
        :tags="listDetail?.tags ?? []"
        :tracks="listDetail?.tracks ?? []"
     />
    <!-- 参数: {{$route.params}} -->
</template>


<script lang="ts" setup>
import ListViewTop from './components/ListViewTop.vue'
import ListViewSongs from './components/ListViewSongs.vue'
import { onBeforeMount, ref } from '@vue/runtime-core';
import { getMusicListDetail } from '@/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const listDetail = ref();
onBeforeMount(async () => {
    listDetail.value = await getMusicListDetail(Number(route.params.id))
});
</script>

<style lang="less" scoped></style>