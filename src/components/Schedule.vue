<template>
  <img src="../assets/jumbotron.jpg" class="img-fluid" alt="Responsive image">
  <div class="container schedule-panel clearfix">
    <div class="row">
      <div class="schedule-panel col-md-8">
        <h1>Schedule</h1>
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
export default {

}
</script>

<style lang="scss" scoped>
  img {
    height: 500px;
  }

  .schedule-panel {
    position: relative;
    top: -50px;
    background-color: lightcoral;
    padding: 4em;

    h1 {
      margin: 2em;
    }
  }

</style>