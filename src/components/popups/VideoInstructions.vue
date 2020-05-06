<template>
    <div v-if="currentPopup == 'instructions-video'" v-on:click="closePopup()" class="popup">
        <button class="popup__close">X</button>
        <div class="popup__content">
            <video class="popup__video" src="@/assets/video/popup-instructions.mp4" controls>
                Unfortunately, the browser you are using does not support video playback
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoInstructions',
    computed: {
        currentPopup() {
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
        &:link,
        &:visited {
            color: $color-grey-dark;
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 3rem;
            text-decoration: none;
            display: inline-block;
            line-height: 1;
        }

        &:hover {
            color: $color-primary;
        }
    }
}
</style>