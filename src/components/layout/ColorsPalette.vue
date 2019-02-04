<template>
  <div class="c-colorsPalette">

    <ul v-for="(list, index) in lists" :key="index">
      <h2 v-if="list.mainTitle">{{ list.mainTitle }}</h2>
      <h3>{{ list.title }}</h3>

      <li v-for="color in list.items" :key="color.hex" class="c-colorsPalette__item">
        <div :style="{ backgroundColor: color.hex }" class="c-colorsPalette__swatch"></div>
        <div class="c-colorsPalette__vars">
          <span>{{ color.var }}</span>
          <code>{{ color.hex }}</code>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

/**
 * The color palette
 */
  export default {
    name: 'ColorsPalette',

    data () {
      return {
        lists: [
          {
            mainTitle: 'Main colors',
            title: 'Blue',
            items: [
              {
                var: '$color-azure',
                hex: '#3752A0',
              },
            ],
          },
          {
            title: 'Red and pink',
            items: [
              {
                var: '$color-prim',
                hex: '#F3E6EE',
              },
              {
                var: '$color-hibiscus',
                hex: '#A72879',
              },
              {
                var: '$color-red-violet',
                hex: '#C4136C',
              },
              {
                var: '$color-claret',
                hex: '#6F1A51',
              },
            ],
          },
          {
            title: 'Red, Orange and Yellow',
            items: [
              {
                var: '$color-red-orange',
                hex: '#FF2B38',
              },
              {
                var: '$color-ecstasy',
                hex: '#F77122',
              },
              {
                var: '$color-buttercut',
                hex: '#F5A623',
              },
              {
                var: '$color-gorse',
                hex: '#F8E837',
              },
            ],
          },
          {
            mainTitle: 'Neutral colors',
            items: [
              {
                var: '$color-solid-black',
                hex: '#000000',
              },
              {
                var: '$color-mine-shaft',
                hex: '#222222',
              },
              {
                var: '$color-night-rider',
                hex: '#303030',
              },
              {
                var: '$color-tundora',
                hex: '#4C4C4C',
              },
              {
                var: '$color-silver-chalice',
                hex: '#9D9D9D',
              },
              {
                var: '$color-nobel',
                hex: '#B6B6B6',
              },
              {
                var: '$color-mercury',
                hex: '#E4E4E4',
              },
              {
                var: '$color-gallery',
                hex: '#F0F0F0',
              },
              {
                var: '$color-wild-sand',
                hex: '#F5F5F5',
              },
              {
                var: '$color-white',
                hex: '#FFFFFF',
              },
            ],
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

ul {
  @include listreset;
}

.c-colorsPalette__item {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.c-colorsPalette__swatch {
  width: 200px;
  height: 100px;
  border: 1px solid WhiteSmoke;
  border-radius: 8px;
}

.c-colorsPalette__vars {
  font-size: px(16);

  span,
  code {
    display: block;
    margin: 5px 0;
  }
}

</style>

<docs>
</docs>
