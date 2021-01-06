<template>
  <v-OpeningImage />
  <div class="container schedule-panel clearfix">
    <div class="row justify-content-center">
      <div class="schedule-panel col-md-12">
        <h1>Our Schedule</h1>
        <h5 class="m-5 p-5">Whether your goals are enhanced athletic performance, weight loss, health, longevity, or elevating your training, our mission is to enable you to look, feel and perform at your best.</h5>
        <p class="m-5 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi pariatur sapiente veritatis mollitia, sequi consequatur nam, minus velit odio porro ullam culpa, natus quidem aliquid assumenda maxime cumque ipsam.</p>
        <div class="">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=1908" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import OpeningImage from "../SchedulePage/OpeningImage"
export default {
  name: "Schedule",
  components: {
    'v-OpeningImage': OpeningImage
  }

}
</script>

<style lang="scss" scoped>
  img {
    height: 500px;
  }

  .schedule-panel {
    position: relative;
    top: -50px;
    background-color: white;
    // padding: 4em;

    h1 {
      margin: 2em;
    }
  }

</style>