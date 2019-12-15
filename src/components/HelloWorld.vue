<template>
  <div class="container">
  <b-tabs content-class="mt-3">
    <b-tab title="Öne Çıkanlar" active>
      <div class="row">
        <div class="col-md-3"
        v-for="(post,index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post.id"
        >
          <b-card
          v-bind:title=post.isim
          v-bind:img-src=post.resim
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
          >
            <b-card-text>
            {{post.fiyat}}
            </b-card-text>

            <b-button class="buttons" href="" variant="primary">SEPETE EKLE</b-button>
                                          
          </b-card>
          
        </div>
      </div>
    </b-tab>
    <b-tab title="Çok Satanlar">
      <div class="row">
        <div class="col-md-3"
        v-for="(urunler,index) in urun2"
        v-bind:item="urunler"
        v-bind:index="index"
        v-bind:key="urunler.id"
        >
          <b-card
          v-bind:title=urunler.isim
          v-bind:img-src=urunler.resim
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
          >
            <b-card-text>
            {{urunler.fiyat}}
            </b-card-text>

            <b-button class="buttons" href="" variant="primary">SEPETE EKLE</b-button>
                                          
          </b-card>
          
        </div>
      </div>
    </b-tab>
    <b-tab title="İndirimli Ürünler" active>
      <div class="row">
        <div class="col-md-3"
        v-for="(post,index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post.id"
        >
          <b-card
          v-bind:title=post.isim
          v-bind:img-src=post.resim
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
          >
            <b-card-text>
            {{post.fiyat}}
            </b-card-text>

            <b-button class="buttons" href="" variant="primary">SEPETE EKLE</b-button>
                                          
          </b-card>
          
        </div>
      </div>
    </b-tab>
    <b-tab title="Yeni Ürünler">
      <div class="row">
        <div class="col-md-3"
        v-for="(urunler,index) in urun2"
        v-bind:item="urunler"
        v-bind:index="index"
        v-bind:key="urunler.id"
        >
          <b-card
          v-bind:title=urunler.isim
          v-bind:img-src=urunler.resim
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
          >
            <b-card-text>
            {{urunler.fiyat}}
            </b-card-text>

            <b-button class="buttons" href="" variant="primary">SEPETE EKLE</b-button>
                                          
          </b-card>
          
        </div>
      </div>
    </b-tab>
  </b-tabs>  

  </div>
</template>

<script>
import PostService from '../PostService'
import Urun2 from '../Urun2'
export default {
  name: 'HelloWorld',
  data(){
    return{
      posts: [],
      urun2: [],
      error: '',
      id: 0,
      isim: '',
      resim: '',
      fiyat: 0
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
      this.urun2 = await Urun2.getPosts();
    }
    catch (err){
      this.error = err.message;
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
