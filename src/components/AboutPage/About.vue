<template>
  <div class="container-fluid">
      <v-AboutOpeningImage />
      <v-AboutPanel />
  </div>
</template>

<script>
import AboutOpeningImage from '../AboutPage/AboutOpeningImage'
import AboutPanel from '../AboutPage/AboutPanel'

export default {
    name: 'About',
    components: {
        'v-AboutOpeningImage': AboutOpeningImage,
        'v-AboutPanel': AboutPanel
    }

}
</script>

<style lang="scss" scoped>
    .container-fluid {
            padding: 0px;
        }

</style>