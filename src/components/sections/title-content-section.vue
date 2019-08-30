<template>
    <div class="section" v-reveal="{
        animation: 'from-bottom-elems-stagger'
    }">
        <div class="container section__container py-3 py-sm-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section__header mb-sm-4">
                        <slot name="header"></slot>
                    </div>
                    <div class="section__content">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>