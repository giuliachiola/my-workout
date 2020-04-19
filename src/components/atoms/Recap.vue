<template>
  <div class="c-recap c-button">
    <p class="c-recap__intro">{{ isSkipped ? 'Skipped' : 'Next' }}</p>

    <a href="javascript:;" @click="goToExercise">
      <h2 class="c-recap__title">{{ exercise.title }}</h2>
      <h3 class="c-recap__subtitle">{{ exercise.subtitle }}</h3>
    </a>

    <button v-if="isSkipped" @click="nextExercise">Next >></button>
  </div>
</template>

<script>
  export default {

    name: 'Recap',

    props: {
      exercises: {
        type: Array,
        default: () => [],
      },

      isSkipped: {
        type: Boolean,
        default: false,
      },
    },

    data () {
      return {
        skippedIndex: 0
      }
    },

    computed: {
      exercise () {
        return this.exercises[0]
      },
    },

    methods: {
      goToExercise () {
        const current = this.exercises[this.skippedIndex]
        return this.$router.push({ name: 'TemplateExercise', params: { sheet: current.sheet, circuit: current.circuit, exercise: current.exercise } })
      },

      nextExercise () {
        return this.exercises[this.skippedIndex + 1]
      }
    }
  }
</script>

<style lang="scss">
  .c-recap {
    display: flex;
    text-align: left;
    align-items: flex-start;
    background: transparent;
    box-shadow: 0px 1px 35px 0px $color-black-30;
  }

  .c-recap__intro {
    margin: 0;
    margin-right: $space-m;
    color: $color-san-juan;
  }

  .c-recap__title {
    margin: 0;
    font-size: $font-size-m;
  }

  .c-recap__subtitle {
    margin: 0;
    font-size: $font-size-m;
  }

  .c-recap__title,
  .c-recap__subtitle {
    display: inline-block;
    margin-left: 5px;
  }
</style>
