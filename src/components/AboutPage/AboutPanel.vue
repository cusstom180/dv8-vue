<template>
  <div class="about-panel container">
      <div class="row justify-content-center">
          <div class="about-panel-ind-panel col-md-8 m-5">
              <h1>About Us</h1>
              <div class="about-panel-item m-5">
                  <p><strong>Why we do what we do</strong></p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore aut laudantium maxime consectetur quasi officiis molestiae ullam excepturi culpa voluptate delectus, asperiores voluptas facilis vel, temporibus libero ex quod voluptatibus.</p>
              </div>
              <img :src="state.img1.image" class="img-fluid" alt="Responsive image">

          </div>
      </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "AboutPanel",
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
    .about-panel {
        position: relative;
        top: -50px;
        background-color: white;
    }

</style>