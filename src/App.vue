<template>
  <div id="app">
    <div class="main-wrapper" id="main-wrapper">
      <header-toolbar ref="mainHeader" :fullExtended="this.$route.params.version === 'b' ? true : false" v-if="!$baseConfig.isMobile"/> 
      <header-mobile-toolbar ref="mainHeaderMobile" v-else/>
      <main :style="{
        paddingTop: $baseConfig.isMobile ? '68px' : ''
      }">
        <router-view/>
      </main>
      <footer-toolbar />
    </div>
  </div>
</template>

<script>
 export default {
 }
</script>
