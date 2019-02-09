<template>
  <header :class="isMenuActive ? 'is-active' : ''">
    <nav class="c-header__nav">
      <router-link :to="{ name: 'TemplateHome' }" class="c-header__item" @click.native="toggleMenu">Home</router-link>
      <router-link :to="{ name: 'TemplateSheets' }" class="c-header__item" @click.native="toggleMenu">Sheets</router-link>
      <router-link :to="{ name: 'TemplateAbout' }" class="c-header__item" @click.native="toggleMenu">About</router-link>
    </nav>
    <a class="c-header__toggle" href="javascript:;" @click="toggleMenu"></a>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    props: {
      isMenuActive: {
        type: Boolean,
        default: false,
      }
    },

    methods: {
      toggleMenu () {
        this.$store.commit('toggleMenu')
      },
    },
  }
</script>

<style lang="scss">
  // spacing
  $s-header-max-width:      px(250);
  // colors
  $c-header-hamburger:      $color-san-juan;

  // Toggle
  .c-header__toggle {
    display: block;
    width: px(44);
    height: px(44);
    padding-top: $space-xs;
    z-index: $z-header;

    &::before,
    &::after {
      content: '';
      background-color: $c-header-hamburger;
      display: block;
      height: px(3);
      transition: all 200ms ease-in-out;
    }

    &:before {
      box-shadow: 0 10px 0 $c-header-hamburger;
      margin-bottom: 17px;
    }

    .is-active &::before {
      box-shadow: 0 0 0 $c-header-hamburger;
      transform: translateY(10px) rotate(45deg);
    }

    .is-active &::after {
      transform: translateY(-10px) rotate(-45deg);
    }
  }

  // Sidebar nav
  .c-header__nav {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: $s-header-max-width;
    padding: $space-m;
    background: $color-san-juan;
    transform: translate(-100%, 0);
    transition: all .2s ease-out;

    &:hover {
      cursor: pointer;
    }

    .is-active & {
      transform: translate(0, 0);
      transition: all .2s ease-out;
    }
  }

  .c-header__item {
    display: block;
    padding: $space-s 0;
    text-decoration: none;
    border-bottom: 1px solid rgba($color-white, .2);
  }
</style>
