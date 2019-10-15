<template>
<div class="icon-con" style="padding-bottom: 0px;">
    <div class="colvs" style="float:right; padding: 0px; width: 970; margin-bottom: 8px; font-size:15px; color:black text-decoration:none;">
        <a href="#" target="blank">Blog</a>
        |
        <a href="#">Mağazalar</a>
        |
        <a href="#">Sipariş Takibi</a>
        |
        <a href="#">İletişim</a>
        |
        <span style="font-weight: 550;">Sipariş ve Destek Hattı: (212) 236 57 13</span>

    </div>
<br>
    <hr style="margin-right: auto; margin-left: auto; width: 1168px;">
    

    <div class="row" style="padding: 0px; width: 1168px; margin-left: auto; margin-right: auto">
        <div class="column left" style="background-color:transparent">
            <img src="../assets/logo.svg" alt="Do-Re" style="margin-bottom: 30px" width="260" height="110"
                >
            <map name="workmap">
                <area shape="rect" coords="15,30,240,80" href="#">
            </map>
        </div>
        <div class="column middle" style="background-color:transparent;">
            <form class="example" action="./action_page" style="margin-right: auto;margin-top:40px;max-width:400px">
                <input type="text" placeholder="Aramak istediğiniz ürünü yazın" name="search2"
                    style=" border: 2px solid #f1f1f1;">
                <button type="submit;margin:auto;max-width:100px"> Ara</button>
            </form>

        </div>
        <div class="column right" style="background-color:transparent;">
            <div class="nologin">
                <div style="float: right;margin-top: 30px">
                    <a href="#"
                        style="color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; text-decoration:none;">GİRİŞ YAPIN</a>
                    YA DA
                    <a href="#"
                        style="color: rgb(96, 95, 95); font-size: 15px; font-weight: 600; text-decoration:none;">ÜYE OLUN</a>
                </div>
            </div>
            <div style="float: right;margin:auto">
                <img src="../assets/sepetlogo.png" alt="Do-Re" usemap="#workmap2" style="margin-top: 0px">
                <map name="workmap2">
                    <area shape="rect" coords="0,0,40,40" href="#">
                </map>
                <a href="#"
                    style="color: rgb(96, 95, 95); font-size: 15px; margin:auto; font-weight: 600">SEPETİM</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    
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

        
</style>