import Vue from 'vue'
import Vuex from 'vuex'
import ocr from "./modules/ocr";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ocr
    },
})
