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

    <div v-show="this.component == 'piyano'">
      <Piyanolar />
    </div>

    <div v-show="this.component == 'tuslu'">
      <Tuslular />
    </div>

    <div v-show="this.component == 'iletisim'">
      <Iletisim />
    </div>

    <div v-show="this.component == 'piyanoUrunler'">
      <PiyanoUrunleri />
    </div>
    <div v-show="this.component == 'tusluUrunler'">
      <TusluUrunleri />
    </div>
    <div v-show="this.component == 'login'">
      <Login />
    </div>
    <div v-show="this.component == 'register'">
      <Register />
    </div>
    <div v-show="this.component == 'urun1'">
      <Urun1 />
    </div>
    <div v-show="this.component == 'urun2'">
      <Urun2 />
    </div>
    <div v-show="this.component == 'arama'">
      <Arama />
    </div>
    
    <!--<router-view></router-view> -->
    
    </div>
    <LiveSupport class="sup-position"/>
    <Modal />
    <div class="sup-position2">
    <b-dropdown id="dropdown-form-dropup" @click="seen = false" dropup text="Footer" ref="dropdown" class="m-2" style="border-radius: 8px 8px 0px 0px; width:220px; padding: 0;" > 
    <b-dropdown-form style="height:505px; margin-right:-215px;">
      <Footer style="transform: scale(0.5)"/>
    </b-dropdown-form>
    </b-dropdown>
    </div>
    
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
import Piyanolar from './components/Piyanolar.vue'
import Tuslular from './components/Tuslular.vue'
import Iletisim from './components/Iletisim.vue'
import PiyanoUrunleri from './components/PiyanoUrunleri.vue'
import TusluUrunleri from'./components/TusluUrunleri.vue'
import Urun1 from'./components/Urun1.vue'
import Urun2 from'./components/Urun2.vue'
import Login from'./components/Login.vue'
import Register from'./components/Register.vue'
import Arama from'./components/Arama.vue'

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
    Piyanolar,
    Tuslular,
    Iletisim,
    PiyanoUrunleri,
    TusluUrunleri,
    Urun1,
    Urun2,
    Login,
    Register,
    Arama
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

.sup-position2 {
  position:fixed;
  bottom: 0;
  left: 0px;
  background-color: rgb(246,246,246);
  height: 45px;
  z-index: 20;
}
.btn-secondary {
  background-color:#7fb06f!important;
  border-color: #7fb06f !important;
  margin-top: -5px;
  
}

</style>
