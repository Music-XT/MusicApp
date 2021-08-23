<template>
    <swiper class="cover-swiper-container" :="swiperOptions" @swiper.once="initSwiperInstance">
        <swiper-slide class="cover-swiper-slide" v-for="(item, idx) in imgs" :key="idx">
            <img :src="item" />
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.less';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import "swiper/components/pagination/pagination.min.css"
SwiperCore.use([Pagination, Autoplay]);
import { getBanners } from '../api/index';

export default defineComponent({
    name: 'CoverSwiper',
    components: {
        Swiper,
        SwiperSlide
    },
    setup: () => {
        const swiperInstance = ref();
        const initSwiperInstance = (swiper: any) => {
            swiperInstance.value = swiper;
        }

        const imgs = ref(<string[]> []);
        onBeforeMount(async () => {
            imgs.value = await getBanners();
            swiperInstance.value.slideTo(1, 0);
        });

        const swiperOptions = {
            spaceBetween: 5,
            pagination: true,
            loop: true,
            autoplay: {"delay": 2500, "disableOnInteraction": false}
        };
        watch(imgs, (newValue) => {
            if (newValue.length > 1) {
                swiperInstance.value.autoplay.start();
            } else {
                swiperInstance.value.autoplay.stop();
            }
        })

        return {initSwiperInstance, imgs, swiperOptions}
    }
})
</script>

<style lang="less" scoped>
.cover-swiper-container {
    --swiper-pagination-color: pink;
    width: 92%;
    margin: .1rem auto;
    border-radius: .15rem;
    background-color: black;

    .cover-swiper-slide {

        img {
            width: 100%;
            vertical-align: top;
        }
    }
}
</style>