<template>
  <Layout>
    
        <Navigation />

        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Example image" src="~/favicon.png" width="135" />

        <Hero />

        <main>
            
            <section id="timeline" class="timeline-video">
                <div class="row">
                    <div class="feature-box" onclick="window.location='#movie-show';">
                        <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                            <span class="feature-box__icon fas fa-film"></span>
                            <h3 class="heading-tertiary u-margin-bottom-small">WATCH THE VIDEO</h3>
                            <p class="feature-box__text paragraph">A Glance at History and Mystery</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="golden-age" class="piruza-dome">
                <div class="piruza-dome__content">
                    <div class="row">
                        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="col-1-of-2">
                            <div class="piruza-dome__text-container">    
                                <div class="heading-switch u-text-center u-margin-bottom-medium">
                                    <h2 class="heading-secondary heading-switch__first-text">
                                        The Golden Age
                                    </h2>
                                    <h2 class="heading-secondary heading-switch__second-text">
                                        A Forgotten Time
                                    </h2>
                                </div>
                                <p class="piruza-dome__text--two-column paragraph">
                                    The Haft Paykar, or Seven Portraits, is the fourth of the five narrative poems of the Khamsa of Nizami, and tells 
                                    the story of the legendary fifth-century Sasanian king Bahram Gur. The tale is believed to contain the poet’s own 
                                    views on love and emphasizes the importance of self-knowledge. Raised at the court of an Arab king, Bahram Gur one 
                                    day found his way into a locked palace room, where he encountered seven portraits of seven princesses representing 
                                    the seven climes of antiquity. After becoming king, Bahram Gur took these “seven beauties” as brides and built each 
                                    a domed pavilion. He visited each of his brides on successive days of the week, dressed in robes that matched the 
                                    color associated with each pavilion. In this painting, Bahram Gur wears a blue robe and is seated in the Turquoise 
                                    Pavilion of Princess Piruza (Persian for “turquoise”).
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="col-1-of-2">
                            <img src="img/bahram-gur-dome-of-piruza.jpg" class="piruza-dome__image--full">
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade" data-aos-anchor-placement="center-bottom" class="content-slider">
                <div id="sindbad" class="heading-switch u-text-center u-margin-bottom-big">
                    <h2 class="heading-secondary heading-switch__first-text">
                        Everyone has a story to tell.
                    </h2>
                    <h2 class="heading-secondary heading-switch__second-text">
                        Some stories are better than others.
                    </h2>
                </div>
                <div class="slider-box">
                    
                    <div data-key="box-key-sindbad-one" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            In the times of the Caliph Haroun-al-Raschid there lived in Bagdad a poor porter named Hindbad, who on a very hot day 
                            was sent to carry a heavy load from one end of the city to the other. Before he had accomplished half the distance he 
                            was so tired that, finding himself in a quiet street where the pavement was sprinkled with rose water, and a cool breeze 
                            was blowing, he set his burden upon the ground, and sat down to rest in the shade of a grand house. Very soon he decided 
                            that he could not have chosen a pleasanter place; a delicious perfume of aloes wood and pastilles came from the open 
                            windows and mingled with the scent of the rose water which steamed up from the hot pavement. Within the palace he heard 
                            some music, as of many instruments cunningly played, and the melodious warble of nightingales and other birds, and by 
                            this, and the appetising smell of many dainty dishes of which he presently became aware, he judged that feasting and merry 
                            making were going on. He wondered who lived in this magnificent house which he had never seen before, the street in which 
                            it stood being one which he seldom had occasion to pass. To satisfy his curiosity he went up to some splendidly dressed 
                            servants who stood at the door, and asked one of them the name of the master of the mansion.
                        </p>
                        <audio data-key="box-key-sindbad-one" class="slider-box__audio slider-box__unskew" src="img/sindbad1.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-two" class="u-box-hide slider-box__text-container">
                        <figure class="slider-box__shape">
                            <img class="slider-box__image" src="img/smoker.jpg" alt="book cover">   
                            <figcaption class="slider-box__caption">
                                <h3 class="heading-tertiary ">
                                    Sindbad the Sailor!
                                </h3> 
                            </figcaption>
                        </figure>
                        <p class="slider-box__unskew paragraph u-text-left">
                            "What," replied he, "do you live in Bagdad, and not know that here lives the noble Sindbad the Sailor, 
                            that famous traveller who sailed over every sea upon which the sun shines?"
                            The porter, who had often heard people speak of the immense wealth of Sindbad, could not help feeling 
                            envious of one whose lot seemed to be as happy as his own was miserable. Casting his eyes up to the sky 
                            he exclaimed aloud,
                            "Consider, Mighty Creator of all things, the differences between Sindbad's life and mine. Every day I 
                            suffer a thousand hardships and misfortunes, and have hard work to get even enough bad barley bread to 
                            keep myself and my family alive, while the lucky Sindbad spends money right and left and lives upon the 
                            fat of the land! What has he done that you should give him this pleasant life--what have I done to 
                            deserve so hard a fate?"
                        </p>
                        <audio data-key="box-key-sindbad-two" class="slider-box__audio slider-box__unskew" src="img/sindbad2.mp3" controls></audio>
                    </div>
                    

                    <div data-key="box-key-sindbad-three" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            So saying he stamped upon the ground like one beside himself with misery and despair. Just at this moment a servant 
                            came out of the palace, and taking him by the arm said, "Come with me, the noble Sindbad, my master, wishes to speak to you."
                            Hindbad was not a little surprised at this summons, and feared that his unguarded words might have drawn upon him the 
                            displeasure of Sindbad, so he tried to excuse himself upon the pretext that he could not leave the burden which had been 
                            entrusted to him in the street. However the lackey promised him that it should be taken care of, and urged him to obey 
                            the call so pressingly that at last the porter was obliged to yield.
                        </p>
                        <audio data-key="box-key-sindbad-three" class="slider-box__audio slider-box__unskew" src="img/sindbad3.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-four" class="u-box-hide slider-box__text-container">
                            <figure class="slider-box__shape">
                                    <img class="slider-box__image" src="img/arab-pipe.jpg" alt="book cover">   
                                    <figcaption class="slider-box__caption">
                                        <h3 class="heading-tertiary ">
                                            Delicacies of the time.
                                        </h3> 
                                    </figcaption>
                                </figure>
                        <p class="slider-box__unskew paragraph u-text-left">
                            He followed the servant into a vast room, where a great company was
                            seated round a table covered with all sorts of delicacies.  In the
                            place of honour sat a tall, grave man whose long white beard gave him a
                            venerable air.  Behind his chair stood a crowd of attendants eager to
                            minister to his wants.  This was the famous Sindbad himself.  The
                            porter, more than ever alarmed at the sight of so much magnificence,
                            tremblingly saluted the noble company.  Sindbad, making a sign to him
                            to approach, caused him to be seated at his right hand, and himself
                            heaped choice morsels upon his plate, and poured out for him a draught
                            of excellent wine, and presently, when the banquet drew to a close,
                            spoke to him familiarly, asking his name and occupation.
                        </p>
                        <audio data-key="box-key-sindbad-four" class="slider-box__audio slider-box__unskew" src="img/sindbad4.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-five" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            "My lord," replied the porter, "I am called Hindbad."
                            "I am glad to see you here," continued Sindbad.  "And I will answer for
                            the rest of the company that they are equally pleased, but I wish you
                            to tell me what it was that you said just now in the street." For
                            Sindbad, passing by the open window before the feast began, had heard
                            his complaint and therefore had sent for him.
                            At this question Hindbad was covered with confusion, and hanging down
                            his head, replied, "My lord, I confess that, overcome by weariness and
                            ill-humour, I uttered indiscreet words, which I pray you to pardon me."
                        </p>
                        <audio data-key="box-key-sindbad-five" class="slider-box__audio slider-box__unskew" src="img/sindbad5.mp3" controls></audio>
                    </div> 

                    <div data-key="box-key-sindbad-six" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            "Oh!" replied Sindbad, "do not imagine that I am so unjust as to blame
                            you. On the contrary, I understand your situation and can pity you.
                            Only you appear to be mistaken about me, and I wish to set you right.
                            You doubtless imagine that I have acquired all the wealth and luxury
                            that you see me enjoy without difficulty or danger, but this is far
                            indeed from being the case. I have only reached this happy state after
                            having for years suffered every possible kind of toil and danger.
                        </p>
                        <audio data-key="box-key-sindbad-six" class="slider-box__audio slider-box__unskew" src="img/sindbad6.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-seven" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            "Yes, my noble friends," he continued, addressing the company, "I
                            assure you that my adventures have been strange enough to deter even
                            the most avaricious men from seeking wealth by traversing the seas.
                            Since you have, perhaps, heard but confused accounts of my seven
                            voyages, and the dangers and wonders that I have met with by sea and
                            land, I will now give you a full and true account of them, which I
                            think you will be well pleased to hear."
                        </p>
                        <audio data-key="box-key-sindbad-seven" class="slider-box__audio slider-box__unskew" src="img/sindbad7.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-eight" class="u-box-hide slider-box__text-container">
                        <p class="slider-box__unskew paragraph u-text-left">
                            As Sindbad was relating his adventures chiefly on account of the
                            porter, he ordered, before beginning his tale, that the burden which
                            had been left in the street should be carried by some of his own
                            servants to the place for which Hindbad had set out at first, while he
                            remained to listen to the story.
                        </p>
                        <audio data-key="box-key-sindbad-eight" class="slider-box__audio slider-box__unskew" src="img/sindbad8.mp3" controls></audio>
                    </div>

                    <div data-key="box-key-sindbad-nine" class="u-box-hide u-text-right slider-box__source">
                        <h3 class="heading-tertiary ">
                            The Seven Voyages of Sindbad the Sailor
                        </h3>
                        <p class="paragraph"> Written work by Andrew Lang</p>
                        <a href="http://www.gutenberg.org/ebooks/128" class="source" target="_blank">Source: Project Gutenberg</a>
                        <p class="paragraph">Recording by Dawn Larsen</p> 
                        <a href="https://librivox.org/the-arabian-nights-entertainments-by-andrew-lang/" target="_blank" class="source">Source: LibriVox.org</a>
                    </div>
                </div>
                    
                <div class="icon-container">
                    <figure data-key="box-key-sindbad-one" class="icon-container__button">
                        &#x2160;
                        <figcaption class="icon-container__caption">FIRST</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-two" class="icon-container__button">
                        &#x2161;
                        <figcaption class="icon-container__caption">SECOND</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-three" class="icon-container__button">
                        &#x2162;
                        <figcaption class="icon-container__caption">THIRD</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-four" class="icon-container__button">
                        &#x2163;
                        <figcaption class="icon-container__caption">FOURTH</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-five" class="icon-container__button">
                        &#x2164;
                        <figcaption class="icon-container__caption">FIFTH</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-six" class="icon-container__button">
                        &#x2165;
                        <figcaption class="icon-container__caption">SIXTH</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-seven" class="icon-container__button">
                        &#x2166;
                        <figcaption class="icon-container__caption">SEVENTH</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-eight" class="icon-container__button">
                        &#x2167;
                        <figcaption class="icon-container__caption">EIGHTH</figcaption>
                    </figure>
                    <figure data-key="box-key-sindbad-nine" class="icon-container__button">
                        &#x2168;
                        <figcaption class="icon-container__caption">NINTH</figcaption>
                    </figure>
                </div>
            </section>   

                <section id="questionSection" class="quiz">
        <div class="heading-switch u-text-center u-margin-bottom-medium">
                <q class="heading-secondary heading-switch__first-text">
                    I never failed to stand the test triumphantly
                </q>
                <cite class="heading-secondary heading-switch__second-text">
                    - Said Sidi-Nouman to the Caliph.
                </cite>
            </div>
        <p id="questionText" class="heading-tertiary quiz__question-text"></p>
        <form id="questionForm">
            <div class="quiz__group">
                <div data-aos="zoom-in-right" class="quiz__radio-group">
                    <label class="quiz__radio-label">
                        <input  type="radio" name="answer" class="quiz__radio-input" value="0">
                        <div class="quiz__radio-button">
                            <p id="choice1" class="paragraph quiz__radio-text"></p>
                        </div>
                    </label>
                </div>
                <div data-aos="zoom-in-right" class="quiz__radio-group">
                    <label class="quiz__radio-label">
                        <input  type="radio" name="answer" class="quiz__radio-input" value="1">
                        <div class="quiz__radio-button">
                            <p id="choice2" class="paragraph quiz__radio-text"></p>
                        </div>
                        
                    </label>
                </div>
                <div data-aos="zoom-in-right" class="quiz__radio-group">
                    <label class="quiz__radio-label">
                        <input  type="radio" name="answer" class="quiz__radio-input" value="2">
                        <div class="quiz__radio-button">
                            <p id="choice3" class="paragraph quiz__radio-text"></p>
                        </div>
                    </label>
                </div>                    
            </div>
        </form>
        <div class="quiz__button-container">
            <a id="navButton" class="btn-text paragraph" type="button" name="button">Submit answer</a>
            <a id="retakeButton" class="btn-text paragraph" type="button" name="button">Restart Quiz</a>
            <a id="DownloadButton" class="btn-text paragraph u-quiz-hide" href="res/CR-Cert.pdf" target="_blank">Download Certificate</a>
        </div>
    </section>

        </main>

        <Footer />

  </Layout>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'
import Quiz from '~/components/Quiz.vue'
import AOS from '~/assets/scripts/aos.js'

export default {
  components: {
    Navigation,
    Hero,
    Footer,
    Quiz
  },
  methods: {
    stopVideo: function() {
      const popupVideos = document.querySelectorAll('video');
      popupVideos.forEach(function(video) {
          video.pause();
      });
    }
  },
  mounted() {
    // basic configuration for Animate on Scroll (AOS)
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    offset: 50
    })
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
    url("../assets/images/group.jpg");
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
            url("../assets/images/arabia-skyline-land.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @include respond(tab-land) {
            background-image: linear-gradient(-105deg, rgba($color-white, .8) 65%, rgba($color-white, .8) 0%, transparent 65%,), 
            url("../assets/images/arabia-skyline-land.jpg");
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
    url("../assets/images/horse-square.jpg");
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

.quiz {
    min-height: 100vh;
    margin-top: 3rem;
    padding: 6rem 0;
    background-image: linear-gradient(
        to top,
        rgba($color-white, 1),
        rgba($color-white, 0.4),
        rgba($color-white, 1)),
    url("../assets/images/arab-school-bw.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    &__button-container {
        position: relative;
        margin: 0 auto;
        width: 60%;
    }

    &__group { 
        margin-bottom: 4rem;
    }

    &__radio-group {
        width: 100%;
        padding: 1rem 0;
    }
    
    &__radio-label {
        position: relative;
        display: block;
        transition: all .3s;
        cursor: pointer;
    }

    &__radio-input {
        display: none;
    }

    &__question-text {
        position: relative;
        margin: 0 auto;
        padding-bottom: 2rem;
        width: 60%;
    }

    &__radio-button {
        position: relative;
        margin: 0 auto;
        min-height: 10rem;
        width: 60%;
        color: $color-white;
        background-color: $color-primary;
        background-clip: border-box;
        box-shadow: $shadow-lt;
        // border: 2px dashed $color-primary;
        border-radius: 3px;
        transition: all .2s;
    }
    
    &__radio-text {
        @include absCenter;
        width: 100%;
        padding-left: 2rem;
    }
    
    //when input is checked the sibling selector (could also be ~ ) is used
    &__radio-button:hover {
        transform: translate(0.1rem, 0.3rem) scale(.95);
    }

    &__radio-input:checked ~ &__radio-button {
        transform: translate(0.1rem, 0.3rem) scale(.99);
        box-shadow: $shadow-xlt;
        background-clip: padding-box;
        border: 2px dashed $color-primary;
    }

    &__download-button {
        display: none;
    }
}
</style>