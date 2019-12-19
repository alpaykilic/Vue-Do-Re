<template>
  <div class="main-container">
      <div style="padding-top:80px;">
          <b-container style="background-color: #f6f6f6;"> <!-- BREADCRUMB -->
              <b-row style="background-color: #f6f6f6;">
                  <button @click="sayfaDegis(1)" style="outline:none; background-color:transparent; border:none;"> Ana Sayfa > </button> 
                  <button @click="sayfaDegis(2)" style="outline:none; background-color:transparent; border:none;"> Piyanolar > </button>
                  <p style="color: gray; padding-top:16px;"> Akustik Duvar Piyanoları</p>
              </b-row>
          </b-container>

          <b-container> <!-- MAIN LAYOUT -->
              <b-row>
                <b-col class="col-md-3" style="height: 750px; margin-right: 15px;"> <!-- LEFT SIDE -->
                    <b-row style="height: 360px; width: 290px; background-color: white;"> <!-- MARKALAR -->
                        <b-col>
                            <b-row> 
                                <p style="margin-left:14px; margin-top: 5%; font-size: 18px; font-weight: 800;">Markalar</p>
                            </b-row>
                            <ul v-for="item in markalar" :key="item.id">
                                <li>
                                    <b-row> 
                                        <b-form-checkbox style="margin-left: -25px;" v-model="status" name="checkbox-1"
                                                             value="accepted" unchecked-value="not_accepted">
                                        </b-form-checkbox>
                                      <p style="margin: 0; color: #272727;">{{ item.ad }}</p>  
                                    </b-row>
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                    <b-row style="height: 120px; width:290px; margin-top:15px; background-color: white;"> <!-- Satıştaki Ürünler -->
                        <b-col style="width: 260px; height: 117px;">
                            <b-row>
                                <p style="margin-left:14px; margin-top: 5%; font-size: 18px; font-weight: 800;">Satıştaki Ürünler</p>
                            </b-row>
                            <b-row>
                                <b-form-checkbox style="margin-left: 12px;" v-model="status" name="checkbox-2"
                                    value="accepted" unchecked-value="not_accepted">
                                </b-form-checkbox>
                                <p style="margin: 0; color: #272727;"> Sadece satıştaki ürünleri göster</p>  
                            </b-row>
                        </b-col>
                    </b-row> 
                    <b-row style="height: 112px; width: 290px; background-color:white; margin-top: 15px;"> <!-- FİYAT -->
                            <b-col>
                                <b-row><p style="margin-left:14px; margin-top: 5%; font-size: 18px; font-weight: 800;">Fiyat</p></b-row>
                                <b-row>
                                    <input style="width: 65px; height: 30px; background-color: #e3e3e3; margin-left: 5%; border:none; color:black; padding-left:5px;" type="number">
                                    <p style="margin-left: 7%; margin-right: 7%;">-</p>
                                    <input style="width: 65px; height: 30px; background-color: #e3e3e3; border:none; color:black; padding-left:5px;" type="number">
                                    <button style="height: 30px; margin-left: 10px; background-color:white; border:none;">
                                        <img src="../assets/ok.png" style="width: 100%; height: auto;">
                                    </button>

                                </b-row>
                            </b-col>
                    </b-row>
                </b-col> 
                <b-col class="com-md-9" style="height: 1000px">  <!-- RIGHT SIDE -->
                    <b-row class="upper-text-section"  style="height: 100px;"> <!-- UPPER TEXT SECTION -->
                        <b-col>
                            <b-row style="height: 45%;">
                                <h2>Duvar Piyano Fiyatları ve Modelleri</h2>
                            </b-row>
                            <b-row  style="height: 35%;">
                                <p>73 adet ürün bulunmaktadır</p>
                            </b-row>
                            <b-row style="height: 20%; float:right;">
                                <b-form-select v-model="selected" @change="sirala" size="sm" >
                                    <option value="a" disabled>Sıralamak İçin Seçiniz</option>
                                    <option value="b" >Alfabetik Sırala [A-Z]</option>
                                    <option value="c" >Ucuzdan Pahalıya Sırala</option>
                                </b-form-select>
                            </b-row>
                        </b-col>
                        
                    </b-row>
                    <b-row v-show="sayfa==1" class="cards-1" style=" margin-top: 50px;"
                    > <!-- CARDS SECTION PART I -->
                        <b-col style="height: 455px; width: 220px; text-align:Center" class="col-md-3"
                        v-for="(urun,index) in urunler"
                        v-bind:item="urun"
                        v-bind:index="index"
                        v-bind:key="urun.id"
                        >
                            <b-card @click="sayfaDegis(3)" v-bind:img-src=urun.resim img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    {{urun.isim}}
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    {{urun.fiyat}} TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                {{urun.taksit}} TL
                                
                            </b-card>
                        </b-col>
                    </b-row>
                    
                    <b-row v-show="sayfa==2" class="cards-3" style=" margin-top: 50px;"> <!-- CARDS SECTION PART III -->
                        <b-col style="height: 455px; width: 220px; text-align:Center">
                             <b-card img-src="https://www.do-re.com.tr/yamaha-b2-akustik-duvar-piyanosu-parlak-ceviz-a5aecad725a671be13d95b7a733beec9-bd89de26de3bf847700335a810ddbd0e-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha B2 Akustik Duvar Piyanosu (Parlak Ceviz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    35,922.29 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                39,913.66 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-b2sgpm-silent-duvar-piyanosu-parlak-maun-dd107f2d4f7496af6fd4b33f52fb4849-19c3c9be091f505cca7fd0409bd1f49c-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    YAMAHA B2SGPM Silent Duvar Piyanosu (Parlak Maun)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    42,698.41 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                47,442.68 TL       
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/seiler-model-116-ritmo-akustik-duvar-piyanosu-siyah-3fa8a789324d096f8aa1dc12fcfb5253-6c071a3317b34efa8933d507abe23f5d-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Seiler Model 116 Ritmo Akustik Duvar Piyanosu (Siyah)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    63,604.33 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                70,671.48 TL    
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/pearl-river-up118-akustik-duvar-piyanosu-parlak-ceviz-057523ea345f41e9cbaa8c80a15ae83d-7d46d8480b78c9e1933e22faf1198220-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Pearl River UP118 Akustik Duvar Piyanosu (Parlak Ceviz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    16,810.20 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                18,678.00 TL
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row v-show="sayfa==2" class="cards-2" style="height: 350px;"> <!-- CARDS SECTION PART IV-->
                        <b-col style="height: 455px; width: 220px; text-align:center;">
                             <b-card img-src="https://www.do-re.com.tr/pearl-river-up115m2-akustik-duvar-piyanosu-parlak-ceviz-14a972ed1748725a5da2992267b27a8a-47e34dc9d0d85f9a3723e92dd37824a6-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Pearl River UP115M2 Akustik Duvar Piyanosu (Parlak Ceviz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    15,099.30 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                16,777.00 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-b1-akustik-duvar-piyanosu-parlak-beyaz-e6b638b03ef70b464f7518a3426aabd5-4fa29d79020c1758f07b75a18a3dea69-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha B1 Akustik Duvar Piyanosu (Parlak Beyaz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                  26,963.69 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                29,959.66 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-b1-akustik-duvar-piyanosu-parlak-ceviz-d7c1ccd9f0870bf9da269afbfc66954d-ef68a75ab28737d76a9a44a12e2a490d-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                   Yamaha B1 Akustik Duvar Piyanosu (Parlak Ceviz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                   26,963.69 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                29,959.66 TL   
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-yus5-akustik-duvar-piyanosu-parlak-siyah-5cff7bdebae915eaa82af3638e58975d-a1ce71bcb80a678d58da7e2cab203b65-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha YUS5 Akustik Duvar Piyanosu (Parlak Siyah)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    104,256.18 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                115,840.20 TL
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
              </b-row>

              <b-row class="pagination" style="margin-top:50px; padding-bottom:20px;">   <!-- 2. ürün sayfasına geçiş butonları -->
                  <button @click="chgPage(1)" class="chgBut" style="margin-left:55%; ">1</button>
                  <button @click="chgPage(2)" class="chgBut">2</button>
              </b-row>
              
          </b-container>
      </div>
  </div>
</template>

<script>
// Event bus ile breadcrumbs kısmındaki yazılara tıklayarak anasayfa ya da bir önceki piyanolar sayfasına geri dönüş sağlanıyor.
import { bus2 } from '../main'
import PiyanoUrun from '../PiyanoUrun'
import AdSirala from '../AdSirala'
import FiyatSirala from '../FiyatSirala'

export default {
  name: 'Pianos',
  
  data(){
      return{
          // Piyano markalarını yazdırmak için kullanılan dizi
          markalar: [
                  { id: '01', ad: "Blüthner"},          
                  { id: '02', ad: "Eduard Seiler"},          
                  { id: '03', ad: "Johannes Seiler"},          
                  { id: '04', ad: "Pearl River"},          
                  { id: '05', ad: "Ritmüller"},          
                  { id: '06', ad: "Seiler"},          
                  { id: '07', ad: "Yamaha"}       
          ],
          selected: 'a',
          // Sıralama yapmak için kullanılan select elemanının içeriği
        sayfa:1,
        urunler: [],
        error: '',
        urunler2: [],
        urunler3: []
      }
  },
  methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
        // Sayfa değiştirmeyi sağlayan eventbus metodu. Butondan gönderilen parametreye göre geçiş sağlanır.
      sayfaDegis(id){
          if(id==1){
            bus2.$emit('sayfaDegisti','mainpage')
          }
          else if(id==2){
            bus2.$emit('sayfaDegisti','piyano')
          }
          else if(id==3){
            bus2.$emit('sayfaDegisti','urun1')
          }
      },

      chgPage(id){
          this.sayfa=id
      },
      sirala() {
          if(this.selected == 'b')
          {
              this.urunler = this.urunler2
          }
          else
          {
              this.urunler = this.urunler3
          }
      }
    },
    async created() {
    try {
      this.urunler = await PiyanoUrun.getPosts();
      this.urunler2 = await AdSirala.getPosts();
      this.urunler3 = await FiyatSirala.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
}
</script>

<style scoped>
/* Kullanılan style classları aşağıda yazılmıştır. */
li{
    list-style-type: none;
}

.main-container{
    background: #f6f6f6 !important;
}

.mb-2{
    height: 90%;
}

.cardStyle{
    border: 1px solid transparent;
}

.cardStyle:hover{
    border: 1px solid rgb(146,146,146);
}


input::-webkit-outer-spin-button, /* ----NUMBER INPUTTAKI OKLARIN GİZLENMESİNİ SAĞLIYOR--------- */
input::-webkit-inner-spin-button {
    
    -webkit-appearance: none;
    margin: 0;
}

.chgBut{
    background-color: white; 
    color:#505050; 
    height:32px; 
    width:32px; 
    border:1px 
    solid rgb(146,146,146); 
    outline:none; 
    margin-right:2px;
}

.chgBut:hover, :focus{
    background-color:rgb(0,99,209);
    color:white;
}

</style>
