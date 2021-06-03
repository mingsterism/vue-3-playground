<template>
  <h2>Component F</h2>
  <button @click="handleCounter($event, 'ADD')">ADD</button>
  Injected Value {{ name }}
  <modal text="some modal"></modal>
</template>

<script>
import userRepos from "../composables/userUserRepositories.js";
import Modal from "./Modal.vue";

export default {
  name: "ComponentF",
  components: {
    Modal,
  },
  inject: ["name"],
  setup(props) {
    return userRepos(props);
  },
  methods: {
    handleCounter($event, type) {
      console.log("ADD calling from options api")
    }
  }
};
</script>

<style scoped>
</style>