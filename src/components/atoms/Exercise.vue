<template>
  <div class="c-exercise">

    <h2 class="c-exercise__title">{{ title }}</h2>
    <h3 class="c-exercise__subtitle">{{ subtitle }}</h3>

    <table class="c-exercise__table">
      <tr class="c-exercise__row">
        <td>Sets</td>
        <td>
          <span v-for="(set, index) in sets" class="c-exercise__set" :key="index">
            {{ set }}
            <span v-if="index !== sets.length -1">+</span>
          </span>
        </td>
      </tr>
      <tr v-if="load" class="c-exercise__row">
        <td>Load</td>
        <td><span class="c-exercise__load">{{ load }} </span>Kg</td>
      </tr>
      <tr class="c-exercise__row">
        <td>Recovery</td>
        <td class="c-exercise__recovery">{{ recovery }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {

    name: 'Exercise',

    props: {

      intro: {
        type: String,
        default: '',
      },

      title: {
        type: String,
        default: '',
      },

      subtitle: {
        type: String,
        default: '',
      },

      sets: {
        type: Array,
        default: () => [],
      },

      load: {
        type: Number,
        default: undefined,
      },

      recovery: {
        type: String,
        default: '',
      },
    }
  }
</script>

<style lang="scss">
  .c-exercise {
    margin-bottom: $space-l;
    padding: $space-m;
    min-width: px(270);
    text-align: center;
    border-radius: $app-border-radius;
    background: $color-white;
    box-shadow: 0px 1px 35px 0px $color-black-30;

    &.c-exercise--recap {
      background: transparent;
    }
  }

  .c-excercise__intro {
    .c-exercise--recap & {
      margin: 0;
    }
  }

  .c-exercise__title {
    margin: 0;
    font-weight: $font-weight-bold;

    .c-exercise--recap & {
      font-size: $font-size-m;
    }
  }

  .c-exercise__subtitle {
    margin: 0;

    .c-exercise--recap & {
      font-size: $font-size-m;
    }
  }

  .c-excercise__intro,
  .c-exercise__title,
  .c-exercise__subtitle {
    .c-exercise--recap & {
      display: inline-block;
      margin-left: 5px;
    }
  }

  .c-exercise__table {
    margin-top: $space-m;
  }

  .c-exercise__row {
    &:last-child {
      border-bottom: none;
    }

    td:first-child {
      text-align: left;
    }

    td:last-child {
      text-align: right;
    }
  }

  .c-exercise__set {
    @extend %font-h2;
    font-weight: $font-weight-bold;
  }

  .c-exercise__load,
  .c-exercise__recovery {
    font-size: $font-size-l;
  }
</style>
