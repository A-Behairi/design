import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import './scss/main.scss';


import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

Vue.config.productionTip = false

const router = new VueRouter({
  
  mode:'history',
  routes: [
            { path: '*', component: Home },
            { path: '/about', component: About },
            { path: '/contact', component: Contact },
  ]
  })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
