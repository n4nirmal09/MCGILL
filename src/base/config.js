/* eslint-disable */
import Vue from 'vue'
import { utilities } from "@/utilities"
import mixins from '@/mixins'
import reveal from '@/directives/reveal'
import bgimage from '@/directives/bgimage'
import scrollParallax from '@/directives/scroll-parallax'
import headerToolbar from '@/components/toolbars/header-toolbar'
import headerMobileToolbar from '@/components/toolbars/header-mobile-toolbar'
import footerToolbar from '@/components/toolbars/footer-toolbar'
import heroBanner from '@/components/banners/hero-banner'
import sidebarNav from '@/components/sidebars/navigation-sidebar'
import featuredArticle from '@/components/articles/featured-article'
import titleContentSection from '@/components/sections/title-content-section'
import fullBannerSection from '@/components/sections/full-banner-section'
import businessCard from '@/components/cards/business-card'
import teamCard from '@/components/cards/team-card'
import ctaCard from '@/components/cards/cta-card'
import businessCardGroup from '@/components/groups/business-card-group'
import teamCardGroup from '@/components/groups/team-card-group'
import ctaCardGroup from '@/components/groups/cta-card-group'
import iconMail from '@/components/icons/mail-icon'
import iconPhone from '@/components/icons/phone-icon'
import iconTwitter from '@/components/icons/twitter-icon'
import iconLinkedin from '@/components/icons/linkedin-icon'
import iconAviation from '@/components/icons/aviation-icon'
import iconEnergy from '@/components/icons/energy-icon'
import iconFinancial from '@/components/icons/financial-icon'
import iconMarine from '@/components/icons/marine-icon'
import iconProperty from '@/components/icons/property-icon'
import iconReinsurance from '@/components/icons/reinsurance-icon'
import iconSolution from '@/components/icons/solution-icon'
import iconSound from '@/components/icons/sound-icon'


class ConfigStore {
  constructor (data = {}) {
    data.scrolledInitial = false
    this.storeVM = new Vue({ data })
    this.mobileBreakpoint = 1025 
    const resize = utilities.debounce(() => {
            
            this.storeVM.$data.breakpoint.width = window.innerWidth
            this.storeVM.$data.breakpoint.height = window.innerHeight
        }, 250)
    const scroll = () => {
            this.storeVM.$data.scrolledInitial = true
            this.storeVM.$data.windowScrollPos.Y = window.scrollY || document.documentElement.scrollTop
            this.storeVM.$data.windowScrollPos.X = window.scrollX || document.documentElement.scrollLeft
        }
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', scroll)

    
  }



  get isMobile () {
    return this.storeVM.$data.breakpoint.width < this.mobileBreakpoint
  }


  
  get state () {
    return this.storeVM.$data
  }
}

const BaseConfig = {
    Store: ConfigStore,
    install(Vue, options) {

        // Adding Mixin
        Vue.mixin({
            beforeCreate () {
                this.$baseConfig = options.store
            },
            ...mixins
        })

        // Adding Directives
        Vue.directive('reveal', reveal)
        Vue.directive('bgimage', bgimage)
        Vue.directive('parallax', scrollParallax)

        // Components
        Vue.component('header-toolbar', headerToolbar)
        Vue.component('header-mobile-toolbar', headerMobileToolbar)
        Vue.component('footer-toolbar', footerToolbar)
        Vue.component('hero-banner', heroBanner)
        Vue.component('sidebar-nav', sidebarNav)
        Vue.component('featured-article', featuredArticle)
        Vue.component('title-content-section', titleContentSection)
        Vue.component('banner-content-section', fullBannerSection)
        Vue.component('business-card', businessCard)
        Vue.component('team-card', teamCard)
        Vue.component('cta-card', ctaCard)
        Vue.component('business-card-group', businessCardGroup)
        Vue.component('team-card-group', teamCardGroup)
        Vue.component('cta-card-group', ctaCardGroup)
        Vue.component('icon-mail', iconMail)
        Vue.component('icon-phone', iconPhone)
        Vue.component('icon-twitter', iconTwitter)
        Vue.component('icon-linkedin', iconLinkedin)
        Vue.component('icon-aviation', iconAviation)
        Vue.component('icon-energy', iconEnergy)
        Vue.component('icon-financial', iconFinancial)
        Vue.component('icon-marine', iconMarine)
        Vue.component('icon-property', iconProperty)
        Vue.component('icon-reinsurance', iconReinsurance)
        Vue.component('icon-solution', iconSolution)
        Vue.component('icon-sound', iconSound)
    }
}

export default BaseConfig