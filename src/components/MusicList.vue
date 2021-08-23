<template>
<div class="music-list">
    <div class="music-list-top">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'MusicList',
    setup: () => {
        return {}
    }
})
</script>

<style lang="less" scoped>
.music-list {
    padding: .2rem;

    .music-list-top {
        display: flex;
        justify-content: space-between;

        .title {
            font-size: .3rem;   
            font-weight: 900;
        }

        .more {
            border: 1px solid #ccc;
            padding: .02rem .16rem;
            border-radius: .2rem;
            font-size: .24rem;
        }
    }
}
</style>