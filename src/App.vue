<template>


<main>
  <div class="row">
<div class="col-12">
<form @submit.prevent="search">    
<input class="mx-1" type="date" placeholder="" v-model="state.query">
<button type="submit" class="btn btn-outline-light m-1"><i class="fas fa-search-plus"></i></button>
</form>
<Apod/>
</div>
</div>
  

</main>

</template>

<script>
import { apodService } from "./services/apodService"
import { reactive, computed } from 'vue'
import { AppState } from "./AppState"
import Apod from "./components/Apod"

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      picture: computed(() => AppState.apod)
    })
    return {
      state,
      async search() {
        try {
          await apodService.getPicture(state.query)
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
   components: {
    Apod,
  }
 
}
</script>

<style>

#screen{
  background-image: url("https://i.imgur.com/wJSu84m.gif");
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nasa {
height: 250px;
width: 400px;
}
</style>
