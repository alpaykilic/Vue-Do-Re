<template>
<main id="home">
    <Slider />
    <div style="background-color:rgb(246,246,246);"> 
        <MarkalarContent/>
        <Slick/>
        <TabNavSection style="background-color:white;"/>
    </div>
    <Banner />
    <IconSection />
</main>
</template>

<script>
// Gerekli bileşenler import edildi.
import MarkalarContent from '../components/MarkalarContent.vue'
import TabNavSection from '../components/TabNavSection.vue'
import Banner from '../components/Banner.vue'
import IconSection from '../components/IconSection.vue'
import Slick from '../components/Slick.vue'
import Slider from '../components/Slider.vue'

  export default {
    name: 'Home',
    components: { 
        MarkalarContent,
        TabNavSection,
        Banner,
        IconSection,
        Slick,
        Slider
    },
    data(){
      return{
        toplamUrun: 0
      }
    },
    
  }
</script>