<template>
<div class="new-songs">
    <div class="title">推荐新歌</div>
    <div class="songs">
        <div class="song" v-for="(item, idx) in newSongs" :key="idx">
            <div class="pic">
                <img :src="item.picUrl" alt="">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-playcount"></use>
                </svg>
            </div>
            <div class="name">
                <span>{{item.name}}</span>       
                <span class="artist">
                    <span v-if="item.artist"> -</span>
                    {{item.artist}}
                </span>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { getNewSongs } from '@/api/index'
import { onBeforeMount } from '@vue/runtime-core';
import { ref } from 'vue';

const newSongs = ref()
onBeforeMount(async () => {
    newSongs.value = await getNewSongs()
})
</script>
<style lang="less" scoped>
.new-songs {
    padding: 0 .2rem;
    .title {
        font-size: .3rem;
        font-weight: bold;
        margin: 0 0 .15rem 0;
    }
    .song {
        display: flex;
        align-items: center;
        margin: .15rem 0;
        .pic {
            width: .8rem;
            height: .8rem;
            margin: 0 .2rem 0 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
                height: 100%;
                border-radius: .1rem;
                position: absolute;
                top: 0;
                left: 0;
                filter: opacity(.8);
            }
            svg {
                fill: #fff;
                z-index: 1;
            }
        }
        .name {
            span {
                font-size: .32rem;
            }
            .artist {
                font-size: .24rem;
                color: #999;
            }
        }
    }
}
</style>