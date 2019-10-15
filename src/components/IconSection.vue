<template>
    <div>
        <div class="icon-bolum">
        <div class="icon-con">
            <div class="row">
                <div class="icon-sutun">
                    <a class="a-icon">
                        <div class="icon-shape round">
                            <div>
                                <img src="../assets/sepet-icon.png" alt="Kolay ve Güvenli Alışveriş"
                                    style="margin: 40px 25px 20px 20px;">
                            </div>
                        </div>
                        <h3 style="font-family: sans-serif; font: 700;">Kolay ve Güvenli Alışveriş</h3>
                        <br>
                        <p>
                            Bilgisayarda, tablette ve mobilde kesintisiz alışveriş deneyimi.
                        </p>
                    </a>
                </div>

                <div class="icon-sutun">
                    <a class="a-icon">
                        <div class="icon-shape round">
                            <div>
                                <img src="../assets/hizli-teslimat.png" alt="Hızlı Teslimat"
                                    style="margin: 40px 25px 20px 20px;">
                            </div>
                        </div>
                        <h3 style="font-family: sans-serif; font: 700;">Hızlı Teslimat</h3>
                        <br>
                        <br>
                        <p>
                            Stoktan adresinize teslim ile mağazalarımızı adeta evinize taşıyoruz.
                        </p>
                    </a>
                </div>

                <div class="icon-sutun">
                    <a class="a-icon">
                        <div class="icon-shape round">
                            <div>
                                <img src="../assets/gitar-icon.png" alt="Geniş Ürün Yelpazesi"
                                    style="margin: 40px 25px 20px 20px;">
                            </div>
                        </div>
                        <h3 style="font-family: sans-serif; font: 700;">Geniş Ürün Yelpazesi</h3>
                        <br>
                        <br>
                        <p>
                            Türkiye'nin en büyük müzik aletleri kataloğu parmaklarınızın ucunda.
                        </p>
                    </a>
                </div>

                <div class="icon-sutun">
                    <a class="a-icon">
                        <div class="icon-shape round">
                            <div>
                                <img src="../assets/taksit-icon.png" alt="9 Taksit" style="margin: 40px 25px 20px 20px;">
                            </div>
                        </div>
                        <h3 style="font-family: sans-serif; font: 700;">9 Taksit İmkanı</h3>
                        <br>
                        <br>
                        <p>
                            Tüm kredi kartlarına 9 taksitle alışveriş yapmanın rahatlığını yaşayın.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
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
        b:visited,
        b:active {
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

        form.example button:hover {
            background: #0b7dda;
        }

        form.example::after {
            content: "";
            clear: both;
            display: table;
        }

        .a-style {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  text-decoration: none;
  color: #0063d1;
  margin-bottom: 55px !important;
  height: 160px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: block; 
  }

.span-style {
box-sizing: border-box;
margin: 0;
font: inherit;
color: #ffffff;
font-weight: 700;
font-family: sans-serif;
text-transform: uppercase;
padding: 0 12px;
border: 0;
cursor: pointer;
text-align: center;
position: absolute;
left: 50%;
height: 45px;
line-height: 45px;
font-size: 14px;
transform: translateX(-50%);
bottom: -20px;
outline: 7px solid #ffffff;
white-space: nowrap;
display: block;
transition: background 400ms;
background-color: #272727;
}

.icon-bolum {
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
background: #f6f6f6;
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
padding-right: 15px;
width: 1200px;
padding-top: 40px;
padding-bottom: 40px;
border-bottom: 1px solid #e0e0e0;
}

.container {
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
margin-right: auto;
margin-left: auto;
padding-left: 15px;
padding-right: 15px;
width: 1200px;
}

.icon-sutun {
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
position: relative;
min-height: 1px;
padding-left: 15px;
padding-right: 15px;
float: left;
width: 25%;
}

.a-icon{
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
text-decoration: none;
color: gray;
text-align: center;
}

.icon-shape {
color: #0063d1;
text-align: center;
box-sizing: border-box;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
width: 160px;
height: 160px;
margin: 0 auto 30px auto;
background: #c4cece;
border-radius: 100%;
transition: background 400ms;
position: relative;
}

.round:hover{
  background-color:darkorange;

}
</style>