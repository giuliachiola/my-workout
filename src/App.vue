<template>
  <div id="app" :class="isMenuActive ? 'is-menu-active' : ''">
    <app-header :isMenuActive="isMenuActive"/>
    <router-view/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import AppHeader from '@atoms/AppHeader.vue'

  export default {
    name: 'App',

    components: {
      AppHeader,
    },

    computed: {
      ...mapState([
        'isMenuActive'
      ]),
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  @import "src/assets/styles/style.scss";

  // spacing
  $s-header-max-width:      px(250);

  #app {
    transition: all .3s ease-in;

    &.is-menu-active {
      margin-left: $s-header-max-width;
      transition: all .3s ease-out;
    }
  }
</style>
