<template>
<div class="top-nav">
    <img class="top-nav-left xt-icon" src="../assets/imgs/menu.png" alt="菜单">
    <div class="top-nav-center">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <img class="top-nav-right xt-icon" src="../assets/imgs/search.png" alt="搜索">
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'TopNav',
    setup: () => {
        return {}
    }
})
</script>

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