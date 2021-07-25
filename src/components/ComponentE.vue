<template>
  <div
    :style="{
      backgroundColor: 'lightgrey',
      border: '4px solid yellow',
    }"
  >
    <h2 :style="{ color: 'yellow' }">Component E</h2>
    <span v-for="(block, index) in content.body" :key="index">
      <component :is="block.component" :block="block"></component>
    </span>
  </div>
</template>

<script>
// not used for now
import ComponentF from "./ComponentF.vue";
import ComponentG from "./ComponentG.vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";
import componentLayout from "./componentLayout.json";

export default {
  name: "ComponentE",
  data() {
    return {
      name: ComponentG,
      blogTitle: "sometitle",
      content: {
        body: componentLayout,
      },
    };
  },
  components: {
    ComponentF,
    ComponentG,
    Foo,
    Bar,
  },
};
</script>

<style scoped>
</style>