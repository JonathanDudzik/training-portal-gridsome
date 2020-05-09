<template>

    <div class="header relative h-screen bg-top bg-no-repeat flex flex-col justify-center bg-cover">
        <div class="text-center">

            <h1 class="heading-primary">
                <span class="heading-primary--main">Learning Portal</span>
                <span class="heading-primary--sub">Arabian Nights Theme</span>
            </h1>
            
            <slot />

        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroTitle',
    props: ['bgImage'],
    computed: {
        styles() {
            let background = "url(./" + this.bgImage + ")"
            return background
        }
    }
}
</script>


<style lang="scss" scoped>
@import '~/assets/sass/main.scss';

.header {
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.6),
        rgba($color-primary-dark, 0.8)),
        url("~@/assets/images/falconer.jpg");
}
</style>