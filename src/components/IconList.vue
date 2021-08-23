<template>
<div class="icon-list">
    <div class="icon-list-item">
        <img src="../assets/imgs/recommend.png" alt="推荐">
        <span>每日推荐</span>
    </div>
    <div class="icon-list-item">
        <img src="../assets/imgs/personal.png" alt="推荐">
        <span>私人FM</span>
    </div>
    <div class="icon-list-item">
        <img src="../assets/imgs/songs.png" alt="推荐">
        <span>歌单</span>
    </div>
    <div class="icon-list-item">
        <img src="../assets/imgs/rank.png" alt="推荐">
        <span>排行榜</span>
    </div>
    <div class="icon-list-item">
        <img src="../assets/imgs/living.png" alt="推荐">
        <span>直播</span>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'IconList',
    setup: () => {
        return {}
    }
})
</script>

<style lang="less" scoped>
.icon-list {
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    
    .icon-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.2rem;
        
        img {
            width: .8rem;
        }
        
        span {
            font-size: .24rem;
        }
    }
}
</style>