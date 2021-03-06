/* eslint-disable */
const scrollController = new ScrollMagic.Controller()

export default {
	inserted (el, binding) {
		
		let revealValue = binding.value.animation,
			revealEaseTiming = binding.value.timing || 0.8,
			revealEase = Power2.easeOut,
			revealHook = 'onEnter',
			revealDuration = binding.value.duration || 0,
			revealStaggerRatio = 0.2,
			revealReverse = false,
			revealOffset = 50,
			tween = null
		
		switch(revealValue){
			case 'fade-in':
			tween = TweenLite.from(el,revealEaseTiming,{autoAlpha: 0,ease: revealEase})
			break
			case 'from-bottom':
			tween = TweenMax.from(el,revealEaseTiming,{
				autoAlpha: 0,
				y: 200,
				ease: revealEase})
			break
			case 'from-bottom-elems-stagger':
			tween = TweenMax.staggerFrom(el.children,revealEaseTiming,{
				autoAlpha: 0,
				y: 200,
				ease: revealEase},revealStaggerRatio)
			break
			case 'featuredArticle':
			tween = new TimelineMax()
			.staggerFrom([el.querySelector('.featured-article__header'), el.querySelectorAll('.featured-article__content')], revealEaseTiming, {
				autoAlpha: 0,
				y: 50
			}, 0.3)
			.staggerFrom(el.querySelectorAll('.featured-article__content > *'), revealEaseTiming, {
				autoAlpha: 0,
				y: 50
			}, 0.2, 0.2)
			break
			default:
			tween = null
			break
		}

		new ScrollMagic.Scene({ 
			triggerElement: el, 
			triggerHook: revealHook, 
			duration: revealDuration, 
			reverse: revealReverse,
			offset: revealOffset
		})
		.setTween(tween)
		.addTo(scrollController)
	}
}