<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <router-link :to="{ name: 'Home' }" class="navbar-brand"
      >CrossFit DV8
      <img class="" :src="state.logo" alt="" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'GettingStarted' }" class="nav-link"
            >Getting Started</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Schedule' }" class="nav-link"
            >Schedule</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Membership' }" class="nav-link"
            >Membership</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link"
            >About</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<!--  add class: active for when the page is on that tab -->
<script>
import { reactive } from "vue";
export default {
  name: "Navbar",
  setup() {
    const state = reactive({
      logo: require("@/assets/DV8-kettlebell-gradient-small.png"),
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  margin-left: 10px;
  transition: all 0.25s ease;

  &:hover {
    // transform: scale(1.1, 1.1);
  }

  img {
    position: fixed;
    margin-left: 1%;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.1, 1.1);
      margin-left: 1%;
    }
  }
}

.nav-item a {
  font-size: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
}
</style>