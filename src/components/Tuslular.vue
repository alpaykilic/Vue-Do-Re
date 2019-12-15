<template>
<div>
    <!-- Aşağıdaki kısımda bootstrap cardlar kullanılarak tuşlular sayfasındaki tuşlu çeşitlerini içeren bölüm yazılmıştır.
      -- Bootstrap card kullanılmıştır. -->
    <div style="background-color: rgb(238,238,238)">
        <div class="container">
            <div class="row" style="width: 1170px;">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="baslik">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="line"></div>
                            </div>
                            <div class="col-md-2">
                                <h2 style="font-size:30px; color:black; font-weight:700;">TUŞLULAR</h2>
                            </div>
                            <div class="col-md-5">
                                <div class="line"></div>
                            </div>
                        </div> 
                    </div>
                    <br>
                    <br>
                    <div style="border-bottom:1px solid rgb(196,196,196)">
                        <b-card-group deck style="background-color:rgb(238,238,238);">
                            
                            <b-card 
                            @click="sayfaDegis" class="cardBorder" v-bind:img-src=urun.resim img-alt="Image" img-top
                            v-for="(urun,index) in items"
                            v-bind:item="post"
                            v-bind:index="index"
                            v-bind:key="urun.id"
                            >
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    {{urun.isim}}
                                </p>
                                <br>
                                <p style="font-size:15px;"> {{urun.miktar}} </p>
                            </b-card-body>
                            </b-card>
                        </b-card-group>

                        <b-card-group deck style="background-color:rgb(238,238,238); margin-top: 30px;">
                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/10f6d7e40d95cab50badd8dc4e430ead.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Mini Orglar
                                </p>
                                <br>
                                <p style="font-size:15px;">5 Ürün</p>
                            </b-card-body>
                            </b-card>

                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/a0985521a55c17ec48aaa9a5031ae631.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Launchpad'ler
                                </p>
                                <br>
                                <p style="font-size:15px;">4 Ürün</p>
                            </b-card-body>
                            </b-card>

                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/2f55cec9425852400514bc0c5ac01c8f.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Hammond Orglar
                                </p>
                                <br>
                                <p style="font-size:15px;">6 Ürün</p>
                            </b-card-body>
                            </b-card>


                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/cac3c60a6a0f622da93816c86ad1bf2b.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Akordiyonlar
                                </p>
                                <br>
                                <p style="font-size:15px;">20 Ürün</p>
                            </b-card-body>
                            </b-card>
                        </b-card-group>
                        <br>
                        <br>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
    <!-- Tuşluların markalarını gösteren slider için yazılan html kodları aşağıda bulunmaktadır.
      -- Slider bootstrap'in sitesinden örnek alınarak tasarlanmıştır-->
    <div class="container">
        <section>
                <div class="row" style="padding-top: 30px; padding-bottom: 10px;">
                    <h2 style="font-size:25px; color:rgb(39,39,39); font-weight:700; margin-left:20px;">Tuşlu Markaları</h2>      
                    </div>
        </section>
    </div>
    <div class="con-box">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        >
        
        
        <b-carousel-slide>
            <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/tmarka1.png"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <b-carousel-slide>
            <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/tmarka2.png"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        
        </b-carousel>

    
    </div>
    <!-- Tuşlular sayfasında bulunan tanıtım videoları aşağıda görüldüğü gibi kodlanmıştır. -->
    <div style="background-color: rgb(238,238,238)">
        <div class="container">
            <section>
                <div class="row" style="padding-top: 40px; padding-bottom: 10px;">
                    <h2 style="font-size:25px; color:rgb(39,39,39); font-weight:700; margin-left:20px;">Tuşlu Tanıtım Videoları</h2>      
                </div>
            </section>
            <div class="row" style="margin-top:15px;">
                <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/EMp229nCpo0/mqdefault.jpg)" >     
                    </button>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/oGychloYgis/mqdefault.jpg)" >     
                    </button>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/MaT8hKAU5bM/mqdefault.jpg)" >     
                    </button>
                    <p style="font-size:14px;">PSR-S670 Voice</p>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/eKAR5h3TTSw/mqdefault.jpg)" >     
                    </button>
                    <p style="font-size:14px;">Yamaha PSR-F51 Overview</p>
                </div>
            </div>
            <div style="border-bottom: 1px solid rgb(196,196,196)">
                <button style="font-size:28px; outline:none; border:none; background-color: transparent; margin-bottom:40px;">+ Tüm Tuşlu Tanıtım Videoları</button>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
// Sayfa değiştirmeyi sağlayan bus2 isimli eventbus.
import { bus2 } from '../main'
import Tuslular from '../Tuslular'

export default {

    data(){
        return{
            items: [],
            error: ''
        }
    },
    // Sayfa değiştirmeyi sağlayan fonksiyon.
    methods:{
        sayfaDegis(){
            bus2.$emit('sayfaDegisti','tusluUrunler')
        }
    },
    async created() {
    try {
      this.items = await Tuslular.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
}
</script>

<style scoped>
/* Template kısmında kullanılan elemanların style classları. */
.baslik {
    box-sizing: border-box;
    margin-top: 75px;;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    overflow: hidden;
    text-align: center;
}

.line {
    width: 450px;
    height: 20px;
    border-bottom: 1px solid rgb(196, 196, 196);
    position: absolute;
    margin-bottom: 50%;
}

.cardBorder{
    padding-top:40px; 
    height:520px;
    border-radius: 0%;
    border: 2px solid white;
}

.cardBorder:hover{
    border: 2px solid rgb(196, 196, 196);
}

.pStyle{
    font-weight:bold; 
    color:black; 
    font-size:17px; 
    margin-left:-25px; 
    margin-right:-25px;
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

.imageButton {
    height:145px; 
    width:260px; 
    background-size:100%; 
    border: none;
    outline: none;
}

</style>