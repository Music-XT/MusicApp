<template>
    <div v-if="songInfo">
        <div class="padding-element"></div>
        <div class="play-controller">
            <div class="controller-left">
                <img ref="pic" :src="songInfo.picUrl" :alt="songInfo.name" />
                <div>
                    <div class="title">{{ songInfo.name }}</div>
                    <div class="desc">{{ desc }}</div>
                </div>
            </div>
            <div class="controller-right">
                <audio :src="songInfo.src" ref="audio"
                    :autoplay="!isPaused"
                    @loadstart="onAudionLoadStart(), onAudioPause(true)"
                    @canplay="onAudioCanPlay"
                    @error="onAudioError"
                    @ended="onAudioPlayEnd"
                    @play="onAudioPlay"
                    @pause="onAudioPause"
                ></audio>
                <svg class="icon" aria-hidden="true" @click="play(false)" v-show="canPlay && isPaused">
                    <use xlink:href="#icon-play" />
                </svg>
                <svg class="icon" aria-hidden="true" @click="play(true)" v-show="canPlay && !isPaused">
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
import { onBeforeUnmount, ref, watch } from "vue";

const store = useStore()
const songInfo = computed(() => {
    if(store.state.curPlayIndex < 0) return undefined
    const baseInfo = store.state.playList[store.state.curPlayIndex]
    return {
        src: getMusicUrl(baseInfo.id),
        ...baseInfo
    }
})

// 音源问题导致音乐无法播放时应该不显示播放和暂停按钮
const canPlay = ref(false)
const desc = ref('音乐加载中...')
function onAudionLoadStart() {
    canPlay.value = false
    desc.value = '音乐加载中...'
}
function onAudioCanPlay() {
    canPlay.value = true
    desc.value = '点击查看详情'
}
function onAudioError() {
    canPlay.value = false
    desc.value = '无法播放该音乐'
}

// 播放时图片旋转(通过 CSS 动画实现)
const pic = ref()
function onAudioPlay() {
    if(pic.value) pic.value.style.animationPlayState = "running"
}
function onAudioPause(reset: any) {
    if(!pic.value) return
    // 默认会给reset传递一个 Event 对象, 所以这里判断 boolean
    if(reset === true) {
        const name = pic.value.style.animationName === 'circle' ? 'circle-reset' : 'circle'
        pic.value.style.animationName = name
    } else {
        pic.value.style.animationPlayState = "paused"
    }
}

const audio = ref()
const isPaused = computed(() => store.state.playSemaphore === 0)
const play = (pause = false) => {
    if(pause) store.commit('pause')
    else store.commit('play')
}
onBeforeUnmount(() => {
    // 下次重新进入音乐列表页面时, 不再进行自动播放
    play(true)
})
watch(computed(() => store.state.playSemaphore), () => {
    if(!audio.value) {
        // 兄弟组件通过 playSemaphore 传递播放音乐的事件
        // 这里不用处理, 直接通过 isPaused 绑定给 autoplay 完成自动播放
        return
    }
    if(isPaused.value) audio.value.pause()
    else audio.value.play()
})

// 播放模式
import PLAY_MODE from './constants'
const playMode = computed(() => store.state.playMode)
function onAudioPlayEnd() {
    if(playMode.value === PLAY_MODE.RANDOM) {
        let next = 0
        do {
            next = Math.floor(Math.random() * store.state.playList.length)
        } while(next === store.state.curPlayIndex && store.state.playList.length > 1)
        store.commit('nextSong', next)
    } else if(playMode.value === PLAY_MODE.SINGLE) {
        audio.value.currentTime = 0
        play(false)
    } else {
        if(store.state.curPlayIndex === store.state.playList.length - 1) {
            store.commit('nextSong', 0)
        } else {
            store.commit('nextSong')
        }
    }
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
            animation: circle 30s linear infinite;
            animation-play-state: paused;
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

@keyframes circle{
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
@keyframes circle-reset{
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
</style>