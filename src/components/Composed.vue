<template>
  <h1>Composed Component</h1>
  <button @click="foo">SUBMIT</button>
  {{ friends }} ---------
  {{ counter }}
  {{ counterIsEven }}
  <button @click="handleCounter($event, 'MINUS')">MINUS</button>
</template>

<script>
import { onMounted, toRefs, ref, watch, computed } from "vue";
import { getData } from "../utils.js";
// const {getData} = require('../utils.js')
import userRepos from "../composables/userUserRepositories.js";

export default {
  name: "Composed",
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {},
  },
  setup(props) {
    return userRepos(props);
    // const repositories = ref([])
    // const friends = ref([])
    // let counter = ref(0)
    // const {user} = toRefs(props)
    // console.log("PROPS: ", props)
    // const getUserData = async (val, oldVal) => {
    //   console.log("--------", val)
    //   console.log("OLD VAL: ", oldVal)
    //   console.log("1 Getting user data", user.value)
    //   const result = await getData(user.value)
    //   return result
    // }
    //
    // const getNewCounter = (val, oldVal) => {
    //   console.log(val, oldVal)
    // }
    //
    // // onMounted(getUserData)
    // watch(friends.value, getUserData)
    // watch(counter, getNewCounter)
    //
    // const foo = () => {
    //   console.log("FOO", friends.value.push("yoo"))
    //   // friends.push("heyy")
    // }
    //
    // const addCounter = () => {
    //   console.log("ADDING")
    //   counter.value = counter.value + 1
    // }
    //
    // const counterIsEven = computed(() => {
    //   return counter.value % 2 == 0
    // })
    //
    // const searchQuery = ref('')
    // const repositoriesMatchingSearchQuery = computed(() => {
    //   return repositories.value.filter(
    //       repository => repository.name.includes(searchQuery.value)
    //   )
    // })
    //
    // return {
    //   getUserData,
    //   repositories,
    //   searchQuery,
    //   repositoriesMatchingSearchQuery,
    //   foo,
    //   addCounter,
    //   counter,
    //   counterIsEven,
    //   friends
    // }
  },
};
</script>

<style scoped>
</style>