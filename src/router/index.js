import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wochenplan from '@/components/Wochenplan'
import Kontakt from '@/components/Kontakt'
import Lieferanten from '@/components/Lieferanten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Wochenplan',
      name: 'Wochenplan',
      component: Wochenplan
    },
    {
      path: '/Lieferanten',
      name: 'Lieferanten',
      component: Lieferanten
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    }
  ]
})

// eslint-disable-next-line
new Vue({
  el: '#app',
  data: {
    Datum: new Date().toLocaleDateString(),
    Tag: new Date().getDay(),
    wochentag: [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag'
    ]
  },

  computed: {
    message: function () {
      return this.wochentag[this.Tag - 1]
    }
  }
})
