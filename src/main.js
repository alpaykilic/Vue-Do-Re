import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
//import EmptyBasket from './components/EmptyBasket.vue'
//import Anasayfa from './components/Anasayfa.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SweetAlertIcons from 'vue-sweetalert-icons'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

// Sweetalerticons adındaki modül kuruldu ve içindeki ikonları kullanmak için gerekli kodları yazıldı.
Vue.use(SweetAlertIcons)

Vue.config.productionTip = false

const routes= [
 //{ path:'/', component: Anasayfa },
  //{ path:'/sepetim', component: EmptyBasket }
]

export const bus = new Vue();  //event bus yapısı ile componentler arasında dinleme yapılacak.
export const bus2 = new Vue();
export const urunBus = new Vue();
export const totalUrun = new Vue();

const router = new VueRouter(
  {
    routes,
    mode: 'hash'
  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
