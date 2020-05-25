import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/store.main'

Vue.use(Vuex)

const store = {
    modules: {
        main
    }
}

const Store = new Vuex.Store(store)

export default Store