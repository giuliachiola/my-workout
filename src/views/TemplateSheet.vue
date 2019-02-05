<template>
  <div class="tpl-sheet">
    <h1 class="tpl-sheet__title">Scheda #{{ sheet.id}} |<br>{{ sheet.name }}</h1>

    <ul class="c-sheet__circuit">
      <li v-for="(circuit, index) in sheet.exercises" :key="index">
        <circuit v-bind="circuit"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Circuit from '@elements/Circuit.vue'

  export default {
    name: 'TemplateSheet',

    components: {
      Circuit,
    },

    computed: {
      sheet () {
        return this.sheets.filter(s => s.id === Number(this.$route.params.id))[0]
      },

      ...mapState([
        'sheets'
      ]),
    }
  }
</script>

<style lang="scss">
  .tpl-sheet__title {
    color: $color-white;
  }

  // sheet
  .c-sheet__id {
    margin: 0;
  }

  .c-sheet__name {
    margin: 0;
  }

  .c-sheet__title {
    padding: $space-xs;
    margin-bottom: $space-xs;
    border-radius: $app-border-radius;
    text-align: center;
    color: $color-white;
    background: $color-san-juan-30;
  }

  .c-sheet__circuit {
    @include listreset;
  }
</style>
