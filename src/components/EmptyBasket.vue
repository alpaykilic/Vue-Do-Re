<template>
    <div>
        <div class="sip_adım">
            <div class="container">
                <div class="row">
                    <div class="bos_div">
                        <h2>
                            <img src="../assets/basket.png" style="height: 35px; width: 35px;">
                            Sepetiniz Boş
                        </h2>
                        <div class="bos_div2">
                            Eminiz web sitemizde ilginizi çekebilecek ürünlerimiz mutlaka vardır.
                        </div>
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

/*----- Aşağıda sepet boş olduğunda gösterilecek template kısmındaki divlerin css leri bulunuyor. -----*/

.sip_adım{
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
background: #f6f6f6 !important;
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
width: 1170px;
}

.bos_div {
box-sizing: border-box;
margin: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
text-align: center !important;
padding-top: 100px !important;
padding-bottom: 100px !important;
position: relative;
min-height: 1px;
padding-left: 15px;
padding-right: 15px;
float: left;
width: 100%;
color: black;   
font-family: sans-serif;
}

.bos_div2 {
text-align: center !important;
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
padding-top: 20px !important;
padding-bottom: 20px !important;
}
</style>