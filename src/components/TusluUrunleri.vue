<template>
  <div class="main-container">
      <div style="padding-top:80px;">
          <b-container style="background-color: #f6f6f6;"> <!-- BREADCRUMB -->
              <b-row style="background-color: #f6f6f6;">
                  <button @click="sayfaDegis(1)" style="outline:none; background-color:transparent; border:none;"> Ana Sayfa > </button> 
                  <button @click="sayfaDegis(2)" style="outline:none; background-color:transparent; border:none;"> Tuşlular > </button>
                  <p style="color: gray; padding-top:16px;"> Eğitim Klavyeleri & Orglar </p>
              </b-row>
          </b-container>

          <b-container> <!-- MAIN LAYOUT -->
              <b-row>
                <b-col class="col-md-3" style="height: 750px; margin-right: 15px;"> <!-- LEFT SIDE -->
                    <b-row style="height: 230px; width: 290px; background-color: white;"> <!-- MARKALAR -->
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
                    <b-row style="height: 180px; width: 290px; background-color: white; margin-top:15px;"> <!-- Tuş Sayıları -->
                        <b-col>
                            <b-row> 
                                <p style="margin-left:14px; margin-top: 5%; font-size: 18px; font-weight: 800;">Tuş Sayısı</p>
                            </b-row>
                            <ul v-for="item in tusSayi" :key="item.id">
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
                                <h2>Eğitim Klavye & Orgu Fiyatları ve Modelleri</h2>
                            </b-row>
                            <b-row  style="height: 35%;">
                                <p>32 adet ürün bulunmaktadır</p>
                            </b-row>
                            <b-row style="height: 20%; float:right;">
                                <b-form-select v-model="selected" :options="options" size="sm" ></b-form-select>
                            </b-row>
                        </b-col>
                        
                    </b-row>
                    <b-row v-show="sayfa==1" class="cards-1" style=" margin-top: 50px;"> <!-- CARDS SECTION PART I -->
                        <b-col style="height: 455px; width: 220px; text-align:Center">
                             <b-card img-src="https://www.do-re.com.tr/yamahapsr-f51-61-tuslu-org-siyah-f46c7089ba85c99e7fab7da4e6188b78-18a6694bc49d83c852f59af55c65083a-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha PSR F51 61-Tuşlu Org (Siyah)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    981.00 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,090.00 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/casio-ct-x700-61-tuslu-org-c8cb2c42fab77ea8259e6f5f0c839442-a2da3987aa7918fa5bb7870d6c6e1f12-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Casio CT-X700 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    999.00 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,110.00 TL       
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/casio-ct-x3000-61-tuslu-org-0f699d04fccd5bbc9514b493873c443d-172bc881e036c690f77d5703656b37fc-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Casio CT-X3000 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    2,461.50 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                2,735.00 TL   
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e263-61-tuslu-org-f52632afc1999f06d0211762d20913a2-660963dd56a6d4cdf84b3dc6a4db45c1-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha PSR E263 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    1,080.00 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,200.00 TL
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row v-show="sayfa==1" class="cards-2" style="height: 350px;"> <!-- CARDS SECTION PART II-->
                        <b-col style="height: 455px; width: 220px; text-align:center;">
                             <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e363-61-tuslu-dijital-org-5d020ada2e84e7ea7675059385dbdd92-bf03820e5477ec70994b382d7a2c225b-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha PSR E363 61 Tuşlu Dijital Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    1,349.10 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,499.00 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/casio-ctk-2500-61-tuslu-org-aadd8d42397ccfc1eb7d53acd0ac8d69-57c9cca41b61f557d028c5c71d4bd320-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Casio CTK 2500 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                  868.50 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                965.00 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/casio-ctk-1500-61-tuslu-org-b935518e070511246bceb222b0848b3f-71721cedd1e16293dd3fe61d7cae9b5f-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                   Casio CTK 1500 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                   652.50 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                <span class="price installed">725.00 TL</span>       
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/casio-ctk-3400-61-tuslu-org-644bbb6c979b79e061f155553fea9c1f-77482a87028b7464567a70fa754bd4f6-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Casio CTK 3400 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    936.00 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,040.00 TL
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row v-show="sayfa==2" class="cards-3" style=" margin-top: 50px;"> <!-- CARDS SECTION PART III -->
                        <b-col style="height: 455px; width: 220px; text-align:Center">
                             <b-card img-src="https://www.do-re.com.tr/casio-ct-x5000-61-tuslu-org-e42967d1213f48dda88e33205bccc044-409903d24504563a946e8faceb412985-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Casio CT-X5000 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    2,835.00 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                3,150.00 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-psre463-61-tuslu-org-siyah-2e856d6d9e91ec01f6130e34db1b9e16-0913d437f432fe3f5f5c667f65e54061-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha PSRE463 61-Tuşlu Org (Siyah)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    2,848.50 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                3,165.00 TL     
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/the-one-61-tuslu-smart-org-beyaz-9b8b4f4265d1e8fe946874e1d288a7ef-0c2164d98c1d897b682800cefcb7c047-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    The One 61 Tuşlu Smart Org  (Beyaz)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    1,264.77 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,405.30 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/the-one-61-tuslu-smart-org-siyah-2c58ad1a544feec545628f537fba453f-a96aaa7585a354318ed0a75df0119bbe-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    The One 61 Tuşlu Smart Org  (Siyah)
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    1,425.49 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,583.88 TL
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row v-show="sayfa==2" class="cards-2" style="height: 350px;"> <!-- CARDS SECTION PART IV-->
                        <b-col style="height: 455px; width: 220px; text-align:center;">
                             <b-card img-src="https://www.do-re.com.tr/techno-ark-528-54-tuslu-org-fdc1c397edc8668181052a68c00c60e5-955544a73eeb14ed226e2bb4537e3175-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Techno ARK 528 54 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    302.78 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                336.42 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/techno-ark-2176-61-tuslu-org-b5ee57d261ca8c3c72e8dacda6f46ef9-219e019812056dd15f326fe9a8b25e81-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Techno ARK 2176  61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                  851.88 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                946.53 TL
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e353-61-tuslu-org-2fa8427f3ed4b8fdca690f57f057ce4f-4dd3f6b5314a8d3d8417d1bd1cf56ce6-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                   Yamaha PSR E353 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                   1,649.47 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,832.74 TL  
                            </b-card>
                        </b-col>
                        <b-col style="text-align:center;">
                            <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e253-61-tuslu-org-69987cc2c5ff42626edb67cb6199a5bf-ec6b2ff96404f6d22e4a994fe819968a-mid-pp.jpg" img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    Yamaha PSR E253 61 Tuşlu Org
                                </b-card-text>
                                Nakit Fiyatı
                                <b-card-text style="font-weight:bold;">
                                    1,222.97 TL
                                </b-card-text>     
                                <hr>
                                Taksitli Fiyat
                                <br>
                                1,358.86 TL
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
              </b-row>
              <!-- Ürün sayfası değiştiren butonlar -->
              <b-row class="pagination" style="margin-top:50px; padding-bottom:20px;">   
                  <button @click="chgPage(1)" class="chgBut" style="margin-left:55%; ">1</button>
                  <button @click="chgPage(2)" class="chgBut">2</button>
              </b-row>
              
          </b-container>
      </div>
  </div>
</template>

<script>
// Sayfa değiştirmeyi sağlayan bus2 isimli eventbus.
import { bus2 } from '../main'

export default {
  name: 'Pianos',
  props: {
  },
  data(){
      return{
          // Sayfada sağ tarafta bulunan markalar ve tuşlu sayıları listelerini
          // yazdırmak için kullanılan diziler
          markalar: [
                  { id: '01', ad: "Casio (12)"},          
                  { id: '02', ad: "Techno by the Tool (2)"},          
                  { id: '03', ad: "The One (2)"},                   
                  { id: '04', ad: "Yamaha (16)"},           
          ],
          tusSayi: [
                  { id: '01', ad: "54 Tuşlu (1)"},          
                  { id: '02', ad: "61 Tuşlu (4)"},          
                  { id: '03', ad: "76 Tuşlu (2)"},          
          ],
          selected: null,
          // Sıralama select elemanı içeriğine sahip dizi
          options: [
          { value: null, text: 'Yeniden Eskiye Sırala' },
          { value: 'a', text: 'Eskiden Yeniye Sırala' },
          { value: 'b', text: 'Ucuzdan Pahalıya Sırala' },
          { value: 'c', text: 'Pahalıdan Ucuza Sırala' },
          { value: 'd', text: 'Alfabetik Sırala [A-Z]'},
          { value: 'e', text: 'Alfabetik Sırala [Z-A]'}
        ],
        sayfa:1
      }
  },
  methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
        // Eventbus aracılığıyla sayfanın değişmesini sağlayan metotlar.
      sayfaDegis(id){
          if(id==1){
            bus2.$emit('sayfaDegisti','mainpage')
          }
          else if(id==2){
            bus2.$emit('sayfaDegisti','tuslu')
          }
      },

      chgPage(id){
          this.sayfa=id
      }
    }
}
</script>

<!-- Html elemanlarının görünüşünü ayarlayan css sınıf kodları -->
<style scoped>

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
