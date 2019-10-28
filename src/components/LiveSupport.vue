<template>
  <!-- https://bootstrap-vue.js.org/docs/components/dropdown adresinde bulunan dropdownlar incelendi.
  İşe yarayabilecek olan kodların benzerleri alınarak projeye uyarlandı. -->
  <div style="background-color: #7fb06f; border-radius: 8px 8px 0px 0px; z-index: 10;" >
    <b-dropdown id="dropdown-form-dropup" @click="seen = false" dropup text="Canlı Destek - Online" ref="dropdown" class="m-2" style="border-radius: 8px 8px 0px 0px; width:220px; padding: 0;" > 
      <b-dropdown-form style="width:350px;" >
        <b-button class="cross"  @click="onClick"></b-button>
        <div style="background-color: #7fb06f; height: 120px; margin-left:-25px; margin-right:-25px; margin-top: -13px; border-radius: 8px 8px 0px 0px; ">
            <label for="status" style="color:white; margin-left:15px; margin-top:25px;">Canlı Destek - Online</label>
            <label for="infor" style="color:white; font-size:13px; margin: 10px 15px; text-align:center;">
              Müsait en yakın birimle sohbete başlamak için lütfen aşağıdaki formu doldurun.
            </label>
        </div>
        <div class="sup-div">
        <b-form-group style="margin: 10px;">
            
          <b-form-input
            id="dropdown-form-isim"
            size="sm"
            placeholder="*İsminiz"
            style="height:42px; border: 2px solid rgb(206,206,206); border-radius: 6px;"
          ></b-form-input>
        </b-form-group>

        <b-form-group style="margin: 10px;">           
          <b-form-textarea
            id="dropdown-form-msg"
            rows="3"
            placeholder="Size yardımcı olmamızı istediğiniz konu nedir?"
            style="height:82px; border: 2px solid rgb(206,206,206); border-radius: 6px; text-align:justify; font-size: 14px;"
          ></b-form-textarea>
        </b-form-group>  

        <b-form-group style="margin: 10px;">
            
          <b-form-input
            id="dropdown-form-sipno"
            size="sm"
            placeholder="Sipariş Numaranız (Varsa)"
            style="height:42px; border: 2px solid rgb(206,206,206); border-radius: 6px;"
          ></b-form-input>
        </b-form-group>

       

        <b-button class="send-btn" @click="onClick" >Gönder</b-button>
        </div>
        <div style="font-size: 10px; text-align:center;">
            <span>We're</span>
            <img src="../assets/light.png" alt="none" style="width:20px; height:20px;"> by
        <b>tawk.to</b>
        </div>
      </b-dropdown-form>
    </b-dropdown>
  </div>
</template>

<script>
  export default {
    data(){
        return{
            seen: true
        }
    },
    methods: {
      onClick() {
        // menüyü kapat
        this.$refs.dropdown.hide(true)
        
      }
  }
  }
</script>



<style scoped>

/*----- Kapatma butonu css ----- */
.cross {
   background-image: url("../assets/delete.png");
   float: right; 
   position:fixed;
   top:5px; 
   right: 5px;
   height: 40px;
   width: 40px;
   background-color: #7fb06f;
   border: none;
   object-fit: fill;
   background-repeat: no-repeat;
   background-position: center;
}
/*----- body css ----- */
.sup-div { 
    height: 270px; 
    background-color : white; 
    border: 2px solid rgb(246,246,246);
    border-radius: 6px;
    margin: 20px -10px 0px -10px
    
}
/*----- Gönder butonu css ----- */
.send-btn {
    margin: 0px 10px 0px 10px;
    height: 42px;
    width: 298px;

}

</style>