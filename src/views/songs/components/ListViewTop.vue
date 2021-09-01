<template>
    <div class="list-view-top">
        <img class="bg" :src="listDetail?.coverImgUrl" alt="">
        <div class="view-nav">
            <div class="left">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-back"></use>
                </svg>
                <div class="title">歌单<sup>&reg;</sup></div>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-search"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-menu"></use>
                </svg>
            </div>
        </div>
        <div class="view-info">
            <img class="cover" :src="listDetail?.coverImgUrl" alt="">
            <div class="text">
                <div class="title">{{ listDetail?.name }}</div>
                <div class="author">
                    <img :src="listDetail?.creator.avatarUrl" alt="">
                    <span>{{ listDetail?.creator.nickname }}</span>
                </div>
                <div class="desc">{{ listDetail?.description }}</div>
            </div>
        </div>
        <div class="view-operate">
            <div class="operate">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-comment"></use>
                </svg>
                <span>{{ listDetail?.commentCount }}</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-share"></use>
                </svg>
                <span>{{ listDetail?.shareCount }}</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-download"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-select"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getMusicListDetail } from "@/api";
import { onBeforeMount, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
const listDetail = ref();

onBeforeMount(async () => {
    listDetail.value = await getMusicListDetail(Number(route.params.id))
});

</script>

<style lang="less" scoped>
.list-view-top {
    padding: .15rem 0.2rem 0;

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        filter: blur(.8rem);
        z-index: -999;
    }

    .view-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            fill: #fff;
        }

        .left {
            display: flex;
            align-items: center;

            .title {
                color: #fff;
                margin: -.1rem .15rem 0;
                font-size: .38rem;
            }
        }

        .right {
            .icon:last-child {
                margin-left: .3rem;
            }
        }
    }

    .view-info {
        display: flex;
        margin-top: .35rem;
        padding: 0 .15rem;
        height: 2.5rem;

        .cover {
            border-radius: .1rem;
        }
        .text {
            margin-left: .35rem;

            .title {
                color: #fff;
                font-size: .32rem;
                font-weight: 700;
                line-height: .45rem;
            }

            .author {
                margin: .2rem 0;
                display: flex;
                align-items: center;

                img {
                    width: .5rem;
                    border-radius: .3rem;
                }

                span {
                    margin-left: .1rem;
                    color: #ddd;
                    font-size: .24rem;
                }
            }

            .desc {
                font-size: .24rem;
                color: #ddd;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

    .view-operate {
        display: flex;
        justify-content: space-around;
        margin: .4rem 0;
        color: #ddd;

        .operate {
            display: flex;
            flex-direction: column;
            align-items: center;

            svg {
                fill: #ddd;
            }
        }
    }
}

</style>