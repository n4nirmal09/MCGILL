<template>
  <div id="app">
    <div class="main-wrapper" id="main-wrapper">
      <header-toolbar ref="mainHeader" :fullExtended="true" v-if="!$baseConfig.isMobile"/> 
      <header-mobile-toolbar ref="mainHeaderMobile" v-else/>
      <main id="main-content" :style="{
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
