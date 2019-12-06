import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//alert("hello");
new Vue({
  render: h => h(App),
}).$mount('#app')
