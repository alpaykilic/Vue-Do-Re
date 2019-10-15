<template>
  <div id="app">
    <Header />
    <Navbar />
    <slider />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Slider from './components/Slider.vue'


export default {
  name: 'app',
  components: {
    Header,
    Navbar,
    Slider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
