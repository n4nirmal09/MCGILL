/* eslint-disable */
import { utilities } from '@/utilities'
const scrollController = new ScrollMagic.Controller()

export default {
    inserted(el, binding) {
    		if(utilities.isIE()) {  // Ie scroll issue not smmoth!
    		el.classList.add('parallax-disabled') 
    		return 
    		} 
        let parentTrigger = binding.value.parent,
            duration = binding.value.duration || '400%',
            hook = binding.value.hook || 'onEnter',
            autoAlpha = binding.value.alphaOut || 1,
            tween = null,
            triggerElement = parentTrigger ? el.parentNode : el

           

        tween = TweenLite.to(el, 0.001, {
            y: "100%",
            rotation: 0.002,
            autoAlpha: autoAlpha
        })

        const scene = new ScrollMagic.Scene({
                triggerElement: triggerElement,
                triggerHook: hook,
                reverse: true,
                duration: duration
            })
            .setTween(tween)
            .addTo(scrollController);
    }
}