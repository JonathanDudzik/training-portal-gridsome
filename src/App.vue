<template>
    <Layout>
        <transition
            appear 
            mode="in-out"
            v-bind:css="false"
            v-on:enter="firstEnter"
            v-on:leave="firstLeave">
            <router-view />
        </transition>
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  methods: {
        // takes prop as the mutations payload
        closePopup: function() {
            this.$store.commit('changePopup', '')
        },

        firstEnter: function(el, done) {
            console.log('ENTER')
            // gsap.fromTo (el, 0.5, {opacity: 0}, {opacity: 1})
            done()
        },

        firstLeave: function(el, done) {
            console.log('LEAVE')
            // gsap.to (el, 0.5, {opacity: 0})
            done()
        }
    }
}
</script>