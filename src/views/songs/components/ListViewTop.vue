<template>
    <div class="list-view-top">
        <img class="bg" :src="coverImgUrl" alt="">
        <div class="view-nav">
            <div class="left">
                <svg class="icon" aria-hidden="true" @click="backAction">
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
            <div class="cover">
                <img :src="coverImgUrl" alt="">
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-playcount"></use>
                    </svg>
                    <span>{{ playCount }}</span>
                </div>
            </div>
            <div class="text">
                <div class="title">{{ name }}</div>
                <div class="author">
                    <img :src="creator?.avatarUrl" alt="">
                    <span>{{ creator?.nickname }}</span>
                </div>
                <div class="desc">{{ description }}</div>
            </div>
        </div>
        <div class="view-operate">
            <div class="operate">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-comment"></use>
                </svg>
                <span>{{ commentCount }}</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-share"></use>
                </svg>
                <span>{{ shareCount }}</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-download"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="operate">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-select"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

defineProps({
    coverImgUrl: String,
    playCount: Number,
    name: String,
    creator: Object,
    description: String,
    commentCount: Number,
    shareCount: Number
})

const router = useRouter()
const backAction = () => {
    if(window.history.length > 1) router.back()
    else router.push('/')  
}
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

        .cover {
            position: relative;
            
            img {
                height: 2.5rem;
                border-radius: .1rem;
            }

            .count {
                position: absolute;
                top: .05rem;
                right: .05rem;
                display: flex;
                align-items: center;
                color: #fff;
                fill: #fff;
                font-size: .24rem;
                svg {
                    width: .3rem;
                    height: .3rem;
                }
            }
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
        color: #eee;

        .operate {
            display: flex;
            flex-direction: column;
            align-items: center;

            svg {
                fill: #eee;
            }
        }
    }
}

</style>