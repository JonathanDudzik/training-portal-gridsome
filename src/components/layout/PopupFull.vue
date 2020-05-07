<template>
    <div v-if="currentPopup == popupType" v-on:click="closePopup()" class="popup">
        <button class="popup__close">
            <img src="@/assets/images/popup-close.svg" alt="popup close button" tabindex="0">
        </button>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PopupFull',
    props: ['popupType'],
    computed: {
        currentPopup() {
            // console.log(popupType)
            return this.$store.state.currentPopup
        }
    },
    methods: {
        // takes prop as the mutations payload
        closePopup: function() {
            this.$store.commit('changePopup', '')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.scss';

.popup {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba($color-black, .8);
    z-index: 9999;

    @include respond(phone) {
        width: 100vw;
    }

    //produces a blur effect on supporting browsers
    @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba($color-black, .3);
    }
    &__content {
        @include absCenter;

        width: 85%;
        min-height: 60vh;
        max-height: 80vh;
        box-shadow: 0 3rem 6rem rgba($color-black, .1);
        background-color: $color-white;
        border-radius: 3px;
        padding: 3rem;
        
        //giving room for close buttom
        padding-right: 6rem;
    }

    &__video {
        //contain video by width, not height, for response on small screens
        width: 100%;
        // with a height: of auto (default) the video will grow until it reaches the max vh;
        max-height: 60vh;

        @include respond(phone) {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-height: 45vh;
        }
    }

    //THE X CLOSE BUTTON
    &__close {
        background-color: $color-grey-dark;
        position: absolute;
        top: 6rem;
        right: 6rem;
        height: 7rem;
        width: 7rem;
        display: inline-block;
        border-radius: 50%;
        border: 0px;
        padding: 1rem;
        
        &:hover {
            background-color: $color-primary;

        }
    }
}
</style>