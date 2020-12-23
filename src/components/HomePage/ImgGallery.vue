<template>
  <div class="container-fluid">
    <div class="imggallery row">
      <div class="col-md-2">
        <img :src="state.img1.image" :alt="state.img1.alt" class="img-fluid" />
        <img :src="state.img2.image" :alt="state.img2.alt" class="img-fluid" />
        <img :src="state.img3.image" :alt="state.img3.alt" class="img-fluid" />
      </div>
      <div class="col-md-3">
        <img :src="state.img4.image" :alt="state.img4.alt" class="img-fluid" />
        <img :src="state.img4.image" :alt="state.img4.alt" class="img-fluid" />
      </div>
      <div class="col-md-3">
        <img :src="state.img4.image" :alt="state.img4.alt" class="img-fluid" />
        <img :src="state.img4.image" :alt="state.img4.alt" class="img-fluid" />
      </div>
      <div class="col-md-4">
        <img :src="state.img5.image" :alt="state.img5.alt" class="img-fluid" />
        <img :src="state.img6.image" :alt="state.img6.alt" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "ImgGallery",
  setup() {
    const state = reactive({
      img1: {
        key: 1,
        image: require("@/assets/342-400x400.jpg"),
        alt: "image 1",
      },
      img2: {
        key: 2,
        image: require("@/assets/342-400x400.jpg"),
        alt: "image 2",
      },
      img3: {
        key: 3,
        image: require("@/assets/342-400x400.jpg"),
        alt: "image 3",
      },
      img4: {
        key: 4,
        image: require("@/assets/495-600x600.jpg"),
        alt: "image 4",
      },
      img5: {
        key: 5,
        image: require("@/assets/254-1200x1200.jpg"),
        alt: "image 5",
      },
      img6: {
        key: 6,
        image: require("@/assets/158-1200x600.jpg"),
        alt: "image 6",
      },
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.imggallery {
  position: relative;
  // bottom: -50px;

  img {
    opacity: 0.6;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;

    &:hover {
      opacity: 1;
      transition: opacity 0.55s ease-in-out;
      -moz-transition: opacity 0.55s ease-in-out;
      -webkit-transition: opacity 0.55s ease-in-out;
    }
  }

  .col-md-2 {
    padding: unset;
  }

  .col-md-3 {
    padding: unset;
  }

  .col-md-4 {
    padding: unset;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>