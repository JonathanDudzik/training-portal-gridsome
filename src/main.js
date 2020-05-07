// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global CSS and scripts here.
import '~/assets/css/aos.css'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import { store } from '~/store/store'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // initiate store object
  appOptions.store = store
}