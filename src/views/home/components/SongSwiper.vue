<template>
<div class="music-list">
    <div class="music-list-top">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
    </div>

    <swiper
        class="music-list-items"
        slides-per-view="auto"
        :free-mode="true"
        :space-between="10"
    >
        <swiper-slide class="music-list-item" v-for="(item, idx) in musicList" :key="idx" @click="$router.push(`/songs/${item.id}`)">
            <img :src="item.coverImgUrl" alt="">
            <span>{{ item.name }}</span>
        </swiper-slide>
    </swiper>
</div>
</template>


<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.less';
import { getMusicList, getMusicListDetail } from '@/api/index';

const musicList = ref(<any[]> []);
onBeforeMount(async() => {
    musicList.value = await getMusicList();
});
</script>

<style lang="less" scoped>
.music-list {
    padding: .2rem;

    .music-list-top {
        margin: 0 0 .15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            font-size: .3rem;   
            font-weight: 900;
        }

        .more {
            border: 1px solid #999;
            border-radius: .2rem;
            color: #999;
            padding: .02rem .16rem;
            font-size: .24rem;
            line-height: .33rem;
        }
    }

    .music-list-items {
        .music-list-item {
            display: flex;
            flex-direction: column;
            width: 2rem;
            img {
                width: 100%;
                height: 2rem;
                border-radius: .1rem;
            }
            span {
                margin: .1rem 0 0;
                font-size: .24rem;
                line-height: .32rem;
                height: .64rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
</style>