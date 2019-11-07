<template>
<div style="padding-top:100px;">
    <div class="main-container">
        <b-container> <!-- BREADCRUMB -->
              <b-row >
                  <button @click="sayfaDegis(1)" style="outline:none; background-color:transparent; border:none;"> Ana Sayfa > </button> 
                  <button @click="sayfaDegis(2)" style="outline:none; background-color:transparent; border:none;"> Tuşlular > </button>
                  <button @click="sayfaDegis(3)" style="outline:none; background-color:transparent; border:none;"> Eğitim Klavyeleri & Orglar </button>
              </b-row>
        </b-container>
        <!-- Bu kısımda ürün sayfasındaki ürünün fiyatı resmi gibi bilgiler yapıldı -->
        <b-container class="product-section" style="color:black">
            <b-row>
                <b-modal id="urunModal2" size="lg" hide-footer="true" hide-header="true">
                    <div>
                        <img style="width:600px; margin-left:80px;" src="https://www.do-re.com.tr/yamahapsr-f51-61-tuslu-org-siyah-f46c7089ba85c99e7fab7da4e6188b78-18a6694bc49d83c852f59af55c65083a-large-pp.jpg" alt="">
                    </div>
                </b-modal>
                <b-col @click="$bvModal.show('urunModal2')" class="image-section col-md-4.5" style="height: 456px; width: 456px; border: 1px solid gray; margin-right: 18px; ">
                    <img style="height:400px" src="https://www.do-re.com.tr/yamahapsr-f51-61-tuslu-org-siyah-f46c7089ba85c99e7fab7da4e6188b78-18a6694bc49d83c852f59af55c65083a-large-pp.jpg" alt="">
                </b-col>
                <b-col class="text-section col-md-7" style="height: 500px; width: 680px;">
                    <b-row>
                        <h1 style="font-size: 24px;">
                            Yamaha PSR F51 61-Tuşlu Org (Siyah)
                        </h1>
                    </b-row>
                    <b-row style="margin-top: 5px;">
                        <b-col>
                            <b-row class="urun-kodu" style="height: 20px;">
                                <span style="font-size: 14px; font-weight: 400; font-weight:bold;">Ürün Kodu:</span>
                                <p style="margin-left: 5px;">103011500058</p>
                            </b-row>
                            <b-row class="marka" style="height: 20px;">
                                <span style="font-size: 14px; font-weight: 400; font-weight:bold;">Marka:</span>
                                <router-link style="margin-left: 5px;" to="/marka">Yamaha</router-link>
                            </b-row>
                            <b-row class="katalog-no">
                                <span style="font-size: 14px; font-weight: 400; font-weight:bold;">Katalog no:</span>
                                <p style="margin-left: 5px;">PSRF51</p>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row class="price-section" style="height: 209px;">
                        <b-col class="price col-md-6">
                            <b-row class="price-large">
                                <span style="font-size: 34px; font-weight: 800; color: #272727;">981.00 TL</span>
                            </b-row>
                            <b-row>
                                <em style="color: #272727; font-weight: 400; font-size: 14px; margin-bottom: 15px; display: block; margin-top: 15px;">(KDV DAHİL)</em>
                            </b-row>
                            <b-row>
                                <span style="font-weight: 700 !important; color: black;">Taksitli Satış Fiyatı</span>
                            </b-row>
                            <b-row>
                                <em style="text-transform: uppercase; font-size: 20px; color: #272727; margin-top:-8px;">1,090.00 TL</em>
                            </b-row>
                            <b-row>
                                <em style="color: #272727; font-weight: 400; font-size: 14px; margin-bottom: 8px; display: block; margin-top: 10px;">116.57 TL'den başlayan taksitlerle</em>
                            </b-row>
                            <b-row class="modal-comes-here">
                                <b-modal id="modal-odeme2" hide-footer="true" size="xl" title="BootstrapVue">
                                    <template v-slot:modal-title>
                                    <h3>Taksit Ve Ödeme Tablosu</h3>
                                    </template>
                                    <div class="row">
                                        <div class="col">
                                            <img src="../assets/banka4.png" alt="">
                                        </div>
                                        <div class="col">
                                            <img src="../assets/banka5.png" alt="">
                                        </div>
                                        <div class="col">
                                            <img src="../assets/banka6.png" alt="">
                                        </div>
                                    </div>
                                </b-modal>
                                <button v-b-modal.modal-odeme2 style="background-color:white; outline:none; border:none; text-decoration:underline; color:#4f57aa">
                                    Ödeme Seçenekleri ve Taksit Tablosu
                                </button>
                            </b-row>
                        </b-col>
                        <b-col class="cart col-md-6" style="border-left: 1px solid #d6d6d6;">
                            <b-row class="stok-text" style="margin-left: 25%;">
                                <strong style="font-size: 26px; font-weight: 800; color: black;">STOKTA</strong>
                            </b-row>
                            <b-row style="margin-left: 12%;">
                                <em class="cargo-text" style="color: #272727;font-weight: 400;font-size: 14px;margin-bottom: 8px;display: block;">1-3 iş gününde kargoya verilir</em>
                            </b-row>
                            <b-row style="margin-left: 6%;">
                                <button class="sepet-button">
                                    <strong>SEPETE EKLE</strong>  
                                </button>
                            </b-row>
                            <b-row style="margin-left: 40%;">
                                <span> ya da</span>
                            </b-row>
                            <b-row class="icon-text-section" style="margin-left: 12%;">
                               <img height="20" width="20" style="color: black; margin-right:10px;" src="../assets/like.png">
                               <p>Favori Ürünlerime Ekle</p>
                            </b-row>
                        </b-col>

                    </b-row>
                    <!-- ICON KISMI --------------------------------------->
                    <b-row style="height: 100px; margin-top: 25px;" class="icon-section">
                        <b-col class="section col-md-3" style="margin-right: 3px;">
                            <div class="modal-section-1">
                                <button style="background-color: #eeeeee; border:none;"   v-b-modal.modal-kiyas2>
                                    <b-container>
                                        <b-col style="margin-top: 25px;">
                                            <b-row style="margin-left: 8%;">
                                                <img src="../assets/comparison.png" alt="kıyaslama logosu">
                                            </b-row>
                                            <b-row style="margin-top: 6px;">
                                                <p style="color: #444444; font-weight: bold; margin-left: -10px; font-size:13px; text-decoration: underline;">KARŞILAŞTIR</p>
                                            </b-row>
                                        </b-col>
                                    </b-container>
                                </button>

                                <b-modal id="modal-kiyas2" size="lg" hide-footer="true" title="BootstrapVue">
                                    <template v-slot:modal-title>
                                    <h3>Ürün Karşılaştırma</h3>
                                    </template>
                                    <div>
                                        <h5>
                                            Ürün, karşılaştırma listenize eklendi.
                                        </h5>
                                    </div>
                                    <div>
                                        <img src="../assets/modalurun2.png" alt="">
                                    </div>
                                    <div>
                                        <hr>
                                        <p style="color: rgb(146,146,146); font-size:18px;">Karşılaştırma yapabilmek için listenizde en az 2 ürün olmalıdır.</p>
                                    </div>
                                </b-modal>

                                
                            </div>
                        </b-col>
                        <b-col class="section col-md-3" style="margin-right:3px;">
                            <div class="modal-section-2">
                                <button style="background-color: #eeeeee; border:none;" v-b-modal.modal-indirim2>
                                    <b-container>
                                        <b-col style="margin-top:25px;">
                                            <b-row style="margin-left: 8%;">
                                                <img src="../assets/discount.png" alt="kıyaslama logosu">
                                            </b-row>
                                            <b-row style="margin-top: 6px;">
                                                <p style="color: #444444; font-weight: bold; font-size:13px; margin-left: -10px; text-decoration: underline;">UCUZLARSA BİLDİR</p>
                                            </b-row>
                                        </b-col>
                                    </b-container>
                                </button>

                                <b-modal size="lg" id="modal-indirim2" hide-footer="true" title="BootstrapVue">
                                    <template v-slot:modal-title>
                                    <h3>Fiyat Alarmı</h3>
                                    </template>
                                    <div >
                                        <div class="row">
                                            <div class="col">
                                                <h5>Yamaha PSR F51 61-Tuşlu Org (Siyah)</h5>
                                                <br>
                                                <div class="row" style="margin-left:0px;">
                                                    <h6 style="font-weight:bold; color:rgb(146,146,146)">Ürünün Şu Anki Fiyatı :</h6>
                                                    <p style="margin-left: 15px; font-size:16px;">981.00 TL</p>
                                                </div>
                                                <div class="row" style="margin-left:0px; margin-top:20px">
                                                    <h6 style="font-weight:bold; color:rgb(146,146,146)">Beklediğiniz Fiyat :</h6>
                                                    <input type="text" style="margin-left:45px; width:150px;background-color:rgb(246,246,246); border:1px solid rgb(146,146,146) ;outline:none">
                                                </div>
                                                <div class="row" style="margin-left:0px; margin-top:30px">
                                                    <h6 style="font-weight:bold; color:rgb(146,146,146)">Alarm Süresi :</h6>
                                                    <b-form-select style="margin-left: 80px; width:150px; height:30px; padding-top:0; padding-left:5px; background-color:rgb(196,196,196)" v-model="selected" :options="options"></b-form-select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div style="border-left:1px solid rgb(146,146,146)">
                                                    <div style="margin-left:10px;">
                                                        <p>
                                Bu ürünün fiyatı bu ekranda belirtmiş olduğunuz fiyata ya da daha altına düşerse otomatik olarak bir eposta alacaksınız.
                        <br><br> Alarmınız belirtmiş olduğunuz süre boyunca geçerli olacaktır. Süresi dolan alarmlarla ilgili ürünlerin fiyatları belirlediğiniz fiyata ya da daha altında düşse bile eposta almazsınız.
                        <br><br> Süresi dolan alarmlarınızın süresini tekrar uzatabilirsiniz.
                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align:center; background-color:rgb(246,246,246)">
                                            <hr>
                                            <button style="width:115px; height:32px; background-color:#272727; color:White;border: none; outline:none; font-weight:bold">KAYDET</button>
                                        </div>
                                    </div>

                                </b-modal>
                            </div>
                        </b-col>
                        <b-col class="section col-md-3" style="padding: 12px; margin-right: 3px;">
                            <b-row style="margin-left: 30%; margin-top: 15px; ">
                                <img src="../assets/delivery-truck.png" alt="kargo logosu">
                            </b-row>
                            <b-row style="margin-top: 6px; margin-left: 5%;">
                                <p style="color: #444444; font-weight: bold; margin-left: -10px; font-size:13px;">ÜCRETSİZ TESLİMAT</p>
                            </b-row>
                                        
                           
                        </b-col>
                        <b-col class="section col-md-2.9" style="">
                            <b-row style="margin-left: 30%; margin-top:27px; ">
                                <img src="../assets/shield.png" alt="garanti logosu" style="height: auto;">
                            </b-row>
                            <b-row style="margin-top: 6px; margin-left: 5%;">
                                <p style="color: #444444; font-weight: bold; margin-left: -10px; font-size:13px;">10 YIL GARANTİ</p>
                            </b-row>
                        </b-col>
                    </b-row>
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
    <!-- Ürün sayfasındaki ürün açıklama kısmının kodları yazıldı. -->
    <div style=" padding-bottom:30px; padding-top:20px;">
        <div class="container" style="text-align:center">
            <div class="row">
                <div class="col-md-12">
                    <div class="curs" @click="degistir4">
                        <h2 style="float:left; color:black; margin-top:15px;">Ürün Açıklaması</h2>
                        <i v-show="ex4==true" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_less</i>
                        <i v-show="ex4==false" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_more</i>
                        
                    </div>
                    <div v-show="ex4==true" style="margin-top:50px; font-size:20px; color:black; text-align:left; font-size:16px;">
                        <img src="https://data.do-re.com.tr/Content/files/UrunTanitimGorselleri/akustik_piyano_hediyeleri/akustik_piyano_hediyeleri_hepsi.jpg" alt="">
                        <br>
                        <br>
                        <p><strong>Yamaha&nbsp;PSR F51 61-Tuşlu Org (Siyah)</strong></p>
                        <p><strong>Kolay, kullanıcı dostu ve eğlenceli!</strong></p>
                        <p>PSR-F51'in tasarımında ana hedef, basit ve kullanışlı olmasıdır. Sonuç olarak, herkesin kullanabileceği kolaylıkta bir klavye geliştirildi. PSR-F51 kompakt ve hafif tasarıma sahip normal boyutta bir klavyedir. Dünyadaki farklı müzik türlerinden oluşan 120 ses ve 114 ritm içerir.</p>
                        <p>Dahası, bu enstrüman, geniş bir yelpazede farklı çalma senaryoları için idealdir. PSR-F51 sadece yeni başlayanlar ve öğrenciler için mükemmel olmakla kalmaz aynı zamanda herhangi biryerde kullanmak için de piller ile desteklenebilir.</p>
                        <p><strong>Kolay, kullanıcı dostu ve eğlenceli!</strong></p>
                        <p>PSR-F51, renk kodlu, sezgisel kontrol paneliyle inanılmaz derecede kolay. Bir ses seçin, bir ritim seçin ve başlayın. 1, 2, 3 kadar basit!</p>
                        <p><strong>Tüm dünyadan sesler ve ritmler</strong></p>
                        <p>120 ses ve 114 ritm ile PSR-F51 şaşırtıcı derecede çok yönlüdür. Klavye, piyanolar, gitarlar ve nefesliler gibi tanıdık enstrümanların yanısıra, dünyanın her yerinden birçok geleneksel aleti de barındırıyor. Çift ses özelliği ile zengin ve güçlü bir ses için piyano ve yaylılar gibi enstrümanları birleştirir.</p>
                        <p><strong>Güçlü Sesler</strong></p>
                        <p>2.5W + 2.5W amplifikatörlerin ve yüksek kaliteli Yamaha Sesleri kombinasyonuyla, çok çeşitli farklı durumlarda performans yaparken güçlü ve gerçekçi seslerin tadını çıkarabilirsiniz.</p>
                        <p>Metronom ve Duo modu da dahil olmak üzere uygulama için faydalı fonksiyonlar</p>
                        <p>Yerleşik metronom, çalan kişinin pratik yaparken ritim duygularını geliştir ve çalarken ona yardımcı olur. PSR-F51 aynı anda iki kişinin birlikte çalmasını sağlayan bir Duo modu sunuyor; bu da çalarken veya ders sırasında çok yararlı olabilir.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- Ürün sayfasındaki yorumlar kısmının kodlandığı yer. -->
    <div style="background-color: rgb(246,246,246); padding-bottom:30px; padding-top:20px;">
        <div class="container" style="text-align:center">
            <div class="row">
                <div class="col-md-12">
                    <div class="curs" @click="degistir">
                        <h2 style="float:left; color:black; margin-top:15px;">Yorumlar</h2>
                        <i v-show="ex==true" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_less</i>
                        <i v-show="ex==false" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_more</i>
                        <button style="float:right; margin-right:20px; margin-top:15px; width:155px; height:40px; font-size:22px; color:black; outline:none; border:1px solid rgb(146,146,146) ;background-color:white">
                            <i class="material-icons" style="font-size:24px">mode_edit</i>
                            Yorum Yaz
                        </button>
                    </div>
                    <div v-show="ex==true" style="margin-top:50px; font-size:20px; color:black;">
                        <p style="margin-top:70px; text-align:left">Bu ürün hakkında henüz yorum yazılmamış, ilk yorumu yazan siz olmak ister misiniz?</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <!-- Ürün sayfasındaki ürün inceleme videosunun oluşturulduğu yer -->
    <div style="background-color: rgb(50,50,50); padding-bottom:40px; padding-top:20px;">
        <div class="container" style="text-align:center;">
            <div class="row">
                <div class="col-md-12">
                    <div class="curs" @click="degistir2">
                        <h2 style="float:left; color:white; margin-top:15px;">Videolar</h2>
                        <i v-show="ex2==true" class="material-icons" style="font-size:48px; color:white ;float:right; margin-top:10px;">expand_less</i>
                        <i v-show="ex2==false" class="material-icons" style="font-size:48px; color:white ;float:right; margin-top:10px;">expand_more</i>
                    </div>
                    <div v-show="ex2==true" style="margin-top:80px; font-size:20px; color:black;">
                        <div class="row">
                            <div class="col-md-10">
                            <b-embed
                                type="iframe"
                                aspect="16by9"
                                src="https://www.youtube.com/embed/eKAR5h3TTSw?iv_load_policy=3&rel=0&showinfo=0"
                                allowfullscreen
                            ></b-embed>
                            </div>
                            <div class="col-md-2" style="background-color:rgb(26,26,26)">
                                <span>
                                    <img src="https://img.youtube.com/vi/eKAR5h3TTSw/mqdefault.jpg" style="width:160px; height:100px; margin-top:15px;" alt="">
                                </span>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <!-- Ürün tavsiye slider'ının yazıldığı yer. Kodlar yazılırken bootstrap vue carousel ve cards elemanlarından faydalanıldı. -->
    <div style="padding-top:20px;">
        <div class="container" style="text-align:center">
            <div class="row">
                <div class="col-md-12">
                    <div class="curs" @click="degistir3" style="padding-bottom:30px;">
                        <h2 style="float:left; color:black; margin-top:15px;">Bu Ürüne Bakanlar Bunlara Da Baktılar</h2>
                        <i v-show="ex3==true" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_less</i>
                        <i v-show="ex3==false" class="material-icons" style="font-size:48px; color:black ;float:right; margin-top:10px;">expand_more</i>
                    </div>
                    <div v-show="ex3==true" style="margin-top:80px; font-size:20px; color:black;">
                        <div class="con-box">
                            <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="0"
                            controls
                            background=white
                            img-width="1024"
                            img-height="480"
                            
                            >
                            <!-- Text slides with image -->

                            <b-carousel-slide>
                                <template v-slot:img>
                                <b-row>
                                    <b-col>
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
                                    <b-col>
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
                                    <b-col>
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
                                    <b-col>
                                            <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e353-61-tuslu-org-2fa8427f3ed4b8fdca690f57f057ce4f-4dd3f6b5314a8d3d8417d1bd1cf56ce6-mid-pp.jpg" img-alt="Image" img-top
                                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                                <b-card-text style="font-size:12px; font-weight:bold;">
                                                Yamaha PSR E353 61 Tuşlu Org (Gümüş)
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
                                </b-row>
                                </template>
                            </b-carousel-slide>

                            <b-carousel-slide>
                                <template v-slot:img>
                                <b-row>
                                    <b-col>
                                            <b-card img-src="https://www.do-re.com.tr/yamaha-psr-e253-61-tuslu-org-69987cc2c5ff42626edb67cb6199a5bf-ec6b2ff96404f6d22e4a994fe819968a-mid-pp.jpg" img-alt="Image" img-top
                                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                                <b-card-text style="font-size:12px; font-weight:bold;">
                                                    Yamaha PSR E253 61 Tuşlu Org (Siyah)
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
                                    <b-col>
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
                                    <b-col>
                                            <b-card img-src="https://www.do-re.com.tr/casio-ct-x700-61-tuslu-org-c8cb2c42fab77ea8259e6f5f0c839442-a2da3987aa7918fa5bb7870d6c6e1f12-mid-pp.jpg" img-alt="Image" img-top
                                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                                <b-card-text style="font-size:12px; font-weight:bold;">
                                                    Casio CT-X700 61 Tuşlu Org (Siyah)
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
                                    <b-col>
                                            <b-card img-src="https://www.do-re.com.tr/casio-ct-x3000-61-tuslu-org-0f699d04fccd5bbc9514b493873c443d-172bc881e036c690f77d5703656b37fc-mid-pp.jpg" img-alt="Image" img-top
                                                tag="article" style="max-width: 20rem;" class="mb-2 cardStyle">
                                                <b-card-text style="font-size:12px; font-weight:bold;">
                                                    Casio CT-X3000 61 Tuşlu Org (Siyah)
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
                                </b-row>
                                </template>
                            </b-carousel-slide>
                            
                            </b-carousel>

                        
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
    
</div>
    
</template>

<script>
import { bus2 } from '../main'
export default {
    data(){
        return{
            // Yorumlar,videolar ve tavsiye ürün bölümünün açılıp kapanması için gereken koşul elemanları
            ex:true,
            ex2:true,
            ex3:true,
            ex4:true,
            selected: null,
            options: [
            { value: null, text: '7 Gün' },
            { value: 'a', text: '15 Gün' },
            { value: 'b', text: '30 Gün' },
            { value: 'c', text: '45 Gün' },
            { value: 'd', text: '60 Gün' },
            { value: 'd', text: '90 Gün' },
            ]
        }
    },

    methods:{
        // Aşağıdaki metotlar kullanılarak gizleme, ortaya çıkarma yapıldı.
        degistir(){
            this.ex = !this.ex
        },

        degistir2(){
            this.ex2 = !this.ex2
        },

        degistir3(){
            this.ex3 = !this.ex3
        },

        degistir4(){
            this.ex4 = !this.ex4
        },

        sayfaDegis(id){
            if(id==1){
                bus2.$emit('sayfaDegisti','mainpage')
            }
            else if(id==2){
                bus2.$emit('sayfaDegisti','tuslu')
            }
            else if(id==3){
                bus2.$emit('sayfaDegisti','tusluUrunler')
            }
        }
    }
}
</script>

<style scoped>
/* Aşağıda gerekli template elemanlarının özellikleri sınıflar içerisinde tanımlandı. 
İmport ile hazır ikonlar kullanılmak üzere bu komponente eklendi. */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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

.cardStyle{
    border:2px solid white;
    border-radius: 4px;
}

.cardStyle:hover{
    border:2px solid rgb(146,146,146);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
  color: red;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}
/* --------- BUTTONS -----------*/
.sepet-button{
    height: 50px; width: 240px; font-size: 26px; background-color: #ff7109; border:none; color: white;
}

.sepet-button:hover{
    background-color: black;
}

/* -------- ICON SECTION ---------*/
.icon-section .section{
    background-color: #eeeeee;
}

.icon-section .section:hover{
    border: 1px solid #d3d3d3;
}

</style>