<template>
  <v-card width="100%" elevation="2" outlined rounded color="blue-grey lighten-4">
    <h1 class="ml-5 mt-3">Filtrar</h1>
    <v-divider class="mx-3"/>
    <div class="mx-8">
      <v-list id="filter-list" class="mt-4 transparent">
        <v-list-item>
          <b>Nome:</b>
        </v-list-item>
        <v-list-item>
          <v-text-field
            v-model="nameSearch_aux"
            placeholder="Insira um nome para buscar..."
            hide-details="auto"
            class="mb-6 pa-0"/>
        </v-list-item>
        <v-list-item>
          <b>Data:</b>
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
              :key="updateKey1"
              :max="anoFinal"
              :min="anoInicial"
              class="ma-0 pa-0"
              single-line
              type="number"
              variant="outlined"
              style="width: 52px"
              density="compact"
              @blur="updateKey1 ^= 1"
              @keydown.enter="updateKey1 ^= 1"/>
          </template>
          <template v-slot:append>
            <v-text-field
              v-model="yearRange_aux[1]"
              :key="updateKey2"
              :max="anoFinal"
              :min="anoInicial"
              class="ma-0 pa-0"
              single-line
              type="number"
              variant="outlined"
              style="width: 52px"
              density="compact"
              @blur="updateKey2 ^= 1"
              @keydown.enter="updateKey2 ^= 1"/>
          </template>
          </v-range-slider>
        </v-list-item>
        <v-list-item>
          <b>Curso:</b>
        </v-list-item>
        <v-list-item>
          <v-radio-group
          v-model="selectedCurso_aux"
          row
          certer
          class="mt-2">
            <v-radio :value="0" label="Todos"/>
            <v-radio
            v-for="(curso,i) in cursos" :key="i+1"
            :label='nameCurso(curso)'
            :value="i+1"/>
          </v-radio-group>
        </v-list-item>
        <v-list-item>
          <b>Programa:</b>
        </v-list-item>
        <v-list-item>
          <v-radio-group
          v-model="selectedPrograma_aux"
          row
          center
          class="mt-2">
            <v-radio :value="0" label="Todos"/>
            <v-radio
            v-for="(programa,i) in programas" :key="i"
            :label='programa'
            :value="i+1"/>
          </v-radio-group>
        </v-list-item>
      </v-list>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'FilterWindow',

  data() {
    return {
      updateKey1: 0,
      updateKey2: 0,
    };
  },

  methods: {
    ...mapMutations(['setNameSearch', 'setYearRange', 'setSelectedCurso', 'setSelectedPrograma']),

    updateText(id, value) {
      document.getElementById(id).value = value;
    },
  },

  computed: {
    ...mapGetters(['nameSearch', 'yearRange', 'selectedCurso', 'selectedPrograma', 'anoInicial', 'anoFinal', 'cursos', 'programas', 'nameCurso']),

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

<style scoped>
#filter-list {
  padding: 0;
  min-height: 0;
}
#filter-list * {
  padding: 0;
  min-height: 0;
}
</style>
