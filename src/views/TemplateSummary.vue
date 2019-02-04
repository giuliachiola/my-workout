<template>
  <div class="tpl-summary">
    <div v-for="sheet in sheets" :key="sheet.id">
      <ul class="tpl-summary__nav">
        <li>
          <h4><a :href="`sheet-${sheet.id}`">Scheda #{{ sheet.id}} | {{ sheet.name }}</a></h4>
        </li>
      </ul>
    </div>


    <div v-for="sheet in sheets" :key="sheet.id" :id="`sheet-${sheet.id}`">
      <div class="c-sheet__title">
        <h4 class="c-sheet__id">Scheda #{{ sheet.id}}</h4>
        <h2 class="c-sheet__name">{{ sheet.name }}</h2>
      </div>

      <ul class="c-sheet__circuit">
        <li v-for="(circuit, index) in sheet.exercises" :key="index">
          <circuit v-bind="circuit"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Circuit from '@elements/Circuit.vue'

  export default {
    name: 'TemplateSummary',

    components: {
      Circuit,
    },

    computed: mapState([
      'sheets'
    ])
  }
</script>

<style lang="scss">
  .tpl-summary__nav {
    @include listreset;

    a {
      color: $color-white;
    }
  }

  // sheet
  .c-sheet__id {
    margin-bottom: 0;
  }

  .c-sheet__name {
    margin-top: 0;
  }

  .c-sheet__title {
    padding: $space-xs;
    margin-bottom: $space-xs;
    border-radius: $app-border-radius;
    text-align: center;
    color: white;
    background: #2d4372;
  }

  .c-sheet__circuit {
    @include listreset;
  }
</style>
