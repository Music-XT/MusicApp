<template>
<div class="top-nav">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-nav"></use>
    </svg>
    <div class="top-nav-center">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
    </svg>
</div>
</template>

<style lang="less" scoped>
.top-nav {
    width: 100%;
    height: .85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    
    .top-nav-center {
        flex-grow: .5;
        display: flex;
        justify-content: space-evenly;

        .active {
            font-weight: 700;
        }
    }
}
</style>