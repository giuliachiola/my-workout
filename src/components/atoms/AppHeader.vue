<template>
  <header :class="isMenuActive ? 'is-active' : ''">
    <a class="c-header__toggle" href="javascript:;" @click="toggleMenu"></a>
    <nav class="c-header__nav">
      <router-link :to="{ name: 'TemplateHome' }" class="c-header__item">Home</router-link>
      <router-link :to="{ name: 'TemplateSheets' }" class="c-header__item">Sheets</router-link>
      <router-link :to="{ name: 'TemplateAbout' }" class="c-header__item">About</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    data () {
      return {
        isMenuActive: false,
      }
    },

    methods: {
      toggleMenu () {
        this.isMenuActive = !this.isMenuActive
      },
    },
  }
</script>

<style lang="scss">
  // Toggle
  .c-header__toggle {
    display: block;
    width: px(44);
    z-index: $z-1;

    &::before,
    &::after {
      content: '';
      background-color: $color-san-juan;
      display: block;
      height: px(3);
      transition: all 200ms ease-in-out;
    }

    &:before {
      box-shadow: 0 10px 0 $color-san-juan;
      margin-bottom: 17px;
    }

    .is-active &::before {
      box-shadow: 0 0 0 $color-san-juan;
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
    width: 100%;
    background: $color-san-juan;
    transform: translate(-100%, 0);
    transition: all .2s ease-out;

    .is-active & {
      transform: translate(0, 0);
      transition: all .2s ease-out;
    }
  }

  .c-header__item {
    display: block;
    padding: $space-s 0;
    text-decoration: none;
  }
</style>
