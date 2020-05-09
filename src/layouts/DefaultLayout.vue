<template>
  <div>

    <NavMenu />

    <slot/>

  </div>
</template>

<script>
import NavMenu from '~/components/layout/NavMenu.vue'

export default {
  // Page metadata - <head>
  metaInfo: {
    title: 'Training Portal'
  },
  name: 'DefaultLayout',
  components: {
    NavMenu
  }
}

</script>