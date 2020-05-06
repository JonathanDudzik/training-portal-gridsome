<template>
    <footer id="footer" class="footer">
        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Built by <a href="#" class="footer__link">Jonathan Dudzik</a> for this Demo site <a href="#" class="footer__link">Training Portal</a>.
                    Copyright &copy; by Jonathan Dudzik.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.scss';

.footer {
    // background-image: linear-gradient(
    //     to top,
    //     rgba($color-black, 1),
    //     rgba($color-black, 0.8),
    //     rgba($color-black, 0.6),
    //     rgba($color-black, 0.2));
    // min-height: 50vh;
    // padding-top: 25rem;
    padding: 6rem 0;
    background-color: rgba($color-black, 0.8);
    font-size: 1.4rem;
    color: $color-white;
    margin-top: 2rem;

    @include respond(tab-port) {
        padding: 8rem 0;
    }

    &__navigation {
        border-top: 1px solid $color-grey-dark;
        margin-top: 3rem;
        padding-top: 2rem;
        display: inline-block;

        @include respond(tab-port) {
            width: 100%;
            text-align: center;
        }
    }

    &__list {
        list-style: none;
    }

    &__item {
        display: inline-block;

        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }

    &__link {
        &:link,
        &:visited {
            color: $color-white;;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: all .2s;
        }

        &:hover,
        &:active {
            color: $color-primary;
            background-color: $color-grey-dark-3;
            box-shadow: 0 1rem 2rem rgba($color-black, .4);
            transform: rotate(5deg) scale(1.3);
        }
    }

    &__copyright {
        border-top: 1px solid $color-grey-dark;
        margin-top: 3rem;
        padding-top: 2rem;
        width: 80%;
        float: right;

        @include respond(tab-port) {
            width: 100%;
            float: none;
        }
    }

    
    // &__logo-box {
    //     text-align: center;
    //     margin-bottom: 8rem;

    //     @include respond(tab-port) {
    //         margin-bottom: 6rem;
    //     }
    // }

    // &__logo {
    //     width: 40%;
    //     height: auto;

    //     @include respond(tab-port) {
    //         width: 70%;
    //     }
    // }

}
</style>