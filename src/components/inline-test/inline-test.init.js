import Vue from 'vue'
import Store from 'store'

const el = '#inline-vue-app'
const DOM = document.querySelector(el)

if(DOM){
    new Vue({
        el:"#inline-vue-app",
        store:Store,
        data: function(){
            return {
                type : "funky inline"
            }
        }
    })
}

