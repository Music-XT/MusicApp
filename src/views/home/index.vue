<template>
    <TopNav />
    <BannerSwiper />
    <IconList />
    <SongSwiper />
    <router-link to="/songs">To Songs</router-link>
</template>

<script lang="ts" setup>
import TopNav from './components/TopNav.vue'
import BannerSwiper from './components/BannerSwiper.vue'
import IconList from './components/IconList.vue'
import SongSwiper from './components/SongSwiper.vue'
</script>
