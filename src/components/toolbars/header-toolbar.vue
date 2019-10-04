<template>
    <header id="main-header" class="toolbar-header toolbar-header--desktop" >
        <div class="toolbar-header__container toolbar-header__container--desktop align-items-center px-3"
        :class="[$baseConfig.state.windowScrollPos.Y > 50 ? 'pt-4 px-4' : 'pt-4 px-4', 
        fullExtended ? 'container-fluid toolbar-header__container--full-extended' : 'container']">
            <div class="toolbar-header__col toolbar-header__col-left"></div>
            <div class="toolbar-header__col toolbar-header__col-right">
                <div class="main-logo">
                    <router-link to="/" class="main-logo__link">
                        <!-- <img class="main-logo__image" :src="require('@/assets/logo.png')" alt=""> -->
                        <svg class="main-logo__svg-image main-logo__svg-image--light" viewBox="0 0 500 182">
                          <defs>
                            <clipPath id="main-logo__svg-mask" class="main-logo__svg-mask">
                              <rect x="0" y="0" width="100%" height="100%" />
                            </clipPath>
                          </defs>
                          <g clip-path="url(#main-logo__svg-mask)">          
                            <image xlink:href="@/assets/logo-white.png" width="100%" height="100%"/>
                          </g>
                        </svg>
                        <svg class="main-logo__svg-image main-logo__svg-image--dark" viewBox="0 0 500 182">
                          <defs>
                            <clipPath id="main-logo__svg-mask--dark" class="main-logo__svg-mask main-logo__svg-mask--dark">
                              <rect x="0" y="0" width="100%" height="100%" transform="translate(0,182)"/>
                            </clipPath>
                          </defs>
                          <g clip-path="url(#main-logo__svg-mask--dark)">          
                            <image xlink:href="@/assets/logo.png" width="100%" height="100%"/>
                          </g>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    import { utilities } from "@/utilities"
    export default {
        props: ['fullExtended'],

        data() {
            return {
                scrollController: ''
            }
        },

        mounted() {
            this.$nextTick(() => {
                setTimeout(this.creatingScenes, 500)
                const resize = utilities.debounce(() => {
                    this.scrollController.destroy(true)
                    this.creatingScenes()
                }, 250)

                window.addEventListener('resize', resize)
            })
        },

        methods: {
            creatingScenes() {
                

                let sections = document.querySelectorAll('[data-bg]'),
                scenes = [],
                mainInstance = this,
                mainLogo = this.$el.querySelector('.main-logo'),
                mainLogoSvgLight = this.$el.querySelector('.main-logo__svg-image--light'),
                mainLogoSvgDark = this.$el.querySelector('.main-logo__svg-image--dark'),
                maskLight = this.$el.querySelector('#main-logo__svg-mask > rect'),
                maskDark = this.$el.querySelector('#main-logo__svg-mask--dark > rect'),
                directionToggler = 1

                
                this.scrollController = new ScrollMagic.Controller

                
                sections.forEach((section) => {
                    let sectionBg = section.dataset.bg,
                    darkOffset = 0,
                    lightOffset = 0,
                    tween = null,
                    scene = null
                    if(sectionBg === "dark") {
                        darkOffset = "182" * directionToggler
                        directionToggler = -1
                    } else {
                        darkOffset = 0
                    }

                    tween = new TimelineMax()
                    tween.to(maskDark, 0.5, {
                        y: darkOffset,
                        ease: Power0.easeNone
                    })

                    scene = new ScrollMagic.Scene({
                        triggerElement: section,
                        triggerHook: 'onLeave',
                        offset: -(this.$el.offsetHeight),
                        duration: mainLogo.offsetHeight
                    })
                    .setTween(tween)
                    .on('enter', () => {
                        
                    })

                    scenes.push(scene)
                })

                this.scrollController.addScene(scenes)
            }
        }
    }
</script>