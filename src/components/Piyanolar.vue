<template>
<div> 
    <!-- Aşağıdaki kısımda bootstrap cardlar kullanılarak piyanolar sayfasındaki piyano çeşitlerini içeren bölüm yazılmıştır. -->
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
                                <h2 style="font-size:30px; color:black; font-weight:700;">PİYANOLAR</h2>
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
                            
                            <b-card @click="sayfaDegis" class="cardBorder" v-bind:img-src=urun.resim img-alt="Image" img-top
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
                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/2362b3a1eee8000301f872c2a3fa44d1.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Dijital Taşınabilir Piyano
                                </p>
                                <br>
                                <p style="font-size:15px;">25 Ürün</p>
                            </b-card-body>
                            </b-card>

                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/d4a0b0e3c01707a2d1dbfb9134df1fb6.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Akustik Silent Piyanolar
                                </p>
                                <br>
                                <p style="font-size:15px;">27 Ürün</p>
                            </b-card-body>
                            </b-card>

                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/c11f581f63631261ace14142b8dd0112.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Akustik Disklavier Piyano
                                </p>
                                <br>
                                <p style="font-size:15px;">7 Ürün</p>
                            </b-card-body>
                            </b-card>


                            <b-card class="cardBorder" img-src="https://data.do-re.com.tr/ProductCategoryPhoto/22c2d71730090de5b173e18274a17f22.jpg" img-alt="Image" img-top>
                            <b-card-body class="text-center">
                                <div style="border-top: 2px solid rgb(196,196,196); width:40px; margin-left:auto; margin-right:auto;"></div>
                                <br>
                                <br>
                                <p class="pStyle">
                                    Akustik Duvar Piyanoları
                                </p>
                                <br>
                                <p style="font-size:15px;">51 Ürün</p>
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
    <!-- Burada ise piyano markaları yazan slider için gerekli html kodları yazılmıştır. -->
    <div class="container">
        <section>
                <div class="row" style="padding-top: 30px; padding-bottom: 10px;">
                    <h2 style="font-size:25px; color:rgb(39,39,39); font-weight:700; margin-left:20px;">Piyano Markaları</h2>      
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
        <!-- Text slides with image -->
        
        <b-carousel-slide>
            <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/pmarka1.png"
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
                src="../assets/pmarka2.png"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        
        </b-carousel>

    
    </div>
    <!-- Piyanolar sayfasındaki tanıtım videoları kısmı bulunmaktadır. -->
    <div style="background-color: rgb(238,238,238)">
        <div class="container">
            <section>
                <div class="row" style="padding-top: 40px; padding-bottom: 10px;">
                    <h2 style="font-size:25px; color:rgb(39,39,39); font-weight:700; margin-left:20px;">Piyano Tanıtım Videoları</h2>      
                </div>
            </section>
            <div class="row" style="margin-top:15px;">
                <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/tkyIaOSDHYo/mqdefault.jpg)" >     
                    </button>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/GT4pJCKOXPg/mqdefault.jpg)" >     
                    </button>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/D4Vlchuckk4/mqdefault.jpg)" >     
                    </button>
                    <p style="font-size:14px;">Yamaha SILENT Piano™ SH2/SC2 Overview</p>
                </div>
                 <div class="col-md-3">
                    <button class="imageButton" style="background-image: url(https://img.youtube.com/vi/m13bU4Zrtyw/mqdefault.jpg)" >     
                    </button>
                    <p style="font-size:14px;">Yamaha YDP143 Dijital Piyano Tanıtımı ve İncelemesi</p>
                </div>
            </div>
            <div style="border-bottom: 1px solid rgb(196,196,196)">
                <button style="font-size:28px; outline:none; border:none; background-color: transparent; margin-bottom:40px;">+ Tüm Piyano Tanıtım Videoları</button>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
// event bus kullanılarak aşağıdaki metot içerisinde akustik piyanolar sayfasına geçiş sağlandı.
import { bus2 } from '../main'
import Piyanolar from '../Piyanolar'
export default {

    data(){
        return{
            items: [],
            error: ''
        }
    },
    methods:{
        sayfaDegis(){
            bus2.$emit('sayfaDegisti','piyanoUrunler')
        }
    },
    async created() {
    try {
      this.items = await Piyanolar.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
}
</script>

<style scoped>
/* Bu kısımda html kısmı içerisinde yazılan div, buton vb. html kodlarının boyutu, 
şekli gibi özelliklerini ayarladığımız css sınıfları bulunuyor. */
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