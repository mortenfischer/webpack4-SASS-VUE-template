import Vue from 'vue'

const el = '#inline-vue-app'
const DOM = document.querySelector(el)

if(DOM){
    new Vue({
        el:"#inline-vue-app",
        data: function(){
            return {
                type : "funky inline"
            }
        }
    })
}

