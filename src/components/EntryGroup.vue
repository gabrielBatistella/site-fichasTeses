<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        {{ title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-simple-table>
          <tr v-for='entry in entries' :key='entry.ordem'>
            <td>
              <research-entry :entry='entry'/>
            </td>
          </tr>
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
