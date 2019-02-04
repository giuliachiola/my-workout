<template>
  <div class="tpl-summary">
    <h1>Summary</h1>

    <ul>
      <li v-for="exercise in exercises">
        <exercise v-bind="exercise"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import Exercise from '@atoms/Exercise.vue'

  export default {
    name: 'TemplateSummary',

    components: {
      Exercise,
    },
  }
</script>
