/* eslint-disable */
const scrollController = new ScrollMagic.Controller()

export default {
	inserted (el, binding) {
		let triggerElement = document.querySelector(binding.value.triggerElement) || el,
		duration = triggerElement.offsetHeight || 0,
		offset = binding.value.offset || 0,
		triggerHook = binding.value.hook || 'onLeave'
		
		

		if(binding.value.offsetViewportHeight) duration -= window.innerHeight
		new ScrollMagic.Scene({
			triggerElement: triggerElement,
			triggerHook: triggerHook,
			duration: duration,
			offset: offset
		})
		.setPin(el)
		.setClassToggle(el, 'pinned')
		.addTo(scrollController)
	}
}