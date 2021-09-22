<template>
<router-view></router-view>

<PlayController />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlayController from '@/components/PlayController/PlayController.vue'
export default defineComponent({
  name: 'App',
  components: {
    PlayController
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: .5rem;
  height: .5rem;
  overflow: hidden;
}
</style>
