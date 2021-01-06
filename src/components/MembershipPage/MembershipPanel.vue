<template>
  <div class="membership-panel container">
    <div class="row justify-content-center">
      <div class="member-ind-panel col-md-10 m-5">
        <h1>Memberships</h1>
        <div class="member-panel_item m-5">
          <h2>Unlimited Membership</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aut magni consequuntur autem? Nisi maxime mollitia, pariatur incidunt, dolores necessitatibus inventore explicabo in, facere saepe esse itaque officiis corrupti.</p>
          <ul>
            <li>One Month Membership</li>
            <li>Unlimited classes</li>
            <li>a lot of classes</li>
          </ul>
          <h5><strong>Month-to-Month: </strong></h5><strike>$175</strike> $165
          <h5><strong>3 Month: </strong></h5><strike>$175</strike> $165
          <h5><strong>6 Month: </strong></h5><strike>$175</strike> $165
          <h5><strong>Full Year: </strong></h5><strike>$175</strike> $165
        </div>
        <div class="member-panel_item m-5">
          <h2>Punchcard</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aut magni consequuntur autem? Nisi maxime mollitia, pariatur incidunt, dolores necessitatibus inventore explicabo in, facere saepe esse itaque officiis corrupti.</p>
          <ul>
            <li>Unlimited classes</li>
            <li>a lot of classes</li>
          </ul>
          <h5><strong>Price: </strong></h5><strike>$155</strike> $140
        </div>
        <div class="member-panel_item m-5">
          <h2>Drop In</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aut magni consequuntur autem? Nisi maxime mollitia, pariatur incidunt, dolores necessitatibus inventore explicabo in, facere saepe esse itaque officiis corrupti.</p>
          <ul class="text-start">
            <li>Unlimited classes</li>
            <li>a lot of classes</li>
          </ul>
          <h5><strong>Price: </strong></h5>$20 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MembershipPanel'
}
</script>

<style lang="scss" scoped>

    .membership-panel {
    position: relative;
    top: -50px;
    background-color: white;

    // .member-ind-panel {}

        .member-panel_item {
            background-color: darkgray;
            padding: 30px;

            p {
                padding: 10px;
            }

            ul {
                padding: 20px;
            }

            h5 {
            }
        }

    }
</style>