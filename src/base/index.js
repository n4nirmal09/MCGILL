import Vue from 'vue'
import '@/pollyfills'
import 'objectFitPolyfill'
import BaseConfig from "./config"

objectFitPolyfill()

Vue.use(BaseConfig, {
    store: new BaseConfig.Store({
        breakpoint: {
            width: window.innerWidth,
            height: window.innerHeight
        },

        windowScrollPos: {
            Y: window.scrollY || document.documentElement.scrollTop,
            X: window.scrollX || document.documentElement.scrollLeft
        }
    })
})

// Styles
import '@/sass/main.scss'