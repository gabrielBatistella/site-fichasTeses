<template>
  <div class="about text-center image">
    <h1>Membros do grupo:</h1>
    <div style="max-width: 800px; margin-left: auto; margin-right: auto;">
      <v-simple-table class="transparent">
        <tbody>
          <tr v-for="(membro,i) in membros" :key="i">
            <th class="text-center">
              <v-avatar size="100px" class="my-1">
                <v-img
                :alt="membro.name"
                :src="membro.image_link"/>
              </v-avatar>
            </th>
            <th class="text-left text-h5">
              <b>{{ membro.nusp }}</b>
            </th>
            <th class="text-center text-h5" >
              <b>{{ membro.name }}</b>
            </th>
            <th class="text-center">
              <v-btn icon large
              :href="membro.linkedin" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </th>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',

  data() {
    return {
      membros: [
        {
          image_link: './membros/gabriel.jpeg',
          name: 'Gabriel Takeshi Miyake Batistella',
          nusp: '11232198',
          linkedin: 'https://www.linkedin.com/in/gabrielbatistella/',
        },
        {
          image_link: './membros/thales.jpeg',
          name: 'Thales Gomes Maurin',
          nusp: '11175712',
          linkedin: 'https://www.linkedin.com/in/thalesmaurin/',
        },
        {
          image_link: './membros/vitor.jpg',
          name: 'Vitor Fernando Rinaldini',
          nusp: '11232305',
          linkedin: 'https://www.linkedin.com/in/vitor-rinaldini/',
        },
      ],
    };
  },
};
</script>

<style scoped>
tbody tr:hover {
  background-color: transparent !important;
};
</style>
