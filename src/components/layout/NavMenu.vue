<template>
    <!-- Remember: The Layout must have a slot -->
    <!-- Include this layout in pages with "Layout" element -->
    <div class="navigation">

        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
        
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav" v-on:click='exitNav()'>
            <ul class="navigation__list">
                <li class="navigation__item"><g-link to="/" class="navigation__link"><span>01</span>Course Introduction</g-link></li>
                <li class="navigation__item"><g-link to="/introduction/" class="navigation__link"><span>02</span>Once Upon a Time</g-link></li>
                <li class="navigation__item"><g-link to="/timeline/" class="navigation__link"><span>03</span>Timeline of Arabian Nights</g-link></li>
                <li class="navigation__item"><g-link to="/artifact/" class="navigation__link"><span>04</span>Artifact from the Golden Age</g-link></li>
                <li class="navigation__item"><g-link to="/sindbad/" class="navigation__link"><span>05</span>Sindbad the Sailor</g-link></li>
                <li class="navigation__item"><g-link to="/test/" class="navigation__link"><span>06</span>The True Test</g-link></li>
                <li class="navigation__item"><g-link to="/resources/" class="navigation__link"><span>07</span>Links and Files</g-link></li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    // name: option is registered globally as the Vue.component() ID, "Layout"

    methods: {
    // function that exits the navigation when a link is clicked
    exitNav: function() {
        const navButton = document.querySelector('div input#navi-toggle');
        navButton.checked=false;
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/sass/main.scss';

.navigation {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: $color-white;
        border: 1px dashed rgba($color-black, .3);
        height: 7rem;
        width: 7rem;
        position: fixed;
        top: 6rem;
        right: 6rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba($color-black, .1);
        text-align: center;
        cursor: pointer;

        @include respond(tab-port) {
            top: 4rem;
            right: 4rem;
        }

        @include respond(phone) {
            top: 3rem;
            right: 3rem;
        }
    }

    &__background {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        top: 6.5rem;
        right: 6.5rem;
        background-image: radial-gradient($color-primary-dark, $color-primary-light);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        @include respond(tab-port) {
            top: 4.5rem;
            right: 4.5rem;
        }

        @include respond(phone) {
            top: 3.5rem;
            right: 3.5rem;
        }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        visibility: hidden;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 1rem;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 3rem;
            font-weight: 300;
            padding: 1rem 2rem;
            color: $color-white;
            text-decoration: none;
            text-transform: none;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
            background-size: 220%;
            transition: all .4s;

            @include respond(phone) {
                font-size: 2.5rem;
                padding: 0rem 1rem;
            }
            

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }
        }
        
        &:hover,
        &:active {
            background-position: 100%;
            color: $color-primary-dark;
            transform: translateX(1rem);
        }
    }


    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        visibility: visible;
        width: 100%;
    }

    &__checkbox:checked ~ &__button {
        border: 1px solid rgba($color-black, .3);
    }
    
    //ICON
    &__icon {
        position: relative;
        margin-top: 3.5rem;

        &,
        &::before,
        &::after {
            width: 3rem;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }

    &__button:hover &__icon::before {
        top: -1rem;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }
}
</style>