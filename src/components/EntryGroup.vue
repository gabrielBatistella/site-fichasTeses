<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header color="blue-grey lighten-4">
        <b>{{ title }}</b>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="blue-grey lighten-5">
        <v-simple-table class="transparent">
          <tbody>
            <research-entry v-for='entry in entries' :key='entry.ordem' :entry='entry'/>
          </tbody>
        </v-simple-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ResearchEntry from './ResearchEntry.vue';

export default {
  name: 'EntryGroup',

  components: {
    ResearchEntry,
  },

  props: {
    entries: {
      type: Array,
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>
