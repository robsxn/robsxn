import Vue from 'vue'

// eslint-disable-next-line
var vm = new Vue({
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

    /* message:function(c){return(this.wochentag[this.Tag -1])}, */
  },

  computed: {
    message: function () {
      return this.wochentag[this.Tag - 1]
    }
  }
})

export default {
  name: 'vm',
  data () {
    return {
      message: function () {
        return this.wochentag[this.Tag - 1]
      }
    }
  }
}
