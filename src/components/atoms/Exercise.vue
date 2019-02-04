<template>
  <div class="c-exercise">
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>

    <p>Sets: {{ sets }}</p>
    <p>Reps: {{ reps }}</p>
    <p>Recovery: {{ recovery }}</p>
  </div>
</template>

<script>
export default {
  name: 'Exercise',

  props: {

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

    reps: {
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

<style>

</style>
