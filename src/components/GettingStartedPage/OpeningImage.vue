<template>
  <img :src="state.img1.image" class="img-fluid" alt="Responsive image">
</template>

<script>

export default {
    name: "OpeningImage",
  components: {},
  setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/gettingstarted.jpg"),
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