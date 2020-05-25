import Vue from 'vue'
import Store from 'store'
import Start from './test'

const el = '#vue-app'
const DOM = document.querySelector(el)

if(DOM){
    new Vue({
        el: '#vue-app',
        store:Store,
        components: { Start },
        template: '<Start/>'
    })
}

