<template>
  <v-footer dark padless color="blue-grey lighten-2">
    <v-card
    width="100%"
    flat
    tile
    class="text-center transparent">
      <v-card-text class="white--text">
        <img
        alt="ICMC Logo"
        src="/icmc_logo.png"
        style="width:100px;"/>
        <br>
        <strong>SSC0961 - Desenvolvimento Web e Mobile - 2023</strong>
      </v-card-text>
      <span id="professores">
        <v-card
        v-for="(professor, i) in professores" :key="i"
        color="blue-grey lighten-1"
        width="350px"
        class="pl-3 mx-3"
        elevation="4">
          <v-simple-table class="transparent">
            <tr>
              <td>
                <v-avatar>
                  <img :alt="professor.nome" :src="professor.link_image" />
                </v-avatar>
              </td>
              <td>
                <v-list-item class="ml-5">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ professor.nome }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ professor.cargo }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </td>
            </tr>
          </v-simple-table>
          <v-divider/>
          <v-card-actions class="mr-1">
            <v-btn icon :href="professor.linkedin" target="_blank" v-if="professor.linkedin !== ''">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon :href="professor.icmc" target="_blank" v-if="professor.icmc !== ''">
              <v-icon>mdi-school</v-icon>
            </v-btn>
            <v-spacer/>
            <a :href="'mailto:' + professor.email" v-if="professor.email !== ''"
            style="color: white;">
              {{ professor.email }}
            </a>
          </v-card-actions>
        </v-card>
      </span>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterCustom',

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],

    professores: [
      {
        link_image: '/professores/adenilso.jpg',
        nome: 'Adenilso da Silva Simão',
        cargo: 'Docente responsável',
        email: 'adenilso@icmc.usp.br',
        linkedin: 'https://www.linkedin.com/in/adenilso-simao-7a478118/',
        icmc: 'https://www.icmc.usp.br/pessoas?id=6078529',
      },
      {
        link_image: '/professores/rodrigo.jpeg',
        nome: 'Rodrigo Henrique Ramos',
        cargo: 'Estagiário PAE',
        email: 'rodrigohenrique.ramos@usp.br',
        linkedin: 'https://www.linkedin.com/in/rodrigo-ramos-166b69230/',
        icmc: '',
      },
    ],
  }),
};
</script>

<style scoped>
#professores {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
