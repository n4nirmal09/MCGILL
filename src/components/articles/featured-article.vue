<template>
    <article class="featured-article" 
    v-reveal="{
    	animation: 'featuredArticle'
    }">
        <div class="featured-article__header">
        		<slot name="header"></slot>
        </div>
        <div class="featured-article__content font-secondary">
        		<slot name="content"></slot>
        </div>
    </article>
</template>