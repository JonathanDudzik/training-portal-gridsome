<template>
    <Layout>
            <div class="media-slider-box">
                <div data-key="box-key-text" class="media-slider-box__text">
                    <figure class="media-slider-box__shape">
                        <img class="media-slider-box__image" src="img/logo.png" alt="book cover">   
                        <figcaption class="media-slider-box__caption">
                            <h3 class="heading-tertiary ">
                                Ancient magic and wonder!
                            </h3> 
                        </figcaption>
                    </figure>
                    <p class="paragraph u-text-left">
                        The stories in the Fairy Books have generally been such as old women in country places tell to their grandchildren. 
                        Nobody knows how old they are, or who told them first. The children of Ham, Shem and Japhet may have listened to them in the Ark, 
                        on wet days. Hector's little boy may have heard them in Troy Town, for it is certain that Homer knew them, and that some of 
                        them were written down in Egypt about the time of Moses. Now "The Arabian Nights," some of which, but not nearly all, are given 
                        in this volume, are only fairy tales of the East. The people of Asia, Arabia, and Persia told them in their own way, not for 
                        children, but for grown-up people.
                    </p>
                    <br>
                    <p class="paragraph u-text-left">
                        People in France and England knew almost nothing about "The Arabian Nights" till the reigns of Queen Anne and George I., 
                        when they were translated into French by Monsieur Galland. Grown-up people were then very fond of fairy tales, and they 
                        thought these Arab stories the best that they had ever read.
                    </p>
                    <br> 
                    <p class="paragraph u-text-left">
                        They were delighted with Ghouls (who lived among the tombs) and Geni, who seemed to be a kind of ogres, and with Princesses 
                        who work magic spells, and with Peris, who are Arab fairies. Sindbad had adventures which perhaps came out of the Odyssey of 
                        Homer; in fact, all the East had contributed its wonders, and sent them to Europe in one parcel. Young men once made a noise at 
                        Monsieur Galland's windows in the dead of night, and asked him to tell them one of his marvellous tales. Nobody talked of 
                        anything but dervishes and vizirs, rocs and peris. The stories were translated from French into all languages, and only Bishop 
                        Atterbury complained that the tales were not likely to be true, and had no moral.
                        
                    </p>
                </div>
                <div data-key="box-key-audio" class="u-box-hide media-slider-box__audio">
                    <img class="media-slider-box__audio-bg" src="img/watering.jpg" alt="artistic photo">
                    <audio data-key="box-key-audio" class="media-slider-box__audio-file" src="img/arab-nights.mp3" controls></audio>
                </div>
                <div data-key="box-key-source" class="u-box-hide u-text-right media-slider-box__source">
                    <h3 class="heading-tertiary ">
                        The Arabian Nights Entertainments
                    </h3>
                    <p class="paragraph"> Written work by Andrew Lang</p>
                    <a href="http://www.gutenberg.org/ebooks/128" class="source" target="_blank">Source: Project Gutenberg</a>
                    <p class="paragraph">Recording by Neeru Iyer</p> 
                    <a href="https://librivox.org/the-arabian-nights-entertainments-by-andrew-lang/" target="_blank" class="source">Source: LibriVox.org</a>
                </div>
            </div>
            <div class="icon-container">
                <figure data-key="box-key-text" class="icon-container__button fas fa-font">
                    <figcaption class="icon-container__caption">TEXT</figcaption>
                </figure>
                <figure data-key="box-key-audio" class="icon-container__button fas fa-volume-up">
                    <figcaption class="icon-container__caption">AUDIO</figcaption>
                </figure>
                <figure data-key="box-key-source" class="icon-container__button fas fa-quote-right">
                    <figcaption class="icon-container__caption">SOURCE</figcaption>
                </figure>
            </div>
    </Layout>
</template>

<script>
import HeadingReveal from '~/components/ui/HeadingReveal.vue'

export default {
    name: 'Introduction',
    components: {
        HeadingReveal
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.scss';

.content-slider {
    position: relative;
    min-height: 100vh;
    padding: 8rem 0;

    background-image: linear-gradient(
        to bottom,
        rgba($color-white, 1),
        rgba($color-primary-light, .7),
        rgba($color-primary-light, .9),
        rgba($color-primary-light, .7),
        rgba($color-white, 1)),
    url("../../assets/images/group.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    @include respond(tab-port) {
        padding: 10rem 0;
    }
}

.slider-box {
    position: relative;
    width: 90%;
    height: 55vh;
    margin: 0 auto;
    // border: 3px solid $color-black;
    padding: 1rem 2rem;
    overflow: auto;
    text-align: center;

    @include respond(big-desktop) {
        width: 70%;
    }
    
    @include respond(phone) {
        width: 95%;
    }

    &__text-container {
        padding: 2rem 3rem;
        width: 100%;
        transition: all .5s;
        background-color: rgba($color-white, .7);
        transform: skewX(5deg);
    }

    &__audio {
        width: 30%;
        height: 4rem;
        margin-top: 6rem;
        transition: all .5s;
        
        @include respond(phone) {
            width: 80%;
        }
    }
    
    &__unskew {
        // keeping the text and audio straight in a skewed container
        transform: skewX(-5deg);
    }

    &__source {
        width: 100%;
        // height: 100%;
        line-height: 4rem;
        transition: all .5s;
        padding: 6rem 3rem;
        background-image: linear-gradient(-105deg, rgba($color-white, .7) 50%, rgba($color-white, .7) 0%, transparent 50%,);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;

        @include respond(tab-land) {
            background-image: linear-gradient(-105deg, rgba($color-white, .7) 80%, rgba($color-white, .7) 0%, transparent 80%,);
            background-size: cover;
        }

        @include respond(tab-port) {
            // divinding the white space up as best as possible
            line-height: 8rem;
        }
    }

    &__shape {
        //this shape serves as the container for the image and resitricts it's size and position
        width: 15rem;
        height: 15rem;
        margin-right: 1rem;
        float: left;
        //float off = picture on the top of the text
        //the best way to create space with items that are floated is to use translate
        transform: translateX(0);
        border-radius: 3px;
        overflow: hidden;
    }
    
    &__image {
        //square images may appear centered without translate
        //otherwise, use tranlate to ajust
        transform: scale(1);
        height: 100%;
        transition: all 0.5s;
    }

    &__caption {
        // centered inside the contianing shape above
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 10%);
        width: 90%;
        color: $color-black;
        opacity: 0;
        transition: all 1s;
    }

    //hover ANYWHERE in vca-container and the vca-container__caption does this
    // &__shape:hover &__caption {
    //     opacity: 1;
    //     transform: translate(-50%, -60%);
    // }

    // //hover ANYWHERE in vca-container and the vca-container__image does this
    // &__shape:hover &__image {
    //     transform: scale(0);
    // }
}

.media-slider {
    position: relative;
    min-height: 100vh;
    padding: 8rem 0;
    background-color: $color-white; 
    
    @include respond(tab-port) {
        padding: 10rem 0;
    }
}
    
.media-slider-box {
    // notice that the height of 65vh is a little bigger than the text on a normal screen
    // on a smalller screen the text should be overflow-scroll as to not increase the size of the container (throwing off the size of the other two elements) 
    position: relative;
    width: 90%;
    height: 60vh;
    margin: 0 auto;
    // border: 3px solid $color-black;
    padding: 2rem 1rem;
    overflow: auto;
    text-align: center;

    @include respond(big-desktop) {
        width: 70%;
    }
    
    @include respond(phone) {
        width: 95%;
    }

    &__text {
        width: 90%;
        transition: all .5s;
        
        @include respond(phone) {
            width: 95%;
        }
    }

    &__audio {
        @include absCenter;
        width: 60%;
        transition: all .5s;

        @include respond(tab-port) {
            width: 90%;
        }
    }

    &__audio-bg {
        display: block;
        margin: 0 auto;
        width: 60%;
        
        @include respond(tab-port) {
            width: 40%;
        }
    }
    
    &__audio-file {
        display: block;
        margin: 0 auto;
        width: 60%;
        height: 4rem;

        @include respond(tab-port) {
            width: 40%;
        }
         
        @include respond(phone) {
            width: 80%;
        }
    }

    &__source {
        width: 90%;
        height: 90%;
        line-height: 4rem;
        transition: all .5s;
        padding: 6rem 3rem;
        background-image: linear-gradient(-105deg, rgba($color-white, .8) 50%, rgba($color-white, .8) 0%, transparent 50%,), 
            url("../../assets/images/arabia-skyline-land.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @include respond(tab-land) {
            background-image: linear-gradient(-105deg, rgba($color-white, .8) 65%, rgba($color-white, .8) 0%, transparent 65%,), 
            url("../../assets/images/arabia-skyline-land.jpg");
            background-size: cover;
        }


        @include respond(tab-port) {
            // divinding the white space up as best as possible
            line-height: 6rem;
            padding-top: 0;
        }
    }

    &__shape {
        //this shape serves as the container for the image and resitricts it's size and position
        width: 15rem;
        height: 15rem;
        margin-right: 1rem;
        float: left;
        //float off = picture on the top of the text
        //the best way to create space with items that are floated is to use translate
        transform: translateX(0);
        border-radius: 3px;
        overflow: hidden;
    }

    &__image {
        //square images may appear centered without translate
        //otherwise, use tranlate to ajust
        transform: scale(1);
        height: 100%;
        transition: all 0.5s;
    }

    &__caption {
        // centered inside the contianing shape above
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 10%);
        width: 90%;
        color: $color-black;
        opacity: 0;
        transition: all 1s;
    }

    //hover ANYWHERE in vca-container and the vca-container__caption does this
    &__shape:hover &__caption {
        opacity: 1;
        transform: translate(-50%, -60%);
    }

    //hover ANYWHERE in vca-container and the vca-container__image does this
    &__shape:hover &__image {
        transform: scale(0);
    }
}

.heading-switch {
    // this animation eventually needs changed on scroll (no hover on mobile)
    position: relative;
    height: 10%;


    &__first-text {
        display: block;
        opacity: 1;
        transform:  scale(1);
        transition: all 0.5s;
    }
    
    &__second-text {
        display: block;
        opacity: 0;
        transform:  scale(0);
        transition: all 1s;
    }
    
    &:hover &__first-text {
        opacity: 0;
        transform:  scale(0);
    
    }
    &:hover &__second-text {
        opacity: 1;
        transform:  scale(1);
    }
}

.icon-container {
    margin: 2rem auto;
    position: relative;
    text-align: center;
    
    @include respond(tab-port) {
        width: 100%;
    }
    
    &__button {
        padding: 0 1rem;
        display: inline-block;
        text-align: center;
        font-size: $font-size-xlarge;
        transition: all 0.5s;
        cursor: pointer;

        &:not(:last-child) {
            border-right: 3px solid $color-black;
        }
    }

    &__caption {
        font-size: $font-size-small;
        // required color to keep from changing color with __button
        color: $color-black; 
        opacity: 0;
        transform: translate(-10%, -80%);
        transition: all 0.5s;
    }
  
    &__button:hover {
        color: $color-secondary;
    }
    
    &__button:hover &__caption {
        opacity: 1;
        transform: translate(0, 0);
    }
}

.piruza-dome {
    margin: 6rem 0;
    padding: 2rem 1rem;
    border-top: 3px solid $color-black;
    border-bottom: 3px solid $color-black;
    background-color: $color-white;
    
    // &__content {
    // }
    
    // &__text-container {  
    // }
        
    // &__image-container {
    // }
    
    &__text--two-column {
        font-size: $font-size-large;
        margin-bottom: 4rem;
        
        -moz-column-count: 2;
        -moz-column-gap: 5rem; //1em = 14px;
        -moz-column-rule: 1px solid $color-white;
        
        column-count: 2;
        column-gap: 5rem; //1em = 14px;
        column-rule: 1px solid $color-white;
        
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }
    
    &__image--full {
        width: 100%;
        border-radius: 3px;
        box-shadow: $shadow-lt;
    }
}

.timeline-video {
    position: relative;
    height: 100vh;
    padding: 15rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary, 0.4),
        rgba($color-primary-dark, 0.6)),
    url("../../assets/images/horse-square.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
        
    @include respond(tab-land) {
        padding: 15rem 10rem;
    }
    
    @include respond(tab-port) {
        padding: 10rem 5rem;
    }
}

.feature-box {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    cursor: pointer;
    color: $color-white;
    transform: translate(-50%, -50%);
    transition: transform .3s;

    &__icon {
        font-size: 6rem;
        margin-bottom: .5rem;
        display: inline-block;

        @supports (-webkit-background-clip: text) or (background-clip: text)  {
            background-image: linear-gradient(to right, $color-white, $color-grey-dark);
            -webkit-background-clip: text;
            color: transparent;
        }

        @include respond(tab-port) {
            margin-bottom: 0;
        }
    }

    &:hover {
        transform: translate(-50%, -52%) scale(1.03);
    }
}
</style>