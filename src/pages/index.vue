<template>
    <div>
        <HeroTitle bg-image="falconer.jpg">
            <PopupButton popup-type="instructions-popup">
                instructions
            </PopupButton>
        </HeroTitle>

        <HeadingReveal id="coolDiv">
            <template v-slot:first>
                Once Upon a Time...
            </template>
            <template v-slot:second>
                There was an Introduction.
                <IntersectObserver @intersect="firstIntersection"/>
            </template>
        </HeadingReveal>

        <PopupFull popup-type="instructions-popup">
            <div class="popup__content">
                <video class="popup__video" src="@/assets/video/popup-instructions.mp4" controls>
                    Unfortunately, the browser you are using does not support video playback
                </video>
            </div>
        </PopupFull>

    </div>
</template>

<script>
import HeroTitle from '~/components/layout/HeroTitle.vue'
import HeadingReveal from '~/components/ui/HeadingReveal.vue'
import PopupButton from '~/components/ui/PopupButton.vue'
import PopupFull from '~/components/layout/PopupFull.vue'
import IntersectObserver from '~/components/renderless/IntersectObserver.vue'

import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"

export default {
    name: 'Hero',
    components: {
        HeroTitle,
        IntersectObserver,
        HeadingReveal,
        PopupButton,
        PopupFull
    },
    methods: {
        firstIntersection() {
            console.log('FIRST INTERSECTED!')
        }
    }
}
</script>