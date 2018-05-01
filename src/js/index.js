import doConsole from "./modules/logSomething"
import Vue from 'vue'
import Start from "./modules/test.vue"

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