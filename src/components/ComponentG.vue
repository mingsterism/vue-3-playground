<template>
  <div>Heyy!!!!!!!!!! {{ block.name }} {{ block }}</div>
</template>

<script>
import { h } from "vue";
export default {
  name: "componentg",
  data() {
    return {};
  },
  props: {
    block: Object,
  },
  setup() {
    return {
      name: "Jenny",
    };
  },
};
</script>