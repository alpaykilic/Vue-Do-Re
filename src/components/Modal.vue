<template>
<div>

   <!-- Sepete ekle butonuna basıldığında açılacak modal. -->
  <b-modal id="bv-modal-example" hide-header hide-footer centered title>
    <div class="d-block text-center">
      <sweetalert-icon icon="success" />
      <p class="yazi">Ürün Alışveriş Sepetinize Eklendi</p>
      <div class="row" style="margin:auto;">
          <button class="sepet-but" block @click="sepeteGit">Sepete Git</button>
          <button class="devam-but" block @click="$bvModal.hide('bv-modal-example')">Alışverişe Devam Et</button>
      </div>
    </div>
  </b-modal>

  <!-- İndirim kuponu uygula butonuna basıldığında açılacak modal. -->
  <b-modal id="kuponModal" hide-header hide-footer centered title>
    <div class="d-block text-center">
      <sweetalert-icon icon="error" />
      <p class="yazi">İndirim kuponu bulunamadı.</p>
      <div class="row" style="margin:auto;">
          <button class="ind-but" block @click="$bvModal.hide('kuponModal')">Tamam</button>
      </div>
    </div>
  </b-modal>

  <!-- Sepeti Güncelle butonuna basıldığında açılacak modal. -->
  <b-modal id="guncelleModal" hide-header hide-footer centered title>
    <div class="d-block text-center">
        <div class="row">
            <sweetalert-icon icon="loading" style="transform: scale(0.3); height:50px; width:50px; margin-left: 0px; margin-bottom:0 px;" />
            <p class="yazi" style="margin:auto">Lütfen bekleyiniz, işleminiz devam ediyor.</p>
        </div>
    </div>
  </b-modal>
</div>
</template>


<script>

//bus2 adında bir eventbus import edilir.
import { bus2 } from '../main'

export default {
    data(){
        return{
            sayfa : ''
        }
    },
    methods:{
        //sayfaDegis metodu sayfa isimli değişkene 'sepetim' verisini verir ve bus emit ile emit işlemi gerçekleştirir.
        sayfaDegis(){
            this.sayfa = 'sepetim'
            bus2.$emit('sayfaDegisti',this.sayfa)
        },
        // sepeteGit metodu da modal içerisindeki sepete git butonunun sepeti açmasını sağlayan kodlarını içerir.
        sepeteGit(){
            this.$bvModal.hide('bv-modal-example')
            this.sayfaDegis()
        }
    }
}
</script>


<style scoped>

.yazi {
    color: rgb(84,84,84);
    font-size: 18px;
    font-weight: 500
}

/* ----- Aşağıda sepete git, alışverişe devam et 
ve indirim kodu modalının tamam butonlarının rengi,
 boyutu gibi css bilgileri classlarda bulunur. ---- */
.sepet-but{
    margin-top: 10px;
    margin-left:10%;
    height:42px;
    width: 140px;
    border: none;
    border-radius: 3px;
    outline: none;
    color: white;
    background-color: rgb(0, 99, 209);
    font-size: 17px;
    font-weight: 500;
}

.sepet-but:hover {
    background-color: rgb(0, 79, 189);
}

.devam-but {
    margin-top: 10px;
    margin-left:3%;
    height:42px;
    width: 210px;
    border: none;
    border-radius: 3px;
    outline: none;
    color: white;
    background-color: rgb(170, 170, 170);
    font-size: 17px;
    font-weight: 500;
}

.devam-but:hover{
    background-color: rgb(150, 150, 150);
}

.ind-but {
    margin-top: 10px;
    margin-left:auto;
    margin-right: auto;
    height:42px;
    width: 140px;
    border: none;
    border-radius: 3px;
    outline: none;
    color: white;
    background-color: rgb(0, 99, 209);
    font-size: 17px;
    font-weight: 500;
}

.ind-but:hover{
    background-color: rgb(0, 79, 189);
}

</style>