<template>
  <div id="app">
    <Header />
    <Navbar />
    <Slider />
    <MarkalarContent />
    <Slick />
    <TabNavSection />
    <Banner />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Slider from './components/Slider.vue'
import MarkalarContent from './components/MarkalarContent.vue'
import Slick from './components/Slick.vue'
import TabNavSection from './components/TabNavSection.vue'
import Banner from './components/Banner.vue'


export default {
  name: 'app',
  components: {
    Header,
    Navbar,
    Slider,
    MarkalarContent,
    Slick,
    TabNavSection,
    Banner
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

.con-box {
box-sizing: border-box;
margin: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
margin-right: auto;
margin-left: auto;
padding-left: 15px;
padding-right: 15px;
width: 1100px;
padding-bottom: 40px;
border-bottom: 1px solid #e0e0e0;
}

</style>
