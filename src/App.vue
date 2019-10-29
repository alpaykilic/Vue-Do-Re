<template>
  <div id="app" style="margin-top: 10px;">
    <Header />
    <div class="main-container">
    <Navbar class="navbar"/>
    <div v-show="this.component == 'mainpage'">
    <Anasayfa />
    </div>
    <div v-show="this.component == 'sepetim'">
    <Sepetim />
    </div>
    <!--<router-view></router-view> -->
    <Footer />
    </div>
    <LiveSupport class="sup-position"/>
    <Modal />
  </div>
</template>

<script>

import { bus2 } from './main'

import Anasayfa from './components/Anasayfa.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import LiveSupport from './components/LiveSupport.vue'
import Sepetim from './components/Sepetim.vue'
import Modal from './components/Modal.vue'


export default {
  name: 'app',
  data(){
    return{
      toplamUrun: 0,
      component: 'mainpage',
    }
  },

  components: {
    Footer,
    Header,
    Navbar,
    Anasayfa,
    Sepetim,
    LiveSupport,
    Modal,
  },

  methods:{
    clickMe(){
      this.component = 'sepetim'
    }
  },

  created(){
        bus2.$on('sayfaDegisti',(data) => {
            this.component = data
        })
    },

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

.sup-position {
  position:fixed;
  bottom: 0;
  right: 5px;
  background-color: #7fb06f;
  height: 45px;
}
.btn-secondary {
  background-color:#7fb06f!important;
  border-color: #7fb06f !important;
  margin-top: -5px;
  
}

</style>
