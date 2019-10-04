<template>
    <nav class="sidebar-nav sidebar-nav--fixed sidebar-nav--left" 
    v-pin="{triggerElement: '#main-content', offsetViewportHeight: true, hook: 'onLeave'}">
        <ul class="sidebar-nav__list">
            <li class="sidebar-nav__item" v-for="(navItem, n) in navList" :key="navItem.title + '-' + n">
                <a :href="'#' + navItem.targetSection" 
                class="sidebar-nav__link" 
                :class="theme === 'dark' ? 'text-gray-light text-gray-light--retain' : 'text-dark text-dark--retain'" 
                @click="scrollToTop('#' + navItem.targetSection, $event)">{{ navItem.title }}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
import { utilities } from "@/utilities"
export default {
	props: ['theme'],

    mounted() {
        
        this.$nextTick(() => {
            setTimeout(this.scrollSpy, 2000)
            const resize = utilities.debounce(() => {
                this.scrollController.destroy(true)
                this.scrollSpy()
            }, 250)

            window.addEventListener('resize', resize)
        })
    },

    data() {
        return {
            dark: false,
            scrollController: '',
            navList: [{
                title: 'What we do',
                targetSection: "what-we-do"
            }, {
                title: 'Who we are',
                targetSection: "who-we-are"
            }, {
                title: 'Contact us',
                targetSection: "join-us"
            }]
        }
    },

    methods: {
        scrollSpy() {
            let spyItems = this.$el.querySelectorAll('.sidebar-nav__item'),
                mainInstance = this,
                scenes = []
            this.scrollController = new ScrollMagic.Controller()
            spyItems.forEach((el) => {
                let link = el.querySelector('.sidebar-nav__link'),
                    itemTarget = link.getAttribute('href'),
                    targetEl = document.querySelector(itemTarget),
                    scene = new ScrollMagic.Scene({ triggerElement: itemTarget, duration: targetEl.offsetHeight })
                    .setClassToggle(el, 'sidebar-nav__item--active')

                scenes.push(scene)
            })

            this.scrollController.addScene(scenes)
        }
    }
}
</script>