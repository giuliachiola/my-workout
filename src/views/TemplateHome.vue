<template>
  <div class="tpl-home">
    <app-header />
  </div>
</template>

<script>
  import AppHeader from '@atoms/AppHeader.vue'

  export default {
    name: 'TemplateHome',

<<<<<<< Updated upstream
    components: {
      AppHeader,
=======
    data () {
      return {
        selectedSheet: 1, // default 'palestra'
      }
    },

    methods: {
      start () {
        // TODO: start timer
        this.$router.push({ name: 'TemplateExercise', params: { sheet: this.selectedSheet, circuit: 1, exercise: 1 } })
      }
>>>>>>> Stashed changes
    },
  }
</script>
