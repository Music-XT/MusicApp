<template>
<div class="top-nav">
    <div class="top-nav-left">Online Music</div>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
    </svg>
</div>
</template>

<style lang="less" scoped>
.top-nav {
    width: 100%;
    height: .85rem;
    position: sticky;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    
    .top-nav-left {
        font-size: .28rem;
        font-weight: bolder;
    }
}
</style>