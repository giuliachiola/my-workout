<template>
  <div class="c-exercise">
    <h2>{{ exercise }}</h2>
    <p>Ripetizioni: {{ repetitions }}</p>
    <p>Recupero: {{ recovery }}sec</p>
  </div>
</template>

<script>
export default {
  name: 'Exercise',

  props: {

    name: {
      type: String,
      default: '',
    },

    repetitions: {
      type: Number,
      default: undefined,
    },

    recovery: {
      type: Number,
      default: undefined,
    },
  }
}
</script>

<style>

</style>
