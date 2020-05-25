import Vue from 'vue'
import Start from './test'

const el = '#vue-app'
const DOM = document.querySelector(el)

if(DOM){
    new Vue({
        el: '#vue-app',
        components: { Start },
        template: '<Start/>'
    })
}

