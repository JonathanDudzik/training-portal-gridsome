<template>
    <section class="relative py-32">
        <div class="text-center mb-32 text-6xl font-serif uppercase font-bold tracking-widest text-blue-700">
            <h2 id="first" class="block">
                <slot name="first"></slot>
            </h2>
            <h2 id="second" class="block opacity-0">
                <slot name="second"></slot>
            </h2>
        </div>
    </section>
</template>

<script>
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"

export default {
    name: 'HeadingReveal',
    mounted() {
        const tl = new TimelineMax()
        tl.to('#first', .5, {scale: .8,}, 2)
        tl.fromTo('#second', 1, {opacity: 0, scale: .75}, {opacity: 1, scale: 1})
    }
}
</script>