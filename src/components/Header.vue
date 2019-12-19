<template>
<div class="icon-con" style="padding-bottom: 0px;">
    <div class="colvs" style="float:right; padding: 0px; width: 970; margin-bottom: 8px; font-size:15px; color:black text-decoration:none;">
        <a href="" style="text-decoration:none;">Blog</a>
        |
        <a href="" style="text-decoration:none;">Mağazalar</a>
        |
        <a href="" style="text-decoration:none;">Sipariş Takibi</a>
        |
        <button @click="iletisimAc" style="text-decoration:none; border:none; outline:none; background-color:transparent">İletişim</button>
        |
        <span style="font-weight: 550;">Sipariş ve Destek Hattı: (212) 236 57 13</span>

    </div>
<br>
    <hr style="margin-right: auto; margin-left: auto; width: 1168px;">
    

    <div class="row" style="padding: 0px; width: 1168px; margin-left: auto; margin-right: auto">
        <div class="column left" style="background-color:transparent">
          <!--  <img src="../assets/logo.svg" style="margin-bottom: 30px" width="260px;" height="110px;" usemap="#mainmap">
            <map name="mainmap" >
                <area shape="rect" coords="10,20,250,100" href="">
            </map>
            -->
            <button class="dorebuton" style="outline: none;" @click="sayfaDegis2"></button>
        </div>
        <div class="column middle" style="background-color:transparent;">
            <div class="example" style="margin-right: auto;margin-top:40px;max-width:400px">
                <input v-model="ara" type="text" placeholder="Aramak istediğiniz ürünü yazın" name="search2"
                    style=" border: 2px solid #f1f1f1; height:40px; width:300px; padding-left:15px;">
                <button @click="sayfaDegis5" style="margin:auto; width:80px; height:40px; background-color:black; color:white; border:none; outline:none;"> Ara</button>
            </div>

        </div>
        <div class="column right" style="background-color:transparent;">
            <div class="nologin" v-show="!check">
                <div style="float: right;margin-top: 30px">
                    <button @click="sayfaDegis3"
                        style="color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; text-decoration:none; border:none; outline:none; background-color:white">GİRİŞ YAPIN</button>
                    YA DA
                    <button @click="sayfaDegis4"
                        style="color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; text-decoration:none; border:none; outline:none; background-color:White">ÜYE OLUN</button>
                </div>
            </div>
            <div class="nologin" v-show="check">
                <div style="float: right;margin-top: 25px">
                    
                    <button 
                        style="color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; text-decoration:none; border:none; outline:none; background-color:White">PROFİLİM</button>
                </div>
            </div>
            <div style="float: right;">
                <div class="row">
                    <div class="sepet-icon" style="margin-left: -20px; margin-top: 0px;">
                        {{ msg }}
                        <img src="../assets/shopbasket.png" style="margin-top: -20px; margin-left:5px">
                        <map name="workmap2">
                            <area shape="rect" coords="0,0,24,24" href="/">
                        </map>                   
                    </div>
                </div>


                <button @click="sayfaDegis" target="_self"
                    style="margin-top: -10px; color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; border:none; background-color: white; outline:none;">SEPETİM</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
// event bus u import ediyoruz.
import { bus2 } from '../main'
import { totalUrun } from '../main'
import { loginBus } from '../main'
import { aramaBus } from '../main'

export default {
    
    data(){
        return{
            msg: 0,
            sayfa: '',
            check: false,
            ara: ''
        }
    },
   // burada tanımlanan msg değişkeni tabnavsection componentinden gelen veriye eşitleniyor.
    created(){
        totalUrun.$on('guncellendi',(data) => {
            this.msg = data
        }),
        loginBus.$on('girisYapildi', (data) => {
            this.check = data
        })
    },

    methods:{
        sayfaDegis(){
            this.sayfa = 'sepetim'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },

        iletisimAc(){
            this.sayfa = 'iletisim'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },

        sayfaDegis2(){
            this.sayfa = 'mainpage'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },

        sayfaDegis3(){
            this.sayfa = 'login'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },

        sayfaDegis4(){
            this.sayfa = 'register'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },
        sayfaDegis5(){
            this.sayfa = 'arama'
            bus2.$emit('sayfaDegisti',this.sayfa)
            aramaBus.$emit('arandi', this.ara)
        }
    }

}
</script>

<style>
        * {
            box-sizing: border-box;
        }

        /* Create three unequal columns that floats next to each other */
        .column {
            float: left;
            padding: 10px;
            height: 130px;
            /* Should be removed. Only for demonstration */
        }

        .left,
        .right {
            width: 26%;
        }

        .middle {
            width: 48%;
        }

        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
        }



        a:link,
        a:visited,
        a:active {
            color: black;
            background-color: transparent;
            text-decoration: none;
        }

        a:hover {
            color: darkorange;
            background-color: transparent;
            text-decoration: none;
        }

        form.example input[type=text] {
            padding: 10px;
            font-size: 14px;
            border: 1px solid grey;
            float: left;
            width: 75%;

        }

        form.example button {
            float: left;
            width: 25%;
            padding: 10px;
            background: black;
            color: white;
            font-size: 16px;
            border: 1px solid grey;
            border-left: none;
            cursor: pointer;
        }



        form.example::after {
            content: "";
            clear: both;
            display: table;
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
padding-left: 15px;
width: 1200px;
padding-bottom: 40px;
border-bottom: 1px solid #e0e0e0;
}

.dorebuton {
height: 110px;
width: 260px;  
background-image:url('../assets/logo.svg');
background-repeat:no-repeat;
border: none;
background-color: white;
}

.sepet-icon {
color: white;
text-align: center;
box-sizing: border-box;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
width: 24px;
height: 24px;
margin: 0;
background: darkorange;
border-radius: 100%;
transition: background 400ms;
position: relative;
}

        
</style>