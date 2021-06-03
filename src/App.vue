<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
  <ComponentC/>
  <Composed :user="userProfile"/>

</template>

<script lang="ts">
import ComponentC from "./components/ComponentC.vue"
import Composed from "./components/Composed.vue"
import {defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ComponentC,
    Composed
  },
  data() {
    return {
      userProfile: {
        name: "hello"
      }

    }
  },

  provide: {
    name: "Julio",

  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
