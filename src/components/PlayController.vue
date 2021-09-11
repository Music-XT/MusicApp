<template>
    <div v-if="curPlayIndex > -1">
        <div class="padding-element"></div>
        <div class="play-controller">
            <div class="controller-left">
                <img :src="songInfo.picUrl" :alt="songInfo.name" />
                <div>
                    <div class="title">{{ songInfo.name }}</div>
                    <div class="desc">点击查看详情</div>
                </div>
            </div>
            <div class="controller-right">
                <audio :src="songInfo.src" ref="audio" @loadstart="isPaused = true" @play="isPaused = false" @pause="isPaused = true" @ended="store.commit('nextSong')"></audio>
                <svg class="icon" aria-hidden="true" @click="play(false)" v-show="isPaused">
                    <use xlink:href="#icon-play" />
                </svg>
                <svg class="icon" aria-hidden="true" @click="play(true)" v-show="!isPaused">
                    <use xlink:href="#icon-pause" />
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-music" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>import getMusicUrl from "@/api";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const store = useStore()
const curPlayIndex = computed(() => store.state.curPlayIndex)
const songInfo = computed(() => {
    const baseInfo = store.state.playList[store.state.curPlayIndex]
    return {
        src: getMusicUrl(baseInfo.id),
        ...baseInfo
    }
})

const audio = ref()
const isPaused = ref(true)
function play(pause = false) {
    audio.value && pause ? audio.value.pause() : audio.value.play()
}
</script>
<style lang="less">
.padding-element,
.play-controller {
    height: 1rem;
    background-color: #fff;
    box-shadow: 0 -0.01rem 0.05rem #eee;
}

.play-controller {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .controller-left {
        display: flex;
        align-items: center;
        img {
            max-height: 1rem;
            padding: 0.1rem;
            border-radius: 50%;
        }
        >div {
            max-width: 4.84rem;
        }
        .title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .desc {
            color: #888;
            font-size: 0.24rem;
            line-height: 0.4rem;
        }
    }

    .controller-right {
        svg {
            width: 0.58rem;
            height: 0.58rem;
            margin: 0 .25rem 0 0;
        }
    }
}
</style>