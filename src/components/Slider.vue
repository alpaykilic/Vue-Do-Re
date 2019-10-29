<template>
  <div >
    <section>
      <div class="container" style="padding-top: 75px;">
        <div  class="row">
          <div style="border:1px solid white; padding:0px;" class="col-md-8">

             <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://data.do-re.com.tr/Headline/back-to-school-bed047621119a4deb72d9ae9968bcc01-large.jpg">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://data.do-re.com.tr/Headline/kurzweil-casio-piyano-modelleri-200d90800ec50337ecfdd08b85e93070-large.jpg">        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://data.do-re.com.tr/Headline/klasik-gitar-modelleri-552fd0ac7fc4f0d9dbefef625fd8c475-large.jpg">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="https://data.do-re.com.tr/Headline/tasinabilir-piyano-ve-klavye-kampanyasi-abf25076b8a9fdb64817e0a36622b9bc-large.jpg">      
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-src="https://data.do-re.com.tr/Headline/yamaha-ydp-serisi-dijital-piyanolar-6331b3b51f58ffeb317d22d0061058bf-large.jpg">     
      </b-carousel-slide>

      <b-carousel-slide  img-src="https://data.do-re.com.tr/Headline/yamaha-b1-akustik-duvar-piyanosu-modelleri-4e2c3b46a148a6b81747da9a4ffde5ab-large.jpg">     
      </b-carousel-slide>

      <b-carousel-slide  img-src="https://data.do-re.com.tr/Headline/yamaha-dtx-400-serisi-dijital-davul-modelleri-f1620ce2a4ac79cff09621e30ccd4e90-large.jpg">     
      </b-carousel-slide>

    </b-carousel>
              <div class="w3-content" style="max-width:1200px">
                <div class="slide-images">
                    <b-container class="bv-example-row" style="margin: 0 auto;">
                      <b-row>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/back-to-school-bed047621119a4deb72d9ae9968bcc01-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/kurzweil-casio-piyano-modelleri-200d90800ec50337ecfdd08b85e93070-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/klasik-gitar-modelleri-552fd0ac7fc4f0d9dbefef625fd8c475-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/tasinabilir-piyano-ve-klavye-kampanyasi-abf25076b8a9fdb64817e0a36622b9bc-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/yamaha-ydp-serisi-dijital-piyanolar-6331b3b51f58ffeb317d22d0061058bf-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px;"><img src="https://data.do-re.com.tr/Headline/yamaha-b1-akustik-duvar-piyanosu-modelleri-4e2c3b46a148a6b81747da9a4ffde5ab-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                        <b-col style="width: 23px; margin-right: 10px;"><img src="https://data.do-re.com.tr/Headline/yamaha-dtx-400-serisi-dijital-davul-modelleri-f1620ce2a4ac79cff09621e30ccd4e90-thumb.jpg" style="padding-top: 20px;" usemap="#slidebox"></b-col>
                      <map name="slidebox">
                        <area shape="rect" coords="0,0,109,71" href="#" alt="picture">
                      </map>

                      </b-row>
                    </b-container>
                </div>
  

  <div class="w3-row-padding w3-section">
    <div class="w3-col s4">
      <img class="demo w3-opacity"
      style="width:100%" onclick="currentDiv(1)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity" 
      style="width:100%;display:none" onclick="currentDiv(2)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity" 
      style="width:100%;display:none" onclick="currentDiv(3)">
    </div>
  </div>
</div>
          
          </div>
          <div style="border:1px solid #e0e0e0; padding:0px; margin-left: 20px;" class="col-md-3 text-center">
              <div style="height:90px; border:1px solid #e0e0e0; width:100%; border-bottom: none;">
                <h2 style="padding:20px;"><small>Fırsat Ürünleri</small></h2>
              </div>
              <div>
                <div style="padding: 10px; border: 1px solid #e0e0e0; margin: 9px;">
                <Countdown deadline="November 11, 2019"></Countdown>
                </div>
            </div>
              <div style="margin:0 auto;" class="row">
                   <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="grey;"
      img-width="300"
      img-height="400"
      
      style="text-sadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      
      <b-carousel-slide img-blank img-alt="Blank image">
        
        <img style="width: 150px; height: 150px;" src="https://www.do-re.com.tr/yamaha-yfl212-yan-flut-cc87a63217707a1cc654b406e8b3af2e-3d7919624f71a9f435778564bbdffb57-mid-pp.jpg" />
        
        <p class="yazi" style="padding-top: 5px;">
          Yamaha YFL212 Yan Flüt
        </p>
        <p class="yazi2"  style="padding-top: 5px; text-decoration: line-through; color: grey;">
          5,406.87 TL
        </p>
        <p class="yazi" style="padding-top: 0px; font-size: 18px;">
          3,799.80 TL
        </p>

        <button @click="tikla(8)" class="buttons">SEPETE EKLE</button>
      </b-carousel-slide>

      <b-carousel-slide img-blank img-alt="Blank image">
        
        <img style="width: 150px; height: 150px;" src="https://www.do-re.com.tr/epiphone-pro-1-klasik-gitar-b1a38435070a172f8bc294adbc7a6d59-30b46357c660c8059cb05b7c994919f0-mid-pp.jpg" />
        
        <p class="yazi" style="padding-top: 5px;">
          Epiphone Pro-1 Klasik Gitar
        </p>
        <p class="yazi2"  style="padding-top: 5px; text-decoration: line-through; color: grey;">
          890.00 TL
        </p>
        <p class="yazi" style="padding-top: 0px; font-size: 18px;">
          700.20 TL
        </p>

        <button @click="tikla(9)" class="buttons">SEPETE EKLE</button>
      </b-carousel-slide>

      <b-carousel-slide img-blank img-alt="Blank image">
        
        <img style="width: 150px; height: 150px;" src="https://www.do-re.com.tr/rosler-rs3a-keman-4-4-56727db9a69f8817201ccdd51c400ad9-e2680e7692750f4ad284f08097eaef34-mid-pp.jpg" />
        
        <p class="yazi" style="padding-top: 5px;">
          Rösler RS3A Keman (4/4)
        </p>
        <p class="yazi2"  style="padding-top: 5px; text-decoration: line-through; color: grey;">
          1,299.00 TL
        </p>
        <p class="yazi" style="padding-top: 0px; font-size: 18px;">
          990.00 TL
        </p>

        <button @click="tikla(10)" class="buttons">SEPETE EKLE</button>
      </b-carousel-slide>

      <b-carousel-slide img-blank img-alt="Blank image">
        
        <img style="width: 150px; height: 150px;" src="https://www.do-re.com.tr/casio-ap-260bk-celviano-dijital-piyano-mat-siyah-026ba3e2991b906106d454b87202fe31-3f87b36d8bca35fd63daee2950c001ea-mid-pp.jpg" />
        
        <p class="yazi" style="padding-top: 5px;">
          Casio AP-260BK Celviano Dijital Piyano (Mat Siyah)
        </p>
        <p class="yazi2"  style="padding-top: 5px; text-decoration: line-through; color: grey;">
          4,900.00 TL
        </p>
        <p class="yazi" style="padding-top: 0px; font-size: 18px;">
          3,550.00 TL
        </p>

        <button @click="tikla(11)" class="buttons">SEPETE EKLE</button>
      </b-carousel-slide>
     
    </b-carousel>

  </div>
              </div>
            
              <!-- Carousel right -->
          </div>

        </div>
      </div>
    </section>
    
  </div>
</template>

<script> 

import Countdown from 'vuejs-countdown'
import { urunBus } from '../main'

export default {
  components: { Countdown },
  data(){
    return{
        
    }
  },
  methods:{
    tikla(butonId){
      urunBus.$emit('urunEklendi', butonId)
      this.$bvModal.show('bv-modal-example') 
    }
  }
}

  
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#carousel-1{
  background-color: white;
}


.indicator-list-item li{
  height: 50px !important;
  border:1px solid white !important;
  margin:10px;
  float:left;
  list-style:none;
}

.yazi{
  color:black;
  font-size: 15px;
  font-weight: bold;
}

.yazi2{
  color: grey;
  font-size: 14px;
  text-decoration: line-through;
}

.buttons{
    background-color: black;
    border: black;
    border-radius: 0%;
    font-size: 13px;
    font-weight: bold;
    color: white;
    padding: 6px 12px;
}

.buttons:hover{
    background-color: darkorange;
    border: black;
}

</style>
