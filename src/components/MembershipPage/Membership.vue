<template>
    <v-OpeningImage />
    <v-MembershipPanel /> 
</template>

<script>
import OpeningImage from '../MembershipPage/OpeningImage'
import MembershipPanel from '../MembershipPage/MembershipPanel'

export default {
  name: 'Membership',
  components: {
    'v-OpeningImage': OpeningImage,
    'v-MembershipPanel': MembershipPanel
  }

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