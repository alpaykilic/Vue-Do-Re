<template> 
    <div style="background-color:rgb(238,238,238); padding-top: 80px;">
        <!-- Bu kısımda hangi sayfanın açıldığını gösteren breadcrumb kısmı var. -->
        <div class="container">
            <div class="row">
                Anasayfa > {{ page }}
            </div>
        </div>

        <!-- Burada iletişim sayfasının içeriği bulunuyor. Butonlar aracılığıyla sayfa 
        içerisinde diğer sayfalar gösteriliyor. -->
        <div class="container" style="margin-top:20px;">
            <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <div class="row">
                        <div class="col-md-3 col-xs-3 col-sm-4">
                            <div style="background-color: white">
                                <button style="text-align:left; width:285px; margin-left:-15px; font-size:22px;  
                                font-weight:bold; color:black; outline:none; border:none; background-color:white;" 
                                disabled>Menü</button>
                                <button @click="changePage(0)" class="but" autofocus>•  Hakkımızda</button>
                                <button @click="changePage(1)" class="but">•  İnsan Kaynakları</button>
                                <button @click="changePage(2)" class="but">•  Garanti ve İade Koşulları</button>
                                <button @click="changePage(3)" class="but">•  Gizlilik ve Güvenlik</button>
                                <button @click="changePage(4)" class="but">•  Banka Hesap Numaralarımız</button>
                                <button @click="changePage(5)" class="but">•  Teslimat Koşulları</button>
                                <button @click="changePage(6)" class="but">•  Piyano Kiralama</button>
                                <button @click="changePage(7)" class="but">•  Kurumsal Satış</button>
                                <button @click="changePage(8)" class="but">•  İletişim</button>                               
                            </div>
                        </div>

                        <div class="col-md-9 col-xs-9 col-sm-8">
                            <div v-if="this.sayfa == 0" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <h4 style="color:black; font-weight:bold">Vizyon</h4>   
                                <p style="padding-left:20px; text-align:left;">Sektöre liderlik eden ve katma değer yaratan, çalışanlarına ve müşterilerine ilham veren ve mutluluk üreten seçkin bir şirket olmak.</p>
                                <br>
                                <h4 style="color:black; font-weight:bold">Misyon</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    100 kişinin üzerinde bir ekip ile amacımız; 
                                    “Türkiye’nin En Büyük Müzik Aletleri Mağazalar Zinciri” mottosuna layık, 
                                    ülkemizin kültürel ve sanatsal kalkınmasında söz ve pay sahibi olabilmektir.
                                </p>
                                <br>
                                <h4 style="color:black; font-weight:bold">Şirket Kültürü</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    Her bir çalışanımız kendisini doremusic ailesinin 
                                    seçkin bir bireyi olarak düşünmekte ve bu kültüre 
                                    uygun olarak hareket etmektedir. Güvenin esas olduğu, 
                                    sonuç odaklı bir yaklaşım ile ürettiğimiz marka değeri sayesinde 
                                    sektördeki liderliğimizi korumaktayız.
                                </p>
                                <p style="padding-left:20px; text-align:left;">Mutlu Çalışan &gt; Mutlu Müşteri &gt; doremusic</p>
                                <br>
                                <h4 style="color:black; font-weight:bold">Hakkımızda</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    doremusic, 1993 yılında İzmir’de kurulmuş, kısa sürede dünyaca 
                                    ünlü markaların distribütörlüğüne ev sahipliği yapmaya başlamış 
                                    ve Türkiye’de “Müzik Enstrümanları” sektörünün lideri haline gelmiştir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Portföyünde ki tüm ürünlerin Türkiye Distribütörü ve İthalatçısı 
                                    olan doremusic, Online Satış Mağazası olan www.do-re.com.tr ‘nin 
                                    yanı sıra İstanbul’da 13, Ankara’da 4, İzmir’de 2, Eskişehir, Adana, 
                                    Gaziantep, Antalya, Samsun ve Bursa’da 1 olmak üzere 25 “Perakende 
                                    Mağazası” ve 600’den fazla bayisi ile müşterilerine hizmet vermektedir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    1 tanesi İzmir, 2 tanesi İstanbul ve 1 tanesi Ege Serbest Bölgesinde 
                                    olmak üzere 6.500 m2 kapalı depo hacmi ile Türkiye’nin tüm bölgelerine 
                                    distribütörlüğünü yapmakta olduğu 125’den fazla markanın ürünlerini 
                                    en doğru ve en hızlı şekilde ulaştırmaya çalışmaktadır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    doremusic Türkiye’nin tüm konservatuar, müzik fakültesi, güzel sanatlar 
                                    lisesi, askeri kurumlar ve diğer bir çok değerli kurumun, 
                                    yapılan ihaleler vasıtası ile tedarikçisi konumundadır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Firmamız özellikle uzun yıllar başarılı olarak sürdürdüğü “Yamaha 
                                    Müzik Enstrümanları Distribütörlüğü” ve Enstrüman alanında dünyanın 
                                    önde gelen bir çok önemli markasının “Tek Yetkili Distribütörü” konumunda 
                                    aldığı bir çok ödül ile sektörün en önemli aktörü ve gurur kaynağı olmuştur.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    doremusic tüm bunların dışında ülkemizde yapılan bir çok etkinliğe ve 
                                    ülkemizin değerli müzisyenlerine sponsor olarak da destek olmaktadır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">Saygılarımızla,</p>
                                <p style="padding-left:20px; text-align:left;">doremusic</p>
                            </div>

                            <div v-if="this.sayfa == 1" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <p style="padding-left:20px; text-align:left;">
                                    'Müzik de yaparım kariyer de' diyorsanız; İstanbul ve Ankara'da yeni açılacak 
                                    doremusic mağazalarımız için başvurularınızı bekliyoruz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Başvurularınız için özgeçmişlerinizi cv@doremuzik.com.tr adresine mail olarak iletebilirsiniz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">Saygılarımızla,</p>
                                <p style="padding-left:20px; text-align:left;">doremusic</p>
                            </div>

                            <div v-if="this.sayfa == 2" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <h4 style="color:black; font-weight:bold">Garanti Koşulları</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    Tüm ürünler, aksi belirtilmedikçe üretici firma ve distribütör garantisi altındadır. 
                                    Garanti koşullarının geçerli olabilmesi için, kargo teslimatı esnasında ürünü mutlaka kontrol 
                                    ederek teslim alın. Ürün kutusu üzerinde oluşmuş herhangi bir hasar söz konusu ise mutlaka 
                                    tutanak tutturarak ürünü teslim almayınız. Ürün üzerinde yapılan değişiklikler, ürünün deforme 
                                    olması ya da ürünün orijinal dizaynının bozulması garanti kapsamı dışındadır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    İnternet sitemizde satışını yapmakta olduğumuz tüm ürünler “2 Yıl” garantilidir.
                                </p>
                                <br>
                                <h4 style="color:black; font-weight:bold">İade ve Değişim Koşulları</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    Sitemiz üzerinden satın almış olduğunuz ürünleri, teslimat tarihinden itibaren 
                                    “14 Gün” içerisinde iade edebilir ya da değiştirebilirsiniz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    İade ve değişimi talep edilecek ürünün ticari vasfını yitirmemiş olması, ambalajının 
                                    korunmuş, aksesuar ve tüm ürün içeriğinin eksiksiz olması gerekmektedir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    İade etmek ya da değiştirmek istediğiniz ürünleri, mutlaka anlaşmalı kargo firmamız 
                                    “Aras Kargo” aracılığı ile ürün faturasının tüm nüshaları eksiksiz olacak şekilde
                                     “Karşı Ödemeli” olarak göndermiş olmanız gerekmektedir. (Anlaşmalı kargo firması dışında 
                                     karşı ödemeli olarak yapılan gönderiler teslim alınmayacaktır.)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    İade edilmek istenen ürünler depomuza ulaşıp, teknik ekibimiz tarafından yapılan inceleme 
                                    sonucunda herhangi bir kusurun olmadığı onayı verildikten hemen sonra, 
                                    ücret iadeniz en geç “10 İş Günü” içerisinde yapılacaktır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Gönderimi yapılmış olan ürünün kusurlu olduğu tüm durumlarda iade kargo ücretleri 
                                    (Giden & Gelen) “doremusic” tarafından karşılanacaktır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Ürünün kusurlu olmadığı tüm iade durumlarında kargo ücretleri (Giden & Gelen) ürün tutarından 
                                    düşülerek, ilgili tutar “kargo ücretleri düşülmüş” olarak müşteri hesabına iade edilecektir.
                                </p>
                                <br>
                                <h4 style="color:black; font-weight:bold">İadesi ve Değişimi Mümkün Olmayan Ürünler</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    Orijinal ambalajı açılmış, bozulmuş ve ticari vasfını yitirmiş ürünler.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Ürün içeriğinde yazılım içeren ürünler. (Ses Kartı vb..)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Kurulumu yapılmış ürünler. (Piyano, Davul vb..)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Hijyenik açıdan tehlike arz edebilecek ürünler. (Nefesli Enstrümanlar, Mikrofonlar, Kulaklıklar vb..)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Faturası ile birlikte gönderilmeyen ürünler.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Koruyucu mataryel ve jelatinleri sökülmüş olan ürünler.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    İade ve Değişimi mümkün olmayan ürün gruplarında, ürünü kargodan “teslim almadan” iade edebilir ya da 
                                    değişimini talep edebilirsiniz. İlgili ürünlerin teslim alınması iade ve değişim hakkını tamamen ortadan kaldıracaktır.
                                </p>
                                <br>
                                <h4 style="color:black; font-weight:bold">Ürün Değişim ve İadelerinde Dikkat Edilmesi Gerekenler</h4>
                                <p style="padding-left:20px; text-align:left;">
                                    Ürünler mutlaka siz gönderildiği gibi, taşıma esnasında hasar almayacak şekilde paketlenmiş olması gerekmektedir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Ürünün orijinal kutusu ya da ambalajı üzerine herhangi bir etiket ya da bant yapıştırılmamış olması gerekmektedir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Satın almış olduğunu ürünü göndermeden önce mutlaka “Destek” ekibimiz ile iletişime geçerek bilgi veriniz.
                                </p>
                            </div>
                            <div v-if="this.sayfa == 3" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <p style="padding-left:20px; text-align:left;">
                                    1- Üyelerimize daha güvenli bir internet ortamı sağlamak her zaman birinci öncelikli konumuz olacaktır. 
                                    Bundan dolayı, üyelerimizin kendilerini rahat hissetmeleri ve site içi işlemleri yaparken şüphe 
                                    duymamaları için için bazı gizlilik hakları tanıdık. Üyelerimizin, sahip oldukları bu haklar, aşağıda sıralanmıştır:
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    2- Elektronik posta adresiniz başta olmak üzere bize verdiğiniz iletişim bilgileriniz hiçbir gerekçe ile başka 
                                    kuruluşlara dağıtılmayacak ve reklam, tanıtım, pazarlama yapmak amacıyla kullanılmayacaktır. 
                                    Ancak üyemiz olarak sizler için yaptığımız kampanyalar bizim tarafımızdan isterseniz size bildirilecektir. 
                                    Size gönderilecek bülten maillerinde ki mail almak istemediğinize dair linklere tıklayarak listelerden kendinizi çıkarabilirsiniz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    3- Bize verdiğiniz üyelik bilgileri ve kişisel bilgileriniz, sizin onayınız dışında diğer üyeye ve firmaya açılmayacaktır. 
                                    Ancak bu bilgiler, sitemizin kendi bünyesinde müşteri profili belirlemek amacıyla kullanılacaktır. 
                                    Gerektiğinde üyeliğinizi iptal ederek tüm bilgilerinizi sistemden silebilir, Veya sadece E-bülten bildirilerinden çıkabilirsiniz. 
                                    ( Üyeliğinizi tamamen deaktif etmek isterseniz lütfen kullanıcı adınız ve mail adresi bilgilerinizi üyelik 
                                    sil konu başlığı ile destek@doremuzik.com.tr adresine gönderiniz.Üyeliğiniz aynı gün içinde sistemden silinecektir.)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    4- Üye olurken doldurduğunuz bilgiler https:// uzantılı ve tamamen güvenli SSL bağlantılı sayfalar aracılığı ile olmaktadır. 
                                    Üyelik formunu doldururken sizden istenen kişisel ve iletişim bilgilerinizden, zorunlu olanlar hariç, istediklerinizi kendi 
                                    inisiyatifiniz dahilinde bize bildirebilirsiniz. Bize vermeyi tercih etmeyeceğiniz bilgiler varsa, bu alanları doldurmak 
                                    veya işaretlemek zorunda değilsiniz.Zorunlu olanlar işareti ile belirtilmiştir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    5- Üye girişi yaparak girdiğiniz tüm bilgilere sadece siz ulaşabilir ve bunları sadece siz değiştirebilir ve silebilirsiniz. 
                                    Bir başka üyenin sizinle ilgili bilgilere ulaşması ve bunları değiştirmesi mümkün değildir. 
                                    Bundan dolayı kullanıcı adını ve şifrenizi hiç kimse ile paylaşmamanız gerekmektedir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    6- Sitemizden yaptığınız alışverişlerde vermiş olduğunuz kredi kartı bilgileri kesinlikle sistemimiz tarafından kayıt 
                                    altına alınmamaktadır.https:// uzantılı tamamen güvenli SSL bağlantılarıyla ödeme sayfamıza yönlendiriliyorsunuz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Bu ilkeler ile kişisel haklarınız bizim tarafımızdan teminat altına alınmıştır.
                                </p>
                            </div>

                            <div v-if="this.sayfa == 4" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <table style="margin: 30px; margin-top: 0px; border: 1px solid rgb(205,205,205);">
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/AKBANK_thumb.jpg" alt="Akbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Akbank TL HESABI</strong>
                                            <br>
                                            IBAN: TR92 0004 6002 8488 8000 0948 64                                                    
                                            <br>
                                            Halit Ziya Şubesi (Şube Kodu: 284), Hesap No: 0094864         
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/DENIZBANK_thumb.jpg" alt="Denizbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Denizbank TL HESABI</strong>
                                            <br>
                                            IBAN: TR89 0013 4000 0014 5573 9000 04
                                            <br>
                                            Fevzipaşa Bulvarı Şubesi (Şube Kodu: 7010), Hesap No: 1455739-353
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/FINANSBANK_thumb.jpg" alt="Finansbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Finansbank TL HESABI</strong>
                                            <br>
                                            IBAN: TR55 0011 1000 0000 0029 6233 18                                                    
                                            <br>
                                            İzmir Şubesi (Şube Kodu: 00350), Hesap No: 29623318                                                    
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/GARANTI_thumb.jpg" alt="Garanti">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Garanti TL HESABI</strong>
                                            <br>
                                            IBAN: TR52 0006 2000 1000 0006 2941 00                                                    
                                            <br>
                                             İzmir Ticari Şube (Şube Kodu: 100), Hesap No: 6294100
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/HALKBANK_thumb.jpg" alt="Halkbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Halkbank TL HESABI</strong>
                                            <br>
                                            IBAN: TR10 0001 2009 4250 0010 2604 99                                                    
                                            <br>
                                             İzmir Ticari Şube (Şube Kodu: 425), Hesap No: 10260499                                                    
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/INGBANK_thumb.jpg" alt="Halkbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">ING BANK TL HESABI</strong>
                                            <br>
                                            IBAN: TR03 0009 9003 6511 2600 1000 04                                                                                                      
                                            <br>
                                            İzmir Şube (Şube Kodu: 439)                                                                                                    
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style="border:1px solid rgb(205,205,205)">
                                            <img style="margin-top: -50px; margin-left: 20px; margin-right: 20px;" src="https://data.do-re.com.tr/BankLogo/ZIRAAT_thumb.jpg" alt="Halkbank">
                                        </th>
                                        <th class="tabloEleman">
                                            <strong style="margin-bottom:10px;">Ziraat Bankası TL HESABI</strong>
                                            <br>
                                            IBAN: TR81 0001 0026 1640 4437 6950 12                                                                                                       
                                            <br>
                                            Konak / İzmir Girişimci Şubesi (Şube Kodu: 2616), Hesap No: 40443769-5012                                                                                          
                                            <br>
                                            Alıcı Adı: Do-Re Dış Tic. Ltd. Şti.                                                                                       
                                        </th>
                                    </tr>
                                </table>
                            </div>

                            <div v-if="this.sayfa == 5" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <p style="padding-left:20px; text-align:left;">
                                    Tüm siparişleriniz "1 İş Günü" içerisinde kargoya teslim edilir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Yoğunluk nedeni ile yaşanabilecek gecikmelerde, kargo süreci maksimum "3 İş Günü" gibi bir süreyi aşmayacaktır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Herhangi bir gecikmenin yaşanması durumunda müşterilerimiz mutlaka "Mail" ile bilgilendirilecek 
                                    ve sürecin en hızlı şekilde sonuçlandırılması sağlanacaktır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Tüm bilgilendirme süreçlerinde müşterilerimize, siparişlerini oluştururken kullandıkları iletişim 
                                    bilgileri üzerinden ulaşılacaktır. Bu nedenle bilgilerinizin eksiksiz ve doğru olması önemlidir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Özel üretim ürünlerin teslim süreleri imalat zamanına göre farklılık göstermektedir. 
                                    Bu tür ürünlerin teslimat bilgileri ve süreleri ürün sayfalarında belirtilmiştir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Bayram ve Tatil günlerinde teslimat yapılamamaktadır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Seçtiğiniz ürünlerin tamamı anlaşmalı olduğumuz kargo şirketi "Aras Kargo" garantisi ile adresinize teslim edilecektir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Satın aldığınız ürünler, paylaşmış olduğunuz mail adresi ile tarafınıza bildirilecektir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    www.do-re.com.tr bir online alışveriş sitesidir. Aynı anda birden çok müşteriye alışveriş yapabilme imkanı tanır. 
                                    Ziyaretçilerin aynı ürünü sipariş verebilmeleri ve bu nedenle stok anlık olarak değişebilmeleri söz konusudur.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Siparişini vermiş olduğunuz ürünün herhangi bir nedenden dolayı stoklarda tükenmiş 
                                    olması durumunda, mutlaka "Telefon" ile tarafınıza bilgi verilecektir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Ödemesini internet sitemiz üzerinden yapmış olduğunuz siparişlerde, ürünün stoklarımızda bulunmaması durumunda, en az 4 
                                    (dört), en fazla 30 (otuz) gün bekleme süresi mevcuttur. Firmamız bu süre içerisinde ürününüzü temin ve teslim için 
                                    hassasiyetle ilgilenecektir. İlgili tarihler arasında tüketiciye teslim edilemeyen ürünlerde, tüketicinin ödemesi kendisine iade edilir.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Siparişinizin kargo firmasına teslim edilmesi durumunda, siparişinizin "Kargo Takip Numarası" bilgisi, 
                                    siparişinizi oluştururken paylaşmış olduğunuz tanımlı mail adresiniz ile paylaşılır.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    (Kargo Takip Numarasının, anlaşmalı olduğumuz kargo firması tarafından bize iletilmesi "1 Gün" gibi bir süreyi bulabilmektedir. 
                                    Bu gibi durumlarda siparişiniz aynı gün kargoya verilmiş olmasına rağmen, Kargo Takip Numaranız bir sonraki günün sabahı sizinle paylaşılabilir.)
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    "Kargo Takip Numarası" tarafınıza iletildiği zaman siparişinizin tesliminde herhangi bir gecikme 
                                    yaşanmaması adına "Aras Kargo" ile iletişime geçerek, kargonuz hakkında bilgi alabilirsiniz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Teslimat ile ilgili tüm problemlerinizde; (0212) 236 57 13 nolu telefondan 
                                    Müşteri Hizmetleri birimize ulaşarak destek alabilirsiniz.
                                </p>
                            </div>

                            <div v-if="this.sayfa == 6" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <p style="padding-left:20px; text-align:left;">
                                    Konser, Organizasyon ve Kurumsal Etkinlikleriniz için dünyaca ünlü markaların akustik kuyruklu ve konsol piyano modelleri ile hizmetinizdeyiz. 
                                    Türkiye’nin her noktasına, uzman teknik ve taşıma ekibimizle; nakliye, montaj ve akort hizmeti tarafımızca verilmektedir.
                                </p>
                                <br>
                                <h4 style="color:black; font-weight:bold; text-align:left; padding-left:20px;">Markalarımız</h4>
                                <ul class="bulleted16">
                                    <li style="padding-left:10px; text-align:left;">Yamaha</li>
                                    <li style="padding-left:10px; text-align:left;">Pearl River</li>
                                    <li style="padding-left:10px; text-align:left;">Seiler</li>
                                </ul>
                                <p style="padding-left:20px; text-align:left;">
                                    Piyano kiralama konusunda detaylı teknik bilgi ve fiyat teklifi almak için:
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    <strong>Telefon</strong>
                                    : 0212 236 57 13
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    <strong>Mail</strong>
                                    : destek@doremuzik.com.tr
                                </p>
                            </div>

                            <div v-if="this.sayfa == 7" style="margin-left:10px; background-color:white;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <br>
                                <p style="padding-left:20px; text-align:left;">
                                    doremusic olarak 20'yi aşkın ve her geçen gün artan mağaza sayımızla, batı müziği enstrümanları kategorisinde piyanolardan, 
                                    gitarlara, davul ve perküsyonlardan, nefesli enstrümanlara, yaylı enstrümanlara ve ses sistemlerine kadar dünyanın önde 
                                    gelen markaları ile her ihtiyaca ve bütçeye uygun hizmet veriyoruz. Eğitim ve Kamu Kurumları ile Özel Kurum ve Şirketler
                                    için ürettiğimiz özel çözümlerimizi en uygun ödeme seçenekler ile sizlere sunuyoruz.
                                </p>
                                <ul class="bulleted16">
                                    <li style="padding-left:10px; text-align:left;">Eğitim Kurumlarına Özel Enstrüman Çözümleri</li>
                                    <li style="padding-left:10px; text-align:left;">Eğitim Kurumları için Öğrenci Enstrümanı Çözümleri</li>
                                    <li style="padding-left:10px; text-align:left;">Kamu Kurumları için Grup ve Organizasyon Enstrüman Çözümleri</li>
                                    <li style="padding-left:10px; text-align:left;">Özel Kurumlar için Enstrüman Çözümleri</li>
                                    <li style="padding-left:10px; text-align:left;">Şirketler için Çalışan ve Müşterilerine Özel Hediye Çözümleri</li>
                                    <li style="padding-left:10px; text-align:left;">Kurum ve Şirketler için Dekoratif Çözümler</li>
                                </ul>
                                <p style="padding-left:20px; text-align:left;">
                                    İhtiyaçlarınıza uygun kurumsal çözümlerimizle her an sizlerleyiz.
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    Tüm istek ve talepleriniz için:
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    kurumsal@doremuzik.com.tr
                                </p>
                                <p style="padding-left:20px; text-align:left;">
                                    0212 264 33 47
                                </p>
                            </div>

                            <div v-if="this.sayfa == 8" style="margin-left:10px; background-color:white; margin-bottom:20px;">
                                <h1 style="color:black; padding-top:20px;">{{ page }}</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                
                                <div style="text-align:center; border:1px solid rgb(146,146,146); margin: 30px;">
                                    <h1 style="color:black; padding-top:20px;">Online Sipariş & Destek</h1>
                                    <h2 style="color:black; padding-top:5px;">(212) 236 57 13</h2>
                                    <br>
                                    Çalışma Saatleri:
                                    <br>
                                    Hafta İçi: 09:00 - 18:00, Hafta Sonu: 09:00 - 13:00
                                    <br>
                                    <br>
                                    Hizmetler:
                                    <br>
                                    Teknik Bilgi (Ürünler), Satış & Müşteri Desteği, Sipariş & Kargo Takibi, Şikayet & Öneriler
                                </div>
                                <div style="text-align:center; border:1px solid rgb(146,146,146); margin: 30px;">
                                    <h2 style="color:black; padding-top:5px;">Merkez Ofis</h2>
                                    (212) 236 36 40
                                    <br>
                                    <br>
                                    Çalışma Saatleri:
                                    <br>
                                    09:00 - 18:00 (Hafta İçi)
                                </div>
                                <div style="text-align:center; border:1px solid rgb(146,146,146); margin: 30px;">
                                    <h2 style="color:black; padding-top:5px;">Kurumsal Satış (Kurum & Okul)</h2>
                                    (212) 264 33 47
                                    <br>
                                    <br>
                                    Çalışma Saatleri:
                                    <br>
                                    09:00 - 18:00 (Hafta İçi)
                                </div>
                                <div style="text-align:center; border:1px solid rgb(146,146,146); margin: 30px;">
                                    <h2 style="color:black; padding-top:5px;">Toptan Satış</h2>
                                    (232) 463 00 55
                                    <br>
                                    <br>
                                    Çalışma Saatleri:
                                    <br>
                                    09:00 - 18:00 (Hafta İçi)
                                </div>
                                <h1 style="color:black; padding-top:20px;">{{ page }} Formu</h1>
                                <hr style="margin-left:5%; margin-right:5%;">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12 col-sm-12">
                                        <div class="row">
                                            <div class="col-md-3 col-xs-3 col-sm-4">
                                                <p class="formYazi" style="margin-top:5px; margin-bottom:20px;">Departman :</p>
                                                <p class="formYazi">Adınız :</p>
                                                <p class="formYazi">Soyadınız :</p>
                                                <p class="formYazi">E-posta Adresiniz :</p>
                                                <p class="formYazi">Telefonunuz :</p>
                                                <p class="formYazi">Mesajınız :</p>
                                            </div>
                                            <div class="col-md-9 col-xs-9 col-sm-8">
                                                <b-form-group style="margin-right:35px;">
                                                    <b-form-select
                                                        class="mb-2 mr-sm-2 mb-sm-0"
                                                        :value="null"
                                                        :options="{ '1': 'Ürün Stok', '2': 'Online Destek', '3': 'Mağaza Destek', '4': 'Kurumsal Satış', '5': 'Toptan Satış' }"
                                                        id="inline-form-custom-select-pref"
                                                        style="padding:5px; height:35px; border: 1px solid rgb(206,206,206);"
                                                        >
                                                        <template v-slot:first>
                                                            <option :value="null">Seçiniz</option>
                                                        </template>
                                                    </b-form-select>
                                                </b-form-group>
                                                <b-form-group style="margin-right: 35px;">
                                                    <b-form-input
                                                        size="sm"
                                                        style="height:30px; border: 1px solid rgb(206,206,206);"
                                                    ></b-form-input>
                                                </b-form-group>
                                                <b-form-group style="margin-right: 35px;">
                                                    <b-form-input
                                                        size="sm"
                                                        style="height:30px; border: 1px solid rgb(206,206,206);"
                                                    ></b-form-input>
                                                </b-form-group>
                                                <b-form-group style="margin-right: 35px;">
                                                    <b-form-input
                                                        size="sm"
                                                        style="height:30px; border: 1px solid rgb(206,206,206);"
                                                    ></b-form-input>
                                                </b-form-group>
                                                <b-form-group style="margin-right: 35px;">
                                                    <b-form-input
                                                        size="sm"
                                                        style="height:30px; border: 1px solid rgb(206,206,206);"
                                                    ></b-form-input>
                                                </b-form-group>
                                                <b-form-group style="margin-right: 35px;">           
                                                    <b-form-textarea
                                                        id="dropdown-form-msg"
                                                        rows="3"
                                                        style="height:82px; border: 1px solid rgb(206,206,206); text-align:justify; font-size: 14px;"
                                                    ></b-form-textarea>
                                                </b-form-group >
                                                <div>
                                                    <b-form-checkbox style="text-align:left;" class="mb-2 mr-sm-2 mb-sm-0">
                                                        <u>Gizlilik ve Güvenlik Politikasını</u> Okudum, Kabul Ediyorum.
                                                        </b-form-checkbox>
                                                    
                                                </div>
                                                <button class="sendBut">GÖNDER</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // item dizisi iletişim sayfasının içindeki sayfa isimlerini tutuyor.
            item:[
                {isim:"Hakkımızda"},
                {isim:"İnsan Kaynakları"},
                {isim:"Garanti ve İade Koşulları"},
                {isim:"Gizlilik ve Güvenlik"},
                {isim:"Banka Hesap Numaralarımız"},
                {isim:"Teslimat Koşulları"},
                {isim:"Piyano Kiralama"},
                {isim:"Kurumsal Satış"},
                {isim:"İletişim"},
                ] ,
            sayfa: 0,
            page: "Hakkımızda"
        }
    },
    // bu metot iletişim sayfasındaki sayfa butonlarına tıklandığında tıklanan sayfayı açıyor
    // ve breadcrumb a açılan sayfayı yazıyor.
    methods:{
        changePage(pg){
            this.sayfa = pg
            this.page = this.item[pg].isim
        }
    }
}
</script>

<style scoped>
/*-- Görüldüğü üzere aşağıda bu komponentte kullanılan classlar tanımlanmıştır. -- */
.but{
    text-align:left; 
    width:285px; 
    margin-left:-15px;
    outline: none;
    border: none;
    background-color: white;
    height: 30px;
    padding-left: 15px;
}

.but:hover{
    background-color: rgb(123, 204, 51);
    color: white;
}
.but:focus{
    background-color: rgb(123, 204, 51);
    color: white;
}

.formYazi{
    text-align:right; 
    color:black; 
    font-size:18px; 
    font-weight:bold;
    margin-top: 18px;
}

.sendBut{
    background-color: rgb(0, 99, 209);
    width: 120px;
    height: 32px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    float: right;
    margin-right: 35px;
    margin-bottom: 15px;
    border: none;
    outline: none;
}

.tabloEleman {
    border: 1px solid rgb(205,205,205); 
    color:black; 
    font-weight:400; 
    text-align:left; 
    width:620px; 
    padding-left:10px;
}
</style>