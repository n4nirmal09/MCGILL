<template>
    <span class="icon-sound">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.6 96.7">
            <g>
                <path class="st0" d="M5.7 33.3v27.9" />
                <path class="st0" d="M2.7 34.9h27.5l32.4-22.8v72.5L30.2 61.2H2.7" />
                <g v-if="muted">
                    <path class="st0" d="M78.1 28.5l32.7 32.7" />
                    <path class="st0" d="M110.8 28.5L78.1 61.2" />
                </g>
            </g>
        </svg>
    </span>
</template>
<style scoped>
.st0 {
    fill: none;
    stroke: #fff;
    stroke-width: 6;
    stroke-miterlimit: 10
}
</style>
<script>
export default {
    props: ['muted']
}
</script>