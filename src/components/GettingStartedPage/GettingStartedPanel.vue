<template>
  <div class=" getstart_panel container clearfix">
    <div class="row justify-content-center">
      <div class="header1 mx-5">
        <h1 class="text-uppercase">Try Us for Free</h1>
        <p>Our community is unlike any in Rochester. Warm and welcoming to all who walk through its doors, our athletes are quick to give encouragement and support to everyone. Athletes become friends, and friends become family at DV8. We strive to create an environment that makes everyone feel comfortable, and we believe every athlete has the potential to be great! Come in and see us between the Firestone building and Sargent Appliance. </p>
        <v-button :button="state.button" />
      </div>
      <img :src="state.img1.image" class="img-fluid" alt="Responsive image">
      <h3 class="m-5 p-5">We help people to continue to play with their family and rediscover themselves! </h3>
      <v-ImgGallery />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import GettingStartedButton from "@/components/GettingStartedButton"
import ImgGallery from "../GettingStartedPage/ImgGallery"

export default {
    name: 'GettingStartedPanel',
    components: {  
      'v-button': GettingStartedButton,
      'v-ImgGallery': ImgGallery
     },
    setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/2019-01-30-0236.jpg"),
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

  .getstart_panel {
    background-color: white;
    padding: 4em;
    position: relative;
    top: -50px;
    max-width: 784px;

    .header1 {
      margin-bottom: 5rem;
    }
  }

</style>