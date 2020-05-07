<template>
    <Layout>
        <div class="header">
            <div class="header__text-box">

                <h1 class="heading-primary">
                    <span class="heading-primary--main">Learning Portal</span>
                    <span class="heading-primary--sub">Arabian Nights Theme</span>
                </h1>

                <PopupButton popup-type="instructions-popup">
                    instructions
                </PopupButton>
                <PopupButton popup-type="feedback-popup">
                    feedback
                </PopupButton>

            </div>
        </div>
        <PopupFull popup-type="instructions-popup">
            <div class="popup__content">
                <video class="popup__video" src="@/assets/video/popup-instructions.mp4" controls>
                    Unfortunately, the browser you are using does not support video playback
                </video>
            </div>
        </PopupFull>
        <PopupFull popup-type="feedback-popup">
            <div class="popup__feedback popup__content">
                <a href="#panelPopups" class="popup__close"></a>
                <div class="popup__feedback-answer heading-tertiary"></div>
                <div class="popup__feedback-explanation heading-tertiary"></div>
                <div class="popup__feedback-total heading-tertiary"></div>
            </div>
        </PopupFull>
    </Layout>
</template>

<script>
import PopupButton from '~/components/ui/PopupButton.vue'
import PopupFull from '~/components/layout/PopupFull.vue'

export default {
    name: 'Hero',
    components: {
        PopupButton,
        PopupFull
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.scss';

.header {
    position: relative;
    height: 90vh;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.6),
        rgba($color-primary-dark, 0.8)),
    url("../assets/images/falconer.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    @include respond(phone) {
        background-position: bottom;
    }

    &__logo-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    &__logo {
        height: 3.5rem;
    }
    
    &__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
}
</style>