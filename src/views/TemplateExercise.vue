<template>
  <div class="tpl-exercise">

    <exercise v-if="skipped.length > 0" v-bind="skippedExerciseObj" :exercise-recap="true" :intro="'Skipped'" @click.native="goToSkipped"/>

    <table>
      <tr>
        <td>Circuit: {{ circuitId }} / {{ circuits.length }}</td>
        <td>Reps: <span class="u-big">{{ rep }}</span> / {{ circuit.reps }}</td>
      </tr>
    </table>

    <exercise v-bind="exercise"/>

    <exercise v-bind="nextExerciseObj" :exercise-recap="true" :intro="'Next'"/>

    <div class="c-button__group tpl-exercise__button-group">
      <button @click="skipExercise" class="c-button c-button--long c-button--warning">Skip</button>
      <button @click="goNextExercise" class="c-button c-button--long c-button--success">Done!</button>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Exercise from '@atoms/Exercise.vue'

  export default {
    name: 'TemplateExercise',

    components: {
      Exercise,
    },

    computed: {

      // Current
      exercise () {
        return this.exercises.filter((ex, index) => index === Number(this.$route.params.exercise)) || {}
      },

      exercises () {
        return this.circuit.exercises || []
      },

      circuit () {
        return this.circuits.filter((c, index) => index === Number(this.$route.params.circuit))[0] || {}
      },

      circuitId () {
        return Number(this.$route.params.circuit) || 0
      },

      circuits () {
        return this.sheet.circuits || []
      },

      sheet () {
        return this.sheets.filter(s => s.id === Number(this.$route.params.sheet))[0] || {}
      },

      // Next
      nextExercise () {
        const moreExercises = this.circuit.exercises.length > Number(this.$route.params.exercise) + 1
        return moreExercises ? Number(this.$route.params.exercise) + 1 : 0
      },

      nextCircuit () {
        if (this.nextExercise !== 0) { // se ci sono ancora eserizi resta sul circuito
          return Number(this.$route.params.circuit)
        } else {
          if (this.rep < this.circuit.reps) { // se ci sono ancora ripetizioni, resta sul circuito
            this.updateRep(this.rep + 1)
            return  Number(this.$route.params.circuit)
          } else { // se non ci sono ripetizioni e nemmeno esercizi, cambia circuito
            this.updateRep(1)
            return  Number(this.$route.params.circuit) + 1
          }
        }
      },

      // next
      nextExerciseObj () {
        return this.exercises.filter((ex, index) => index === Number(this.nextExercise))
      },

      // skipped
      skippedExerciseObj () {
        const firstSkipped = this.skipped[0]
        const currentCircuit = this.circuits.filter((c, cindex) => cindex === firstSkipped.circuit)[0]
        const currentEx = currentCircuit.exercises.filter((ex, exindex) => exindex === firstSkipped.exercise)
        return currentEx
      },

      ...mapState([
        'sheets', 'rep', 'skipped'
      ])
    },

    methods: {
      goNextExercise () {
        if (this.$route.params.circuit + 1 >= this.circuits.length) { // finiti i circuiti
          return this.$router.push({ name: 'TemplateHome' })
        }

        return this.$router.push({ name: 'TemplateExercise', params: { sheet: this.sheet.id, circuit: this.nextCircuit, exercise: this.nextExercise } })
      },

      updateRep (value) {
        this.$store.commit('updateRep', value)
      },

      nextExerciseWithKey () {
        if (event.keyCode == 39) { // right arrow
          this.goNextExercise()
        }
      },

      // Skip
      skipExercise () {
        this.$store.commit('addToSkipped', { sheet: Number(this.$route.params.sheet), circuit: Number(this.$route.params.circuit), exercise: Number(this.$route.params.exercise) })
      },

      goToSkipped () {
        const firstSkipped = this.skipped[0]
        return this.$router.push({ name: 'TemplateExercise', params: { sheet: firstSkipped.sheet, circuit: firstSkipped.circuit, exercise: firstSkipped.exercise } })
      },
    },

    mounted () {
      document.addEventListener("keyup", this.nextExerciseWithKey);
    },

    destroyed () {
      document.removeEventListener("keyup", this.nextExerciseWithKey)
    }
  }
</script>

<style lang="scss">
  .tpl-exercise {
    position: relative;
    height: calc(100vh - 44px); // 44 hamburger, 10 padding
  }

  .tpl-exercise__button-group {
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
</style>
