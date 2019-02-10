<template>
  <div class="c-recap c-button">
    <p class="c-recap__intro">{{ intro }}</p>

    <a href="javascript:;" @click="goToSkipped">
      <h2 class="c-recap__title">{{ exercise.title }}</h2>
      <h3 class="c-recap__subtitle">{{ exercise.subtitle }}</h3>
    </a>

    <button @click="nextSkipped">Next Skipped >></button>
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
    },

    computed: {
      exercise () {
        const firstSkipped = this.exercises[0]
        const currentCircuit = this.circuits.filter((c, cindex) => cindex === firstSkipped.circuit)[0]
        const currentEx = currentCircuit.exercises.filter((ex, exindex) => exindex === firstSkipped.exercise)
        return currentEx
      },
    },

    methods: {
      goToSkipped () {
        const firstSkipped = this.skipped[0]
        return this.$router.push({ name: 'TemplateExercise', params: { sheet: firstSkipped.sheet, circuit: firstSkipped.circuit, exercise: firstSkipped.exercise } })
      },

      nextSkipped () {

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
