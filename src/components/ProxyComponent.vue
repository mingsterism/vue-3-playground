<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
<script>
import { h, toRefs } from "vue";
export default {
  name: "component-proxy",
  props: {
    name: {
      type: String,
    },
    properties: {
      type: Object,
    },
  },
  //   render() {
  //     return h(this.name, {
  //       attrs: properties,
  //     });
  //   },
  setup(props) {
    const { name, properties } = toRefs(props);
    console.log(name, "!!!!!!!!!", properties, "<<<<<<<<<<<<");
    return () => {
      return h(name, {
        attrs: properties,
      });
    };
  },
};
</script>