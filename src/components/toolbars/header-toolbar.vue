<template>
    <header id="main-header" class="toolbar-header toolbar-header--desktop">
        <div class="toolbar-header__container toolbar-header__container--desktop align-items-center px-3"
        :class="[$baseConfig.state.windowScrollPos.Y > 50 ? 'py-1' : 'py-2', 
        fullExtended ? 'container-fluid toolbar-header__container--full-extended' : 'container']">
            <div class="toolbar-header__col toolbar-header__col-left">
                <a href="mailto:info@mcgillpartners.com" target="_blank"  class="d-block"><small>INFO@MCGILLPARTNERS.COM</small></a>
                <span  class="d-block"><small>+44 (0)20 3985 1800</small></span>

            </div>
            <div class="toolbar-header__col toolbar-header__col-right">
                <div class="main-logo">
                    <router-link to="/" class="main-logo__link">
                        <img class="main-logo__image" :src="require('@/assets/logo.png')" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        props: ['fullExtended']
    }
</script>