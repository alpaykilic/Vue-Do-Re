<template>
  <div id="app" style="margin-top: 10px;">
    <Header />
    <div class="main-container">
    <Navbar class="navbar"/>
    <!--<img alt="Vue logo" src="../src/assets/1.jpg"> Fotograf directoryisi -->
    <Slider/>
    <div style="background-color:rgb(246,246,246);">
      <MarkalarContent/>
      <Slick class="con-box"/>
      <TabNavSection style="background-color:white;"/>
      
    </div>
    <Banner />
    <IconSection />
    <Footer />
    <SlickCard />
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import MarkalarContent from './components/MarkalarContent.vue'
import TabNavSection from './components/TabNavSection.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import IconSection from './components/IconSection.vue'
import Slick from './components/Slick.vue'



export default {
  name: 'app',
  components: {
    Slider,
    MarkalarContent,
    TabNavSection,
    Footer,
    Header,
    Navbar,
    Banner,
    IconSection,
    Slick
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

.navbar{
  position: sticky;
  z-index: 5;
}

.nav-item{

  font-size: 25px;
  font-weight: bold;
 
}

.nav-item:hover{

  text-decoration: none;
  color: black;
  
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
