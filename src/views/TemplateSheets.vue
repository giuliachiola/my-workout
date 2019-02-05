<template>
  <div class="tpl-sheets">
    <div v-for="sheet in sheets" :key="sheet.id">
      <ul class="tpl-sheets__nav">
        <li>
          <router-link :to="{ name: 'TemplateSheet', params: { id: sheet.id }}">Scheda #{{ sheet.id}} | {{ sheet.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'TemplateSheets',

    computed: mapState([
      'sheets'
    ])
  }
</script>

<style lang="scss">
  .tpl-sheets__nav {
    @include listreset;

    a {
      display: block;
      padding: $space-s;
      margin-bottom: $space-l;
      border-radius: $app-border-radius;
      text-decoration: none;
      background: $color-san-juan-30;
      color: $color-white;
    }
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
