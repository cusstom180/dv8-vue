<template>
  <Navbar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:   #ecf0f1  ;
}
</style>
