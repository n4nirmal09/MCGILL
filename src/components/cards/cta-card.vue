<template>
	<div class="cta-card" :class="appendClasses" v-reveal="{
        animation: 'from-bottom-elems-stagger'
    }">
		<div class="cta-card__header">
			<h2 class="cta-card__title">
				<slot name="title"></slot>
			</h2>
		</div>
		<div class="cta-card__grid">
			<div class="cta-card__description">
				<slot name="description"></slot>
			</div>
			<div class="cta-card__controls">
				<a v-if="mail" :href="'mailto:' + mail" class="cta-card__controls-link text-light d-block" target="_blank">{{ mail }}</a>
				<span v-if="phone" class="cta-card__controls-span text-light mt-1 d-block">{{ phone }}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['title', 'mail', 'phone', 'appendClasses']
	}
</script>