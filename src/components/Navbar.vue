<template>
    <div>

        <div class="navbar sticky">
        <div class="icon-con">
        <div class="subnav" >
            <button class="subnavbtn" >PİYANOLAR<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Piyano Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Piyano Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn" style="height:55px;">TUŞLULAR<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Tuşlu Enstrüman Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Tuşlu Enstrüman Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">GİTARLAR<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Gitar Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Gitar Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">AMFİ & EFEKT<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Amfi & Efekt Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Amfi & Efekt Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">YAYLILAR<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Yaylı Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Yaylı Enstrüman Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">NEFESLİLER<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Nefesli Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Nefesli Enstrüman Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">DAVUL & PERKÜSYON<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Davul & Perküsyon Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Davul & Perküsyon Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">STÜDYO & SAHNE<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Stüdyo & Sahne Ekipmanları Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Stüdyo & Sahne Ekipmanları Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>
            </div>
        </div>
        <div class="subnav">
            <button class="subnavbtn">AKSESUARLAR<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <div class="icon-con">
                <a href="#">Aksesuar Modelleri</a>
                <a href="#">Çok Satanlar</a>
                <a href="#">İndirimli Ürünler</a>
                <a href="#">Aksesuar Markaları</a>
                <a href="#">Tanıtım Videoları</a>
                </div>    
            </div>
        </div>
        <a href="#" style="background-color:darkorange; float:left; padding: 18px 13px;">OUTLET</a>
        </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

.navbar {
    width: 100%;
    float: left;
    background-color: black;
    position: sticky;
    top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    z-index: 10;
    height: 55px;
    font-weight: bold;
  }
  
  /* Navigation links */
  
  .navbar a {
    float: left;
    font-size: 13px;
    color: white;
    text-align: center;
    padding: 15px 15px;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    z-index: 11;
  }
  
  /* The subnavigation menu */
  
  .subnav {
    float: left;
    overflow: hidden;
  }
  
  /* Subnav button */
  
  .subnav .subnavbtn {
    font-size: 13px;
    border: none;
    outline: none;
    color: white;
    padding: 15px 15px;
    background-color: inherit;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    font: 600;
    font-weight: bold;
    height: 55px;
  }
  
  /* Add a red background color to navigation links on hover */
  
  .navbar a:hover,
  .subnav:hover .subnavbtn {
    background-color: rgb(120, 151, 140);
    
  }
  
  /* Style the subnav content - positioned absolute */
  
  .subnav-content {
    display: none;
    position: absolute;
    left: 0;
    background-color: rgb(120, 151, 140);
    width: 100%;
    z-index: 1;
    visibility: hidden;

  }
  
  /* Style the subnav links */
  
  .subnav-content a {
    color: white;
    text-decoration: none;
    display: inline;
  }
  
  /* Add a grey background color on hover */
  
  .subnav-content a:hover {
    background-color: white;
    color: rgb(120, 151, 140);
  }
  
  /* When you move the mouse over the subnav container, open the subnav content */
  
  .subnav:hover .subnav-content {
    visibility: visible;
    display: block;
  }

.icon-con {
box-sizing: border-box;
margin: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
margin-right: auto;
margin-left: auto;
width: 1200px;

}



</style>