<template>
    <div class="section contain-bg">
        <div class="background background--parallax" v-if="images" v-parallax="{parent: true, duration: '600%'}">
            <div class="background__image background__image--preload" v-bgimage="images" ></div>
        </div>
        <div class="section__content">
            <div class="section__container container py-3 py-sm-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <slot name="content"></slot>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['images']
    }
</script>