<template>
	<div class="team-card">
		<figure class="team-card__figure">
			<img class="team-card__image" :src="image" alt="">
		</figure>
		<h3 class="team-card__name">
			<slot name="name"></slot>
		</h3>
		<p class="team-card__description">
			<slot name="description"></slot>
		</p>
	</div>
</template>
<script>
	export default {
		props: ['image']
	}
</script>