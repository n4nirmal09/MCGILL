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
				<span class="cta-card__controls-label">Email:</span>
				<a :href="'mailto:' + mail" class="cta-card__controls-link" target="_blank">{{ mail }}</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['title', 'mail', 'appendClasses']
	}
</script>