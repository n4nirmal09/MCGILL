/* eslint-disable */
import '@/plugins/scrollTo'
import { utilities } from "@/utilities"

export default {

    data() {
        return {
            scrollTopPos: window.scrollY
        }
    },

    methods: {
        scrollToTop(scrollDuration, event, offset) {
            if (event) event.preventDefault()
            let offsetY = offset || 0
            TweenLite.to(window, 1, { scrollTo: { y: scrollDuration, autoKill: false, offsetY: offset } })
        }
    }
}