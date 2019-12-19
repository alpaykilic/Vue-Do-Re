<template>
  <div class="main-container">
      <div style="padding-top:80px;">
          
          <b-container> <!-- MAIN LAYOUT -->
              <b-row>
                <b-col class="col-md-3" style="height: 750px; margin-right: 15px;"> <!-- LEFT SIDE -->
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
                                <h2>'{{aranan}}' arama sonuçları</h2>
                            </b-row>
                            <b-row  style="height: 35%;">
                                <p>{{sayi}} adet ürün bulunmaktadır</p>
                            </b-row>
                            
                        </b-col>
                        
                    </b-row>
                    <b-row class="cards-1" style=" margin-top: 50px; margin-bottom:50px;"
                    > <!-- CARDS SECTION PART I -->
                        <b-col style="height: 400px; width: 220px; text-align:Center" class="col-md-3"
                        v-for="(urun,index) in urunler3"
                        v-bind:item="urun"
                        v-bind:index="index"
                        v-bind:key="urun.id"
                        >
                            <b-card v-bind:img-src=urun.resim img-alt="Image" img-top
                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                <b-card-text style="font-size:12px; font-weight:bold;">
                                    {{urun.isim}}
                                </b-card-text>
                                <br>
                                Fiyat            
                                <b-card-text style="font-weight:bold;">
                                    {{urun.fiyat}} TL
                                </b-card-text>     
                                
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
              </b-row>
          </b-container>
      </div>
  </div>
</template>

<script>
// Event bus ile breadcrumbs kısmındaki yazılara tıklayarak anasayfa ya da bir önceki piyanolar sayfasına geri dönüş sağlanıyor.
import { aramaBus } from '../main'
import Arama1 from '../Arama1'
import Arama2 from '../Arama2'

export default {
  name: 'Pianos',
  
  data(){
      return{    
        urunler: [],
        error: '',
        urunler2: [],
        urunler3: [],
        sayi: 0,
        aranan: ''
      }
  },
  methods: {

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
      this.urunler = await Arama1.getPosts();
      this.urunler2 = await Arama2.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    aramaBus.$on('arandi', (data) => {
            if(data == 'enstrüman'){
                this.sayi = this.urunler.length
                this.urunler3 = this.urunler
            }
            else if (data == 'aksesuar'){
                this.sayi = this.urunler2.length
                this.urunler3 = this.urunler2
            }
            else{
                this.sayi = 0
                this.urunler3 = []
            }
            this.aranan = data
        })
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


</style>
