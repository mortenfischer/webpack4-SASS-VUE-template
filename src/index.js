import Vue from 'vue'
import Start from './components/test'

new Vue({
    el: '#vue-app',
    components: { Start },
    template: '<Start/>'
  })

new Vue({
    el:"#inline-vue-app",
    data: function(){
        return {
            type : "funky inline"
        }
    }
})