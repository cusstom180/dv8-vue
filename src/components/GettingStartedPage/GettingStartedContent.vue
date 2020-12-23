<template>
  <img :src="state.img1.image" class="img-fluid" alt="Responsive image">
  <div class="container getstart_panel clearfix">
    <div class="row justify-content-center">
      <div class="header1">
        <h1 class="text-uppercase">Try Us for Free</h1>
        <p>Our community is unlike any in Rochester. Warm and welcoming to all who walk through its doors, our athletes are quick to give encouragement and support to everyone. Athletes become friends, and friends become family at DV8. We strive to create an environment that makes everyone feel comfortable, and we believe every athlete has the potential to be great! Come in and see us between the Firestone building and Sargent Appliance. </p>
        <v-button :button="state.button" />
      </div>
      <div class="header2 mt-5">
        <h1 class="text-uppercase">On-Ramp</h1>
        <p>Our community is unlike any in Rochester. Warm and welcoming to all who walk through its doors, our athletes are quick to give encouragement and support to everyone. Athletes become friends, and friends become family at DV8. We strive to create an environment that makes everyone feel comfortable, and we believe every athlete has the potential to be great! Come in and see us between the Firestone building and Sargent Appliance. </p>
        <a class="btn btn-outline-secondary btn-lg" href="#" role="button">On-Ramp!</a>
      </div>
      <img :src="state.img1.image" class="img-fluid" alt="Responsive image">
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import GettingStartedButton from "@/components/GettingStartedButton"

export default {
  name: "GettingStartedContent",
  components: { 'v-button': GettingStartedButton },
  setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/gettingstarted.jpg"),
        alt: "image 1",
      },
      button: { id: 1, href: '/gettingstarted', content: 'Get Started!', router_link: 'GettingStarted'}
    });
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-fluid {
    height: 600px;
  }

  .getstart_panel {
    background-color: white;
    padding: 4em;
    position: relative;
    top: -50px;
    max-width: 784px;

    image {
      height: 500px;
    }

    .hover {
        box-shadow: 0 0 1rem chartreuse;
      }

    .btn {
      border-color: black;
      color: black;
      cursor: pointer;
      transition: all 0.25s ease;

      // &:hover {
      //   background-color: rgba(185, 241, 133, 0.4);
      //   color: black;
      //   transform: scale(1.1, 1.1);
      //   box-shadow: 10px 10px 5px rgba(185, 241, 133, 1);

      // }

      
    }
  }
</style>