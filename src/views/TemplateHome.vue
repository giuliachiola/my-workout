<template>
  <div class="tpl-home">

    <div class="l-wrapper">
      <div v-for="sheet in sheets" :key="sheet.id" class="c-select">
        <input :id="sheet.id" :value="sheet.id" v-model="selectedSheet" name="sheetGroup" type="radio">
        <label :for="sheet.id" :class="selectedSheet === sheet.id ? 'is-active' : ''" class="c-select__label c-button">{{ sheet.name }}</label>
      </div>
      <span>selectedSheet: {{ selectedSheet }}</span>

      <button class="c-button c-button--long" @click="start">START</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'TemplateHome',

    data () {
      return {
        selectedSheet: 1, // default 'palestra'
      }
    },

    methods: {
      start () {
        // TODO: start timer
        this.$router.push({ name: 'TemplateExercise', params: { sheet: this.selectedSheet, circuit: 0, exercise: 0 } })
      }
    },

    computed: {
      ...mapState([
        'sheets'
      ])
    }
  }
</script>

<style lang="scss">
  .tpl-home {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .c-select {
    display: block;

    input {
      display: none;
    }
  }

  .c-select__label {
    &.is-active {
      background-color: $color-san-juan;
    }
  }
</style>
