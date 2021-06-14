<template>
<div class="container-fluid">
<div class="row">
<div class="col-12 p-5">
            <img 
            :src="state.image.url" 
            alt="image">
</div>
</div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'apod',
  setup() {
    const state = reactive({
      
      image: computed(() => AppState.apod)
    })
    return {
      state
    }
  },

}
</script>


<style scoped>
img {
    height: 750px;
  width: 800px;
  border-radius: 50px;
}
</style>