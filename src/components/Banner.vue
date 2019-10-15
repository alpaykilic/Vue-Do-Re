<template>
    <div>
        <p style="font-size: 30px; background-color:rgb(246,246,246); margin:0px; padding: 0px; color: rgb(246,246,246)">asdasd</p>
        <div class="banner-link">
        <div class="banner-con">

            <div class="row">

                <div class="banner-style">
                    <a class="a-style" style="background-image: url(https://www.do-re.com.tr/Images/magazalarimiz.jpg)"
                        href="./magazalar">
                        <span class="span-style arkamavi">MAĞAZALARIMIZ</span>
                    </a>
                </div>

                <div class="banner-style">
                    <a class="a-style" style="background-image: url(https://www.do-re.com.tr/Images/doretv.jpg)"
                        href="./doretv">
                        <span class="span-style arkamavi">DORE TV</span>
                    </a>
                </div>

                <div class="banner-style">
                    <a class="a-style"
                        style="background-image: url(https://www.do-re.com.tr/Images/piyano-kiralama.jpg)"
                        href="./piyano-kiralama">
                        <span class="span-style arkamavi">PİYANO KİRALAMA</span>
                    </a>
                </div>

                <div class="banner-style">
                    <a class="a-style" style="background-image: url(https://www.do-re.com.tr/Images/kurumsal_satis.jpg)"
                        href="./kurumsal-satis">
                        <span class="span-style arkamavi">KURUMSAL SATIŞ</span>
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

.banner-link {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background: #ffffff;
  }

  .banner-con {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    padding-bottom: 0px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 1170px;
    padding-top: 40px;
    border-bottom: 1px solid #e0e0e0;
  }

  .banner-style {
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

.arkamavi:hover {
   background-color: #0063d1 !important;
}



</style>