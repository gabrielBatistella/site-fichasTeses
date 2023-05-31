<template>
  <v-card
  elevation="4"
  rounded
  outlined>
    <v-simple-table>
      <tbody>
        <tr class="py-2">
          <td class="text-left">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="mb-1 text-left text-wrap text-h4">
                  <b>{{ entry.Nome}}</b>
                </v-list-item-title>
                <v-list-item-subtitle class="mb-1 text-left text-wrap">
                  {{entry.Curso}} - {{  entry.Programa }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </td>
          <td class="text-xs-right">
            <v-list-item one-line>
              <v-list-item-content>
                <v-list-item-subtitle class="mb-1 text-right text-h5">
                  {{entry.Data}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: 'ResearchEntry',
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
};
</script>
