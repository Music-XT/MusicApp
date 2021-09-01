<template>
<div class="icon-list">
    <div class="icon-list-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-recommend"></use>
        </svg>
        <span>每日推荐</span>
    </div>
    <div class="icon-list-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-personal"></use>
        </svg>
        <span>私人FM</span>
    </div>
    <div class="icon-list-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-songs"></use>
        </svg>
        <span>歌单</span>
    </div>
    <div class="icon-list-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rank"></use>
        </svg>
        <span>排行榜</span>
    </div>
    <div class="icon-list-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-living"></use>
        </svg>
        <span>直播</span>
    </div>
</div>
</template>


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
        .icon {
            width: .8rem;
            height: .8rem;
        }
        
        span {
            font-size: .24rem;
        }
    }
}
</style>