<template>
  <img src="../assets/jumbotron.jpg" class="img-fluid" alt="Responsive image">
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="member-panel">
        <h1>Memberships</h1>
        <div class="member-panel_item ">
          <h2>Unlimited Membership</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aut magni consequuntur autem? Nisi maxime mollitia, pariatur incidunt, dolores necessitatibus inventore explicabo in, facere saepe esse itaque officiis corrupti.</p>
          <ul>
            <li>Unlimited classes</li>
            <li>a lot of classes</li>
          </ul>
        </div>
        <div class="member-panel_item">
          <h2>Punchcard</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aut magni consequuntur autem? Nisi maxime mollitia, pariatur incidunt, dolores necessitatibus inventore explicabo in, facere saepe esse itaque officiis corrupti.</p>
          <ul>
            <li>Unlimited classes</li>
            <li>a lot of classes</li>
          </ul>
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
  .member-panel {
    position: relative;
    top: -50px;
    background-color: lightcoral;
    padding: 4em;

    .member-panel_item {
      background-color: lightgreen;
      width: 70%;
    }
  }

</style>