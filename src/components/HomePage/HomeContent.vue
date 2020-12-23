<template>
  <div class="row justify-content-center">
    <div class="col-md-6 panel">
      <div class="content">
        <h1>Be the New You!</h1>
        <br />
        <p>
          Our community is unlike any in Rochester. Warm and welcoming to all
          who walk through its doors, our athletes are quick to give
          encouragement and support to everyone. Athletes become friends, and
          friends become family at DV8.
        </p>
        <p>
          We strive to create an environment that makes everyone feel
          comfortable, and we believe every athlete has the potential to be
          great! Come in and see us between the Firestone building and Sargent
          Appliance.
        </p>
        <p>
          Whether you’re new to fitness or an accomplished athlete, our coaches
          are highly trained and certified to help you set goals, teach proper
          form to prevent injury, and design training programs that include
          basic barbell exercises, olympic lifts, kettlebells, gymnastics,
          running, rowing, throwing, and a long list of bodyweight movements.
        </p>
        <p>
          Here, you’ll never feel lost, alone or confused about what exercises
          to do or how to do them. That’s because your CrossFit DV8 membership
          includes a lot more than just a room full of equipment. We’ll take
          care of everything—just show up ready to move and let the
          transformation begin.
        </p>
        <p>
          We believe in functional fitness. And there's also talk about that
          mountain bike trip in Arizona with friends...or a 5k that seemed once
          impossible...or a Breast Cancer Walk...or traveling around the
          world...or finally finding a gym that is home to you. And when we
          settle in for the night, out excitement builds for what tomorrow
          challenge is.
        </p>
        <br />
        <v-button :button="state.button" />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import GettingStartedButton from "@/components/GettingStartedButton"

export default {
  name: "HomeContent",
  components: { 'v-button': GettingStartedButton },
  setup() {
    const state = reactive({
      button: { id: 1, href: '/gettingstarted', content: 'Are You Ready!', router_link: 'GettingStarted'}
    });
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  height: 625px;

  .panel {
    // position: relative;

    .content {
      // position: absolute;
      position: relative;
      top: -40px;
      z-index: 2;
      height: 700px;
      padding: 2em;
      background-color: white;

      &::after {
        content: "";
        display: table;
        clear: both;
      }

      h2 {
        color: black;
        transition: all 0.25s ease;

        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
}
</style>
