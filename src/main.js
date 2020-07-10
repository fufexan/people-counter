import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
require('dotenv').config()
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: process.env.APIKEY,
      authDomain: 'people-counter-legendary.firebaseapp.com',
      databaseURL: 'https://people-counter-legendary.firebaseio.com',
      projectId: 'people-counter-legendary',
      storageBucket: '',
    })
  }
}).$mount('#app')
