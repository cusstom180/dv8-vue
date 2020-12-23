<template>
    <div class="jumbotron-fluid clearfix">
        <div class="col-md-6 offset-md-6">
            <p class="lead"><strong>A fitter, faster You!</strong></p>
            <h1 class="display-4">Fitness is your key to a happier life!</h1>
            <hr class="my-4">
            <v-button :button="state.button" />
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import GettingStartedButton from "@/components/GettingStartedButton"

export default {
    name: "Jumbotron",
    components: { 'v-button': GettingStartedButton },
  setup() {
    const state = reactive({
      button: { id: 1, href: '/gettingstarted', content: 'Get Started!', router_link: 'GettingStarted'}
    });
    return {
      state
    }
  }

}
</script>

<style lang="scss" scoped>
    @import "node_modules/bootstrap/scss/functions";
    @import "node_modules/bootstrap/scss/variables";
    @import "node_modules/bootstrap/scss/mixins/_breakpoints";

    .jumbotron-fluid{
        background-image: url('~@/assets/jumbotron.jpg');
        background-position: center bottom;
        background-size: cover;
        color: whitesmoke;
        padding: 20rem;

        .btn {
            color: whitesmoke;
            border-color: whitesmoke;
            cursor: pointer;
            transition: all 0.25s ease;

            &:hover {
                // background-color: rgba(245, 245, 245, 0.4);
                background-color: rgba(185, 241, 133, 0.4);
                color: black;
                transform: scale(1.1, 1.1);
                border-color: black;

            }
        }

        @media (max-width: 768px) {
            padding: unset;
            
        }
    }

    
</style>