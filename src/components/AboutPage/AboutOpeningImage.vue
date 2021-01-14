<template>
  <img :src="state.img1.image" class="img-fluid" alt="Responsive image">
</template>

<script>
import { reactive } from "vue";

export default {
  name: "AboutOpeningImage",
  components: {},
  setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/2019-01-30-0259.jpg"),
        alt: "image 1",
      }
    });
    return {
      state
    }
  }

}
</script>

<style lang="scss" scoped>

</style>