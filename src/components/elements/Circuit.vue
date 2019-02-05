<template>
  <div class="c-circuit">
    <exercise v-for="(exercise, index) in list" v-bind="exercise" :key="index"/>
    <p class="c-circuit__reps">{{ reps }}x</p>
  </div>
</template>

<script>
  import Exercise from '@atoms/Exercise.vue'

  export default {
    name: 'Circuit',

    components: {
      Exercise,
    },

    props: {

      list: {
        type: Array,
        default: () => [],
      },

      reps: {
        type: Number,
        default: undefined,
      },
    },
  }
</script>

<style lang="scss">
  // colors
  $c-circuit-bg:     $color-white;

  .c-circuit {
    padding: $space-s;
    margin-bottom: $space-l;
    border-radius: $app-border-radius;
    background: $color-san-juan-30;
  }

  .c-circuit__reps {
    margin-top: $space-l;
    margin-bottom: 0;
    border-radius: $app-border-radius;
    text-align: center;
    color: white;
    @extend %font-h2;
    font-weight: $font-weight-bold;

  }
</style>
