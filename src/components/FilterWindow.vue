<template>
  <v-card width="100%">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header color="blue">
          <v-card-title style="color:white;">Filtrar</v-card-title>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item>
              Nome:
            </v-list-item>
            <v-list-item>
              <v-text-field
                v-model="nameSearch_aux"
                placeholder="Insira um nome..."
                hide-details="auto"
                class="ma-0 pa-0"/>
            </v-list-item>
            <v-list-item>
              Data:
            </v-list-item>
            <v-list-item>
              <v-range-slider
              v-model="yearRange_aux"
              :max="anoFinal"
              :min="anoInicial"
              :step="1"
              hide-details
              thumb-label="always"
              class="align-center">
              <template v-slot:prepend>
                <v-text-field
                  v-model="yearRange_aux[0]"
                  class="ma-0 pa-0"
                  single-line
                  type="number"
                  variant="outlined"
                  style="width: 70px"
                  density="compact"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  class="ma-0 pa-0"
                  v-model="yearRange_aux[1]"
                  single-line
                  type="number"
                  variant="outlined"
                  style="width: 70px"
                  density="compact"
                ></v-text-field>
              </template>
              </v-range-slider>
            </v-list-item>
            <v-list-item>
              Curso:
            </v-list-item>
            <v-list-item>
              <v-radio-group
              v-model="selectedCurso_aux"
              row
              certer>
                <v-radio :value="0" label="Todos"/>
                <v-radio
                v-for="(curso,i) in cursos" :key="i+1"
                :label='getNomeCurso(curso)'
                :value="i+1"/>
              </v-radio-group>
            </v-list-item>
            <v-list-item>
              Programa:
            </v-list-item>
            <v-list-item>
              <v-radio-group
              v-model="selectedPrograma_aux"
              row
              center>
                <v-radio :value="0" label="Todos"/>
                <v-radio v-for="(programa,i) in programas" :key="i" :label='programa' :value="i+1"/>
              </v-radio-group>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'FilterWindow',

  methods: {
    ...mapMutations(['setNameSearch', 'setYearRange', 'setSelectedCurso', 'setSelectedPrograma']),

    getNomeCurso(curso) {
      switch (curso) {
        case 'ME':
          return 'Mestrado';
        case 'DO':
          return 'Doutorado';
        case 'DD':
          return 'Doutorado Direto';
        default:
          return 'Inválido';
      }
    },
  },

  computed: {
    ...mapGetters(['nameSearch', 'yearRange', 'selectedCurso', 'selectedPrograma', 'anoInicial', 'anoFinal', 'cursos', 'programas']),

    nameSearch_aux: {
      get() {
        return this.nameSearch;
      },
      set(data) {
        this.setNameSearch(data);
      },
    },
    yearRange_aux: {
      get() {
        return this.yearRange;
      },
      set(data) {
        this.setYearRange(data);
      },
    },
    selectedCurso_aux: {
      get() {
        return this.selectedCurso;
      },
      set(data) {
        this.setSelectedCurso(data);
      },
    },
    selectedPrograma_aux: {
      get() {
        return this.selectedPrograma;
      },
      set(data) {
        this.setSelectedPrograma(data);
      },
    },
  },

};
</script>
