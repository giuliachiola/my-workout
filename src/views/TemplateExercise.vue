<template>
  <div class="tpl-exercise">
    <!-- <router-link :to="{ name: 'TemplateExercise', params: { sheet: sheetId, circuit: circuitId, exercise: exerciseId } }" class="c-button c-button--long">Skip</router-link> -->

    <p class="c-button c-button--long">Circuit: {{ circuitId }}</p>
    <p class="c-button c-button--long">Reps: {{ rep }} / {{ circuit.reps }}</p>
    <exercise v-bind="exercise"/>

    <button @click="goToNext" class="c-button c-button--long">Done!</button>

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
        return this.exercises.filter((ex, index) => index === Number(this.$route.params.exercise))
      },

      exercises () {
        return this.circuit.exercises
      },

      circuit () {
        return this.circuits.filter((c, index) => index === Number(this.$route.params.circuit))[0]
      },

      circuitId () {
        return Number(this.$route.params.circuit)
      },

      circuits () {
        return this.sheet.circuits
      },

      sheet () {
        return this.sheets.filter(s => s.id === Number(this.$route.params.sheet))[0]
      },

      // Next
      nextExercise () {
        const moreExercises = this.circuit.exercises.length > Number(this.$route.params.exercise) + 1
        return moreExercises ? Number(this.$route.params.exercise) + 1 : 0
      },

      nextCircuit () {
        console.log('this.circuit.reps', this.circuit.reps)
        console.log('this.rep', this.rep)

        if (this.nextExercise === 0) { // fine circuito
          if (this.rep < this.circuit.reps) { // se ci sono ancora ripetizioni, ripeti il circuito
            this.updateRep(this.rep + 1)
            return  Number(this.$route.params.circuit)
          } else { // se non ci sono ripetizioni, cambia circuito
            this.updateRep(1)
            return  Number(this.$route.params.circuit) + 1
          }
        } else { // se ci sono ancora eserizi resta lì
          return Number(this.$route.params.circuit)
        }
      },

      ...mapState([
        'sheets', 'rep'
      ])
    },

    methods: {
      goToNext () {
        return this.$router.push({ name: 'TemplateExercise', params: { sheet: this.sheet.id, circuit: this.nextCircuit, exercise: this.nextExercise } })
      },

      updateRep (value) {
        this.$store.commit('updateRep', value)
      },

      nextExerciseWithKey () {
        if (event.keyCode == 39) { // right arrow
          this.$router.push({ name: 'TemplateExercise', params: { sheet: this.sheet.id, circuit: this.nextCircuit, exercise: this.nextExercise } })
        }
      }
    },

    mounted () {
      document.addEventListener("keyup", this.nextExerciseWithKey);
    },

    destroyed () {
      document.removeEventListener("keyup", this.nextExerciseWithKey)
    }
  }
</script>
