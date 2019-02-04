<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'TemplateHome' }">Home</router-link>
      <router-link :to="{ name: 'TemplateSummary' }">Summary</router-link>
      <router-link :to="{ name: 'TemplateAbout' }">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
  @import "src/assets/styles/style.scss";
</style>
