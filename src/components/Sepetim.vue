<template>
    <div v-if="item.length > 0" style="padding-top: 60px;">
        <!-- Sepetim kısmındaki sipariş detayı, adres seçimi, ödeme bilgileri ve sipariş onayı yazan sütunların template kısmı -->
        <div style="background-color: #f6f6f6; height:150px;">
        <div class="main-container" style="padding-top: 20px;" >
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col style="height: 100px; width: 285px;">
                            <button style="outline:none; height: 100px; width: 285px; margin-right: 10%; border: 1px solid #e4e4e4; background-color:white;">
                                <b-row style="margin-left: 45%">
                                    <img src="../assets/sepetim.png" alt="sepet logosu" style="width:32px; height:32px">
                                </b-row>
                                <b-row style="margin-left: 30%; margin-top: 5px;"><p style="color: #FFA018; font-weight: bold;">SİPARİŞ DETAYI</p></b-row>
                            </button>
                        </b-col>
                        <b-col style="height: 100px; width: 285px; ">
                            <button style="outline:none; height: 100px; width: 285px; margin-right: 10%; border: 1px solid #e4e4e4; background-color:white;">
                                <b-row style="margin-left: 45%">
                                    <img src="../assets/adres.png" alt="Adres logosu" style="width:32px; height:32px">
                                </b-row>
                                <b-row style="margin-left: 30%; margin-top: 5px;"> <p style="color: #DCDEE2; font-weight: bold;">ADRES SEÇİMİ</p> </b-row>
                            </button>
                        </b-col>
                        <b-col style="height: 100px; width: 285px;">
                            <button style="outline:none; height: 100px; width: 285px; margin-right: 10%; border: 1px solid #e4e4e4; background-color:white;">
                                <b-row style="margin-left: 45%">
                                    <img src="../assets/odeme.png" alt="Ödeme logosu" style="width:32px; height:32px">
                                </b-row>
                                <b-row style="margin-left: 30%; margin-top: 5px;"><p style="color: #DCDEE2; font-weight: bold;">ÖDEME BİLGİLERİ</p></b-row>
                            </button>
                        </b-col>
                        <b-col style=" height: 100px; width: 285px;">
                            <button style="outline:none; height: 100px; width: 285px; margin-right: 10%; border: 1px solid #e4e4e4; background-color:white;">
                                <b-row style="margin-left: 45%">
                                    <img src="../assets/onay.png" alt="onay logosu" style="width:32px; height:32px">
                                </b-row>
                                <b-row style="margin-left: 30%; margin-top: 5px;"> <p style="color: #DCDEE2; font-weight: bold;">SİPARİŞ ONAYI</p> </b-row>
                            </button>
                        </b-col>
                    </b-row>
                </b-container>
        </div>
        </div>
        
        <!-- Sepetteki ürünlerin üst kısmında yazan bilgiler( birim fiyat, adet, toplam fiyat), sepet güncelleme butonu vs. -->
        <b-container class="ust-kisim" style="padding-top: 20px;">
            <b-row>
                <b-col>
                    <b-row>
                        <p style="font-size: 13px; color: rgb(170,170,170) ; font-family: 'Open Sans', sans-serif; font-weight:700;">Ürün Adetlerini Değiştirdiyseniz</p>
                        <button class="guncelBut" @click="sepetGuncelle">                  
                           <img src="../assets/refresh.png" style="width:16px; height: 16px;" alt="">
                           SEPETİ GÜNCELLE
                        </button>
                    </b-row>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col> <p> Birim Fiyat </p></b-col>
                        <b-col>Adet</b-col>
                        <b-col>Toplam Fiyat</b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <!-- v-for ile yazdırılan sepetim bölümündeki ürünler -->
        <div style="width:1200px; margin-left:auto; margin-right:auto;">
            <ul v-for="(urun,index) in item" :key="index" style="list-style-type:none;">
                <li>
                    <b-container>
                        <b-row>
                            <b-col md="1"><button @click="remove(urun.id)" class="rem-but">x</button></b-col>
                            <b-col md="2"><img v-bind:src=urun.resim alt=""></b-col>
                            <b-col md="3">
                                <b-row class="urunİsim">{{ urun.isim }}</b-row>
                                <b-row class="kargoStil"> 1-3 iş gününde kargoya verilir </b-row>
                            </b-col>
                            <b-col md="2"> 
                                <b-row class="hiza">{{ urun.fiyat }} TL</b-row>
                                <b-row class="hiza2">(KDV Dahil)</b-row>
                            
                            </b-col>
                            <b-col md="2">
                                <b-row style=" margin-top:40%;margin-left:-25%; margin-right:0px">
                                    <div style="border: 1px solid rgb(186,186,186); border-radius:4px; margin-left:25%; margin-right:25%">
                                        <button style="background-color:white; border:none; outline:none;" @click="azalt(index)">-</button>
                                        <input style="border:none; color: rgb(60,60,60)" v-model="urun.birimAdetSayisi" type="number" step="1">
                                        <button style="background-color:white; border:none; outline:none;" @click="arttir(index)">+</button>
                                    </div>
                                    
                                
                                </b-row>
                            </b-col>
                            <b-col md="2">  
                                <b-row class="hiza">{{urun.birimAdetSayisi*urun.fiyat}} TL</b-row>
                                <b-row class="hiza2">(KDV Dahil)</b-row>
                            </b-col>
                        </b-row>
                    </b-container>
                </li>
            </ul>
        </div>
        <!-- Ürünlerin alt kısmındaki indirim kuponu gibi toplam fiyat gibi bilgileri içeren bölüm -->
        <div style="height:240px; width:1200px; background-color: white; margin-left:auto; margin-right:auto;">
            <b-row style="margin-left:0px;">
            <b-col md="7" style="background-color:white">
                <div style="border: 1px solid rgb(200,200,200); height:150px; margin-top: 30px;">
                    <p style="color:black; text-align:left ; margin-left: 5%; margin-top: 5%; font-size:22px; font-weight:bold" >İndirim Kuponu</p>
                    <b-row>
                        <p style="color:black; text-align:left ; margin-left: 7%; font-size:20px;" >İndirim Kuponu:</p>
                        <input type="text" class="kuponInput" placeholder="İndirim Kuponunuzu Giriniz">
                        <button class="kuponBut" @click="indUygula">UYGULA</button>
                    </b-row>
                </div>
            </b-col>
            <b-col md="2">
                <div style="text-align:right; width: 440px;">
                    <p style="font-size:15px; color:black; margin-top: 50px">Toplam Ürün Bedeli</p>
                    <p style="font-size: 20px; font-weight:Bold; color:black">{{ topFiyat }} TL</p>
                </div>
            </b-col>
            </b-row>

        </div>
            
    </div>
    <div v-else>
    <!-- Sepette ürün yok ise sepetin boş olduğu durumdaki componentin yazılması -->
    <EmptyBasket />
    </div>
</template>

<script>
// urunBus ve totalUrun isimli eventbuslar ile EmptyBasket isimli component import edilir.
import { urunBus } from '../main'
import { totalUrun } from '../main'
import EmptyBasket from './EmptyBasket.vue'
import Products from '../Products'

export default {
    components: {
        EmptyBasket
    },
    data(){
        return{
            // Gerekli elemanların tanımlanması.
            // item sepette yazdırılacaklar dizisi, urunler ise ürünlerin bulunduğu dizi
            item: [],
            isClicked: true,
            isExist: false,
            urunler: [
                {id:0, isim:"Yamaha YDP144B Dijital Piyano (Siyah)", image:"https://www.do-re.com.tr/yamaha-ydp144b-dijital-piyano-siyah-c4345f6f711ac243bb7857c80640b894-b0da670f78267025eba1e471efb03c4a-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 936.10},
                {id:1, isim:"Yamaha C40 Klasik Gitar (Natural)", image:"https://www.do-re.com.tr/yamaha-c40-klasik-gitar-natural-23b60ccf40f89fc11bf8f20e198c59ba-fe26364965e18c96d425aaff700994d7-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 919.80},
                {id:2, isim:"Casio CTK 3400 61 Tuşlu Org", image:"https://www.do-re.com.tr/casio-ctk-3400-61-tuslu-org-644bbb6c979b79e061f155553fea9c1f-77482a87028b7464567a70fa754bd4f6-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 936.00},
                {id:3, isim:"KRK Rokit RP7 G4 7 Inch Near-Field Aktif Stüdyo Monitörü (Siyah)", image:"https://www.do-re.com.tr/krk-rokit-rp7-g4-7-inch-near-field-aktif-studyo-monitoru-siyah-1b8b5ceb36d07fa06bcfc661df4c67e6-2dd9d9fed5183de021fc7fde712ddcc8-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 1814.45},
                {id:4, isim:"Yamaha DTX452K Dijital Davul Seti", image:"https://www.do-re.com.tr/yamaha-dtx452k-dijital-davul-seti-e762b808e4d529b71899e20cbd7e1ae4-8ff730100783f60a8fa206b8e8497470-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 5120.10},
                {id:5, isim:"Stentor 1018/G 1/8 Keman(Kutulu)", image:"https://www.do-re.com.tr/stentor-1018-g-1-8-keman-08ba76cd5cb11385d8aa493a930223db-876fa70f9e2df74cfe325b5fad21328e-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 691.01},
                {id:6, isim:"Yamaha B2 Akustik Duvar Piyanosu (Mat Ceviz)", image:"https://www.do-re.com.tr/yamaha-b2-akustik-duvar-piyanosu-mat-ceviz-f24ea2b5fb4f72d251820d8eef891827-32a48fa0eefab6ba2e718085330df396-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 35922.29},
                {id:7, isim:"PRS Al Di Meola Signature 10 Top Pattern Regular Elektro Gitar", image:"https://www.do-re.com.tr/prs-al-di-meola-signature-10-top-pattern-regular-elektro-gitar-f3cb6e589ef04cf30bfea228bab68b17-a57c2841a1be4747484f74d986963f82-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 22033.26},
                {id:8, isim:"Yamaha YFL212 Yan Flüt", image:"https://www.do-re.com.tr/yamaha-yfl212-yan-flut-cc87a63217707a1cc654b406e8b3af2e-3d7919624f71a9f435778564bbdffb57-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 3799.80},
                {id:9, isim:"Epiphone Pro-1 Klasik Gitar", image:"https://www.do-re.com.tr/epiphone-pro-1-klasik-gitar-b1a38435070a172f8bc294adbc7a6d59-30b46357c660c8059cb05b7c994919f0-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 700.20},
                {id:10, isim:"Rösler RS3A Keman (4/4)", image:"https://www.do-re.com.tr/rosler-rs3a-keman-4-4-56727db9a69f8817201ccdd51c400ad9-e2680e7692750f4ad284f08097eaef34-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 990.00},
                {id:11, isim:"Casio AP-260BK Celviano Dijital Piyano (Mat Siyah)", image:"https://www.do-re.com.tr/casio-ap-260bk-celviano-dijital-piyano-mat-siyah-026ba3e2991b906106d454b87202fe31-3f87b36d8bca35fd63daee2950c001ea-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 3550.00},
                {id:12, isim:"Promark 5A Special Baget(Çift)", image:"https://www.do-re.com.tr/promark-5a-special-baget-9892229ddf20265b998a02c213bfeddb-32a9d988fae23393095d89fd7e59f9b2-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 12.00},
                {id:13, isim:"SX STL ALDER NA Telecaster Elektro Gitar", image:"https://www.do-re.com.tr/sx-stl-alder-na-telecaster-elektro-gitar-5d0981c410ea46bbe34a714193be6be0-ffbcd21612bc9fae9727225d16b605bb-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 917.83},
                {id:14, isim:"Bohemia BCL 3000 Sol Klarnet", image:"https://www.do-re.com.tr/bohemia-bcl-3000-sol-klarnet-86cad792b5b5e4f7e079df0af131def7-5450300c73ced4e082f895e3b3136992-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 1065.53},
                {id:15, isim:"Blackstar ID:Core 10 V2 Elektro Gitar Amfisi", image:"https://www.do-re.com.tr/blackstar-idcore-10-v2-dijital-kombo-elektro-gitar-amfisi-f76c27d72b2ebd1387d05272aadec0e3-2213f0cbfea9b3884d45249f5f43c30a-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 822.88},
                {id:16, isim:"Nektar Impact GX49 USB Midi Klavye", image:"https://www.do-re.com.tr/nektar-impact-gx49-usb-midi-klavye-0020a5b3d678dc8777b7a60a14feccce-c79782354ea8565afd089878775e67e2-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 712.11},
                {id:17, isim:"Yamaha YDP S34B Dijital Piyano (Siyah)", image:"https://www.do-re.com.tr/yamaha-ydp-s34b-dijital-piyano-siyah-1bc2661354d6a5d5075d866328862204-6afcd3a4e75361d7ef71dc8951f23809-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 4899.00},
                {id:18, isim:"Antigua FL2210A Yan Flüt(Gümüş)", image:"https://www.do-re.com.tr/antigua-fl2210a-yan-flut-551b80f2937e0f2dffe3c201c256e3aa-34d03bbf2f461a3ae38e7656477181f9-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 2315.68},
                {id:19, isim:"Yamaha HS5W Aktif Studio Referans Monitör (Tek)", image:"https://www.do-re.com.tr/yamaha-hs5w-aktif-studio-referans-monitor-tek-c78e6de9d9733af2fdd6ff7111685c42-e41e6900a92ff1afe38754767fdd8a03-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 1301.40},
                {id:20, isim:"Schecter BANSHEE-6 FR SGR Elektro Gitar (Gloss Black)", image:"https://www.do-re.com.tr/schecter-banshee-6-fr-sgr-elektro-gitar-gloss-black-66e610f13d61a8592caf8bbce4507f40-ee826d5877256faec1dc031199e63ec1-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 1476.97},
                {id:21, isim:"Yamaha PSR F51 61-Tuşlu Org (Siyah)", image:"https://www.do-re.com.tr/yamahapsr-f51-61-tuslu-org-siyah-f46c7089ba85c99e7fab7da4e6188b78-18a6694bc49d83c852f59af55c65083a-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 981.00},
                {id:22, isim:"Yamaha SV150BL Elektro Keman (4/4)", image:"https://www.do-re.com.tr/yamaha-sv150bl-elektro-keman-4-4-6f0413587643906277fcefe66d5faea8-04be5932e22c11a53ebbdb2944c41dc5-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 7734.81},
                {id:23, isim:"Focusrite Scarlett Solo Studio Gen 3 Kayıt Paketi", image:"https://www.do-re.com.tr/focusrite-scarlett-solo-studio-gen-3-kayit-paketi-e649bf5c8c7000e8781ed3b24dabd9ca-0b7ece5dba84edf4b6d5cbe9c3933e93-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 1389.91},
                {id:24, isim:"Ortega RGL5 Guitarlele (Natural Sunburst)", image:"https://www.do-re.com.tr/ortega-rgl5-guitarlele-natural-bd6e0012f7f6f8a948f600a60b78ceac-2ed4efebc9e80dce7728721d967cc16a-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 587.37},
                {id:25, isim:"Nino NINO954-2 Deluxe Sınıf Cajon", image:"https://www.do-re.com.tr/nino-nino954-2-deluxe-sinif-cajon-c55d7b3348eeb2beb4580edc7260ed99-106f23da52cf90ecd569e60113dfef07-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 3669.60},
                {id:26, isim:"Yamaha YDP144R Dijital Piyano (Gül Ağacı)", image:"https://www.do-re.com.tr/yamaha-ydp144r-dijital-piyano-gul-agaci-f96c51181f04b21acb4b3e599231d595-2c6e023c9cb6046bb68b562a6b9462bf-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 5849.10},
                {id:27, isim:"Mackie Reach Pro Aktif Hoparlör(Tek)", image:"https://www.do-re.com.tr/mackie-reach-pro-aktif-hoparlor-ab18332dce93f52a9da66537e05318fb-17ded12c1cf5e7970168ff29d7d37b53-mid-pp.jpg", birimAdetSayisi: 1, fiyat: 9515.92},
            ],
            products: [],
            topFiyat: 0,
            topUrun: 0
            
        }
    },
    methods:{

        /* ----- clicked fonksiyonu gelen parametredeki değer dizide var ise o elemanın adetini arttırır, yok ise diziye ekler. ----- */
        clicked(num){
            for(let i = 0; i< this.item.length; i++){
                if(this.item[i].id==num){
                    this.item[i].birimAdetSayisi +=1
                    this.isExist = true
                    this.topFiyat += this.item[i].fiyat
                    this.guncelle()
                }
            }
            if(this.isExist!=true){
                this.item.push(this.products[num])
                this.item[this.item.length-1].birimAdetSayisi = 1
                this.topFiyat += this.products[num].fiyat
                this.guncelle()
            }
            this.isExist = false
            
        },
        /* ------------ remove fonksiyonu dizi elemanının id sini alıp diziden o elemanı siler ------------ */
        remove(id){
            for(let index = 0; index < this.item.length; index++){
                if(this.item[index].id == id){
                    this.topFiyat = this.topFiyat-(this.item[index].birimAdetSayisi*this.item[index].fiyat);
                    this.item.splice(index, 1);
                    this.guncelle()
                }
            }    
        },
        /*---------- arttir ve azalt fonksiyonları o ürünün adet sayısını arttırır, azaltır  ----------- */
        arttir(id){
            this.item[id].birimAdetSayisi += 1;
            this.topFiyat += this.item[id].fiyat;
            this.guncelle()
        },
        azalt(id){
            if(this.item[id].birimAdetSayisi > 1)
            {
                this.item[id].birimAdetSayisi -= 1;
                this.topFiyat -= this.item[id].fiyat;
                this.guncelle()
            }
        },
        /*---------- guncelle metodu sepetteki toplam ürün sayısını her çağırıldığında günceller. --------- */
        guncelle(){
            this.topUrun = 0
            for(let index = 0; index < this.item.length; index++){
                this.topUrun += this.item[index].birimAdetSayisi
            }
            totalUrun.$emit('guncellendi',this.topUrun)
        },
        /*-------- aşağıdaki üç metot butonlara basıldığında modal'ları çalıştırır. -------- */
        indUygula(){
            this.$bvModal.show('kuponModal')
        },

        sepetGuncelle(){
            
            this.$bvModal.show('guncelleModal')
            var v = this;
            setTimeout(function(){
                v.kapat()
            }, 1000);            
        },

        kapat(){
            this.$bvModal.hide('guncelleModal')
        }
    },
    /*------- created component oluşturulduğundan itibaren yapılacak şeyi içerir. 
      ------- içerisinde urunBus isimli bir eventbus dinlemesi yapılıyor.
      ------- */
    
    async created() {
    urunBus.$on('urunEklendi', (data) => {
        this.clicked(data)
    })
    try {
      this.products = await Products.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
}
</script>

<style scoped>
/* ------------- Genel ---------------- */
img{
    width: 100%;
    height: auto;
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');
/* ------------- Ust kısımdaki text ---------------- */
.ust-kisim{
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
}
/*  ------------- Oksuz input eklemesi  -------------- */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {  
    -webkit-appearance: none;
    margin: 0; 
}
input[type=number] {
    -moz-appearance:textfield; 
}
input{
    width: 40%;
    text-align:center;
}
/*  ------------- ul içinde li'lerin stylingi -------------- */
.hiza {
margin-left:25%;
margin-top:35%;
color:#595959; 
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-weight: 700;
}
.hiza2 {
margin-left:20%;
margin-right:20%; 
color: #9a9a9a;
}

/*  ------------- button style  -------------- */
.rem-but {
    margin-top: 100%; 
    height: 30px; 
    width: 35px; 
    color: red; 
    border: 1px solid rgb(200,200,200); 
    background-color: transparent; 
    font-weight: bold;
    outline: none;
}
.urunİsim{
    margin-top: 20%; 
    color:#595959; 
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-align: left
}
.kargoStil {
    color:rgb(96, 144, 0);
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    margin-top: 8px;
}
a:hover {
    text-decoration: none;
    color:white;
}
a{
    color: white;
    font-weight: 700;
    padding-top: 5px;
}
.kuponInput {
width:220px; 
height:30px; 
margin-left: 10px; 
background-color:rgb(246,246,246); 
text-align:left; 
padding:5px;
border: 1px solid gray;
border-radius: 3px;
}
.kuponBut{
width:80px; 
height:30px;
background-color: #9e9c9c;
color:white;
font-family: 'Open Sans', sans-serif;
font-weight: 700;
border:none;
margin-left: 15px;
outline: none;
}
.guncelBut{
    margin-left: 30px; 
    margin-top : -5px; 
    margin-bottom: 8px; 
    width:160px; 
    background-color:#9e9c9c; 
    font-size: 14px; 
    float:left; 
    font-weight:bold; 
    color:White;
    border:none;
    outline: none;

}
.main-container{
    background-color: #f6f6f6;
}
.bv-example-row{
    background-color: #f6f6f6;

}
.tab-1{
    background-color: #f6f6f6;
    border: none;
}

</style>