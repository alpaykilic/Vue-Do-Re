<template>

  <div class="main-container backImage">
      <!-- Burada login ekranında bulunan elemanların html kısmı kodlandı. -->
      <b-container style="height: 800px; width: 1349px; background-color: transparent; padding-top:80px;" >
          <b-col style="width: 449px; margin-left: 55%; background-color:white ; border:None;">
              <b-row class="uye-giris-text" style="height: 81px; border:None"> 
                <div style="margin-left:160px; margin-top: 20px; font-size:25px;">
                <strong>ÜYE GİRİŞİ</strong>     
                </div>
                
              </b-row>
              <b-row class="facebook" style="height: 35px; border:None"> 

                    <button style="width:400px; margin-left:25px; margin-right:25px; text-align:center; background-color: #3b5998; border:none;outline:none">
                        <i class="fa fa-facebook-official" style="font-size:24px; margin-left:0px; background-color: #3b5998; color:white"></i>
                        <strong style="color:White">Facebook ile Giriş Yap</strong> 
                        
                    </button>
              </b-row>
              
              <b-row class="ya-da-text" style="height: 60px;padding-top:10px; border:None">
                  
              <hr style="width:180px; margin-left:0px;"> ya da
              <hr style="width:180px; margin-right:0px">
              </b-row>
              <b-row class="login-form" style="height: auto; border:None">
                      <div style="margin-left:25px;">
                        <b-form>
                        <b-form-group style="font-size: 16px; color: #595959; font-weight: 700; text-align:left"
                            id="input-group-1"
                            label="E-posta adresiniz:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="mail"
                            type="email"
                            required
                            placeholder=""
                            style="width:390px; background-color: rgb(246,246,246)"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Şifre:" label-for="input-2" style="font-size: 16px; color: #595959; font-weight: 700; text-align:left">
                            <b-form-input
                            type="password"
                            id="input-2"
                            v-model="pass"
                            style="background-color: rgb(246,246,246)"
                            required
                            placeholder=""
                            ></b-form-input>
                            
                        </b-form-group>
                        <b-row style="border:none; margin-bottom:30px; margin-top:30px;">
                            <button style="text-decoration:underline; background-color:white; border:none;outline:none; color: rgb(146,146,146)">Şifremi Unuttum</button>
                            <b-button style="margin-left:140px; height:40px; width:128px; border-radius:0px; background-color:black; outline:none; border:none; font-size:20px;" @click="giris" variant="primary">Giriş Yap</b-button>
                        </b-row>
                        
                        </b-form>
                        
                    </div>
                  
              </b-row>
              <b-row style="background-color: #e95f28; border:None">
                  <b-col style="text-align:center; margin-top:30px; margin-bottom:30px; border:none">
                      
                  <p style="color:white">Bir üyeliğiniz yok mu?</p>
                  <button @click="sayfaDegis" style="border:none; background-color: transparent; color:white; text-decoration:underline"> Üye Olun</button>
                  </b-col>
              </b-row>
              
          </b-col>
      </b-container>
    
  </div>
</template>

<script>
// bus2 isimli eventbus kullanılarak sayfa değişimi sağlandı.
import { bus2 } from '../main'
import Uye from '../Uye'
import { loginBus } from '../main'

  export default {
    data() {
      return {
        mail: '',
        pass: '',
        show: true,
        uyeler: [],
        check: false,
        error: 'asd'
      }
    },
    methods: {
      
      sayfaDegis(){
        bus2.$emit('sayfaDegisti','register')
      },
      giris(){
        for(let i = 0; i< this.uyeler.length; i++){
          if(this.uyeler[i].mail == this.mail){
            if(this.uyeler[i].sifre == this.pass){
              this.check=true
            }
          }
        }
        if(this.check == true){
          bus2.$emit('sayfaDegisti','mainpage')
          loginBus.$emit('girisYapildi',this.check)
        }
      }
    },
    async created() {
    try {
      this.uyeler = await Uye.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
  }
</script>



<!-- Sayfada kullanılan elemanların style kısmı classlar kullanılarak tanımlandı. -->
<style scoped>

.col{
    border: 1px solid black;
}

.row{
    border: 1px solid black;
}

.backImage {
    background-image: url(https://www.do-re.com.tr/ankara-armada-avm-magazasi-4e66bbc0a72e9f0061f3c751549ba66f-b1575c13f23bd2dc41ef077f985ce8e3-large-sp.jpg);
    background-repeat:no-repeat;
}
</style>
