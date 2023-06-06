<template>
  <tr>
    <td class="text-h6">
      <b>{{ entry.Nome }}</b>
    </td>
    <td>
      {{ entry.Curso }} - {{ entry.Programa }}
    </td>
    <td>
      {{ entry.Data }}
    </td>
  </tr>
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

<style scoped>
tbody tr:hover {
  background-color: #CFD8DC !important;
};
</style>
