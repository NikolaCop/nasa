<template>



            <img 
            :src="state.image.url" 
            alt="image">


        

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
    height: 600px;
  width: 800px;
}
</style>