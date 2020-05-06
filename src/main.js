// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global CSS and scripts here.
import '~/assets/css/aos.css'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add vuex to Vue Instance
  Vue.use(Vuex);

  // initiate store object
  appOptions.store = new Vuex.Store({
    state:{
      currentPopup: '',
    },
    mutations: {
      changePopup (state, popupType) {
        state.currentPopup = popupType;
      }
    }
  });
}