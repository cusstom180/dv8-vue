<template>
  <div class="whycrossfit container-fluid">
    <div class="whycrossfit-panel row justify-content-center">
        <div class="col-md-6 content">
            <h1 class="mb-4">Why Choose CrossFit DV8?</h1>
            <div class="whycrossfit-item media">
                <img
                :src="state.img1.image"
                :alt="state.img1.alt"
                class="img-thumbnail float-left"
                />
                <div class="media-body">
                    <h5 class="mt-0">Commitment</h5>
                    We commit ourselves to the pursuit of fitness for individuals on any level. We are committed to having a better understanding of the priorities, goals and passions of our clients. Through this understanding we strive to constantly create services and offerings to support the personal growth of our members.
                </div>
            </div>
            <div class="whycrossfit-item clearfix">
                <img
                :src="state.img2.image"
                :alt="state.img2.alt"
                class="img-thumbnail float-right"
                />
                <div class="media-body">
                    <h5 class="mt-0">Balance</h5>
                    We believe that fitness happens on many levels. We strive for a community that supports and fosters physical, emotional, and spiritual harmony.
                </div>
            </div>
            <div class="whycrossfit-item clearfix">
                <img
                :src="state.img2.image"
                :alt="state.img2.alt"
                class="img-thumbnail float-left"
                />
                <div class="media-body">
                    <h5 class="mt-0">Perseverance</h5>
                    We are dedicated to achieving the goals of our clients. Our success depends entirely on helping our clients work towards achieving their goals.
                </div>
            </div>
            <div class="whycrossfit-item clearfix">
                <img
                :src="state.img1.image"
                :alt="state.img1.alt"
                class="img-thumbnail float-right"
                />
                <div class="media-body">
                    <h5 class="mt-0">Growth</h5>
                    We strive to constantly expand our knowledge base and educate our clients with the knowledge we acquire. Our community places their trust in us, and we will invest our time and energy to ensure that trust is repaid with the best instruction, guidance and knowledge we can acquire.
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "WhyCrossfit",
  setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/342-400x400.jpg"),
        alt: "image 1",
      },img2: {
        key: 1,
        image: require("@/assets/158-1200x600.jpg"),
        alt: "image 1",
      },
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.whycrossfit {
  background-color: slategray;

  .content {
    background-color: whitesmoke;
    position: relative;
    top: -40px;
    z-index: 2;
    padding: 2em;
    height: 950px;

    .whycrossfit-item {
        
        img {
            height: 200px;
            padding: unset;
            border: 0px;
            border-radius: 0rem;
        }

        .media-body {
            padding: 2rem;
        }
    }
  }
}
</style>