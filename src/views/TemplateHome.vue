<template>
  <div class="tpl-home">
    <exercise />
  </div>
</template>

<script>
  import Exercise from '@atoms/Exercise.vue'

  export default {
    name: 'TemplateHome',

    components: {
      Exercise,
    },
  }
</script>
