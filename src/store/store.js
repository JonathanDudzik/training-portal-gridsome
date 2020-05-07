import Vue from 'vue'
import Vuex from 'vuex'

// Add vuex to Vue Instance
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
      currentPopup: '',
    },
    mutations: {
      changePopup (state, popupType) {
        state.currentPopup = popupType;
      }
    }
});