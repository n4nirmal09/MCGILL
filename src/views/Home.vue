<template>
    <div class="page-content">
        <sidebar-nav :theme="sideNavTheme" v-if="!$baseConfig.isMobile"></sidebar-nav>
        <section id="what-we-do">
            <hero-banner data-bg="dark"></hero-banner>
            <div data-bg="light" class="bg-light">
                <div class="container py-4 py-sm-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <featured-article>
                                <template slot="header">
                                    <h2>There is only one placement like yours.<br>And only one definitive answer.</h2>
                                </template>
                                <template slot="content">
                                    <p>Complex placements in a rapidly changing market need true expertise combined with a fresh perspective. That is the driving force behind the creation of McGill and Partners, a new boutique specialist insurance broker.</p>
                                    <p>We believe that an open, aligned and progressive insurance market benefits everyone. Our role as brokers is to create specialist transactions to manage risk, while delivering economic flexibility and stability for our clients.</p>
                                    <p>We deliver market defining risk solutions to a select group of clients. We are proud to be discerning. In the clients we work for, the partners we work with and the talent who drive us forward. Launching in 2019, our vision helped secure significant backing from Warburg Pincus, whose experience across a broad range of sectors makes them the ideal partner for our ambitious global plans.</p>
                                </template>
                            </featured-article>
                        </div>
                    </div>
                </div>
            </div>
            <div data-bg="light" class="bg-secondary">
                <title-content-section>
                    <template slot="header">
                        <h2>Our core lines of business</h2>
                    </template>
                    <template slot="content">
                        <business-card-group></business-card-group>
                    </template>
                </title-content-section>
            </div>
        </section>
        <section data-bg="light" id="who-we-are">
            <title-content-section>
                <template slot="header">
                    <h2>Leadership team</h2>
                </template>
                <template slot="content">
                    <team-card-group></team-card-group>
                </template>
            </title-content-section>
        </section>
        <section data-bg="dark" class="bg-dark" id="join-us">
            <banner-content-section :images="[{
                screen: 0,
                src: require('@/assets/banner-hq-b-mobile.jpg')
            }, {
                screen: 1024,
                src: require('@/assets/banner-hq-b.jpg')
            }]">
                <template slot="content">
                    <cta-card-group></cta-card-group>
                </template>
            </banner-content-section>
        </section>
    </div>
</template>
<script>
import { utilities } from "@/utilities"
export default {
    name: 'home',

    mounted() {
        this.$nextTick(() => {
            setTimeout(this.sectionBg, 500)
            const resize = utilities.debounce(() => {
                this.scrollController.destroy(true)
                this.sectionBg()
            }, 250)

            window.addEventListener('resize', resize)
        })
    },

    data() {
        return {
            sideNavTheme: 'dark',
            scrollController: ''
        }
    },

    methods: {
        sectionBg() {
            let sections = this.$el.querySelectorAll('[data-bg]'),
                scenes = [],
                mainInstance = this

            this.scrollController = new ScrollMagic.Controller()

            sections.forEach((section) => {
                let scene = new ScrollMagic.Scene({ triggerElement: section, duration: section.offsetHeight })
                    .on('enter', function() {
                        let triggerElement = this.triggerElement()
                        mainInstance.sideNavTheme = triggerElement.dataset.bg === 'dark' ? 'dark' : 'light'
                    })
                scenes.push(scene)
            })

            this.scrollController.addScene(scenes)
        }
    }
}
</script>