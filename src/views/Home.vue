<template>
    <TopNav />
    <CoverSwiper />
    <IconList />
    <MusicList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from '../components/TopNav.vue'
import CoverSwiper from '../components/CoverSwiper.vue'
import IconList from '../components/IconList.vue'
import MusicList from '../components/MusicList.vue'

export default defineComponent({
    name: 'Home',
    components: {
        TopNav,
        CoverSwiper,
        IconList,
        MusicList
    },
    setup: () => {
        return {}
    }
})
</script>

<style scoped>
</style>