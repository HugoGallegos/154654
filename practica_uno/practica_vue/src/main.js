import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
// Librerias de usuario
import 'bootstrap/dist/css/bootstrap.css' // agregamos bootstrap

Vue.config.productionTip = false

// Metodo de comprobacion de permiso de acceso
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permiso para entrar')
    if (Auth.checkUser()) {
      next()
      return
    }
    router.push({ name: 'login' })
  }next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
