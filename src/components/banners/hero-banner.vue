<template>
    <div class="hero-banner contain-bg">
        <div class="background" v-parallax="{parent: true, hook: 'onLeave'}">
            <div class="background__image background__image--preload" v-bgimage="[{
                  screen: 0,
                  src: require('@/assets/banner-hq.jpg')
                }]"></div>
            <transition name="fade">
                <video class="background__video" autoplay muted playsinline v-if="showVideo" data-object-fit="cover" ref="bannerVideo">
                    <source v-if="!$baseConfig.isMobile" src="@/assets/Mcgill_Desktop_Animation.mp4" type="video/mp4">
                    <source v-else src="@/assets/Mcgill_Mobile_Animation.mp4" type="video/mp4">
                </video>
            </transition>
        </div>
        <div class="hero-banner__video-controls video-controls">
                <span class="text-light video-controls__sound "
                :class="videoMuted ? 'video-controls__sound--muted' : ''"
                @click="videoMuteToggle">
                    <icon-sound :muted="videoMuted"></icon-sound>
                </span>
        </div>
        <!-- <div class="hero-banner__content align-items-center">
            <div class="hero-banner__container container">
                <article class="bg-secondary p-2 text-center">
                    <h1 class="mb-0">{{ videoScrollTrigger }}</h1>
                </article>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            showVideo: true,
            videoMuted: true,
            scrollController: '' 
        }
    },
    computed: {
        videoScrollTrigger() {
            return this.$baseConfig.state.windowScrollPos.Y === 0 && !this.$baseConfig.state.scrolledInitial && !this.$baseConfig.isMobile
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.setVideoScene()
            this.addVideoListeners()
        })
    },



    methods: {
        videoMuteToggle() {
            if(this.$refs.bannerVideo) {
                this.$refs.bannerVideo.muted = !this.$refs.bannerVideo.muted
                this.videoMuted = this.$refs.bannerVideo.muted
            }
        },

        videoPlay() {
            if(this.$refs.bannerVideo) {
                this.$refs.bannerVideo.play()
            }
        },

        videoPause() {
            if(this.$refs.bannerVideo) {
                this.$refs.bannerVideo.pause()
            }
        },

        videoMute() {
            if(this.$refs.bannerVideo) {
                this.$refs.bannerVideo.muted = true
                this.videoMuted = this.$refs.bannerVideo.muted
            }
        },

        setVideoScene() {
            let video = this.$refs.bannerVideo,
            scene = ''

            this.scrollController = new ScrollMagic.Controller()
            scene = new ScrollMagic.Scene({
                triggerElement: this.$el,
                triggerHook: 'onLeave',
                duration: this.$el.offsetHeight
            })
            .on('enter', () => {
                this.videoPlay()
            })
            .on('leave', () => {
                this.videoPause()
                this.videoMute()
            })
            .addTo(this.scrollController)


        },

        videoEndListener() {
            //this.videoPlay()
            if(this.videoScrollTrigger) {
                this.scrollToTop(this.$el.offsetHeight)
            }
        },

        addVideoListeners() {
            this.$refs.bannerVideo.addEventListener('ended', this.videoEndListener)
        }
    }
}
</script>