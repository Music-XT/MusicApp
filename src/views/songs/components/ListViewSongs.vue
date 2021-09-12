<template>
    <div class="list-view-songs">
        <div class="line">
            <svg class="left icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
            </svg>
            <div class="center playall">播放全部 <span>(共{{ tracks?.length }}首)</span></div>
            <div class="right sub">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-add"></use>
                </svg>
                <span>收藏 ({{ subscribedCount }})</span>
            </div>
        </div>
        <div class="line" v-for="(item, idx) in tracks" :key="idx" @click="updatePlayList(idx)">
            <div class="left">{{ idx + 1 }}</div>
            <div class="center">
                <div class="title">{{ item.name }}</div>
                <div class="desc">
                    <i v-show="songSupInfo[idx].sq" class="sq-tag"></i>
                    <span>{{ songSupInfo[idx].desc }}</span>
                </div>
            </div>
            <svg class="right icon" aria-hidden="true">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";

const props = defineProps({
    subscribedCount: {
        type: Number,
        required: true
    },
    tracks: {
        type: Array as () => Array<{ id: number, name: string, al: any, ar: Array<any>, h: any, l: any, m: any }>,
        required: true
    }
})

// desc => item.ar.reduce{ cur.name} - item.al.name
const songSupInfo = computed(() => {
    return props.tracks.map((item) => {
        return {
            desc:
                item.ar.reduce((acc, cur) => [...acc, cur.name], []).join('/') +
                (item.al.name ? ' - ' + item.al.name : ''),
            sq: (item.h?.vd ?? item.l?.vd ?? item.m?.vd) < 0,
        }
    })
})

const store = useStore()
function updatePlayList(index: number) {
    // 切歌到该音乐, 或者当该音乐在暂停时播放该音乐
    store.commit('play')
    if(store.state.curPlayIndex === index) return

    store.commit('replacePlayList', {
        playList: props.tracks.map(item => ({
            id: item.id,
            picUrl: item.al.picUrl,
            name: item.name
        })),
        index
    })
}

</script>

<style lang="less" scoped>
.list-view-songs {
    background-color: #fff;
    color: #000;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    padding: .15rem 0;

    .line {
        padding: .1rem 0;
        display: flex;
        align-items: center;

        .center.playall {
            font-weight: bold;
            span {
                font-weight: normal;
                font-size: .24rem;
                color: #999;
            }
        }

        .right.sub {
            background-color: #ff4c39;
            fill: #fff;
            color: #fff;

            display: flex;
            align-items: center;
            padding: .15rem;
            border-radius: .5rem;

            svg {
                width: .35rem;
                height: .35rem;
            }
        }

        .left {
            width: 1rem;
            text-align: center;
            flex-shrink: 0;

            color: #999;
            font-size: .3rem;
        }
        .center {
            flex-grow: 1;
            overflow: hidden;
            >div  {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .title {
                font-size: .32rem;
            }
            .desc {
                font-size: .24rem;
                color: #888;
                padding: 1px 0;

                .sq-tag::before {
                    font-style: normal;
                    content: 'SQ';
                    color: #ff4c39;
                    border: 1px solid #ff4c39;
                    border-radius: .15rem;
                    margin-right: .08rem;
                    padding: 0 .06rem;
                }
            }
        }
        .right {
            flex-shrink: 0;
            margin: 0 .1rem;
            fill: #999;
        }
    }
}

</style>