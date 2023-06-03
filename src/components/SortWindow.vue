<template>
  <v-card width="100%" elevation="2" outlined rounded color="blue-grey lighten-4">
    <h1 class="ml-5 mt-3">Ordenar</h1>
    <v-divider class="mx-3"/>
    <div id="select-box" class="ml-8 mb-4">
      <v-select
      v-model="ordering_aux"
      :items="sorts"
      :hint="orderDescription"
      item-text="texto"
      item-value="index"
      persistent-hint
      style="width: 260px"/>
      <v-btn-toggle
      v-model="inverted_aux"
      class="transparent"
      style="transform: rotate(90deg) scale(0.8, 1);"
      mandatory
      rounded>
        <v-btn icon x-small color="blue" style="padding-bottom: 20px;">
          <v-icon style="transform: scale(1.25, 1);">mdi-menu-left</v-icon>
        </v-btn>
        <v-btn icon x-small color="blue" style="padding-bottom: 20px;">
          <v-icon style="transform: scale(1.25, 1);">mdi-menu-right</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SortWindow',

  data() {
    return {
      sorts: [
        { texto: 'por Nome', index: 0 },
        { texto: 'por Sobrenome', index: 1 },
        { texto: 'por Data', index: 2 },
        { texto: 'por Curso', index: 3 },
        { texto: 'por Programa', index: 4 },
      ],
    };
  },

  methods: {
    ...mapMutations(['setOrdering', 'setInverted']),
  },

  computed: {
    ...mapGetters(['ordering', 'inverted', 'anoInicial', 'anoFinal']),

    ordering_aux: {
      get() {
        return this.ordering;
      },
      set(data) {
        this.setOrdering(data);
      },
    },
    inverted_aux: {
      get() {
        return this.inverted;
      },
      set(data) {
        this.setInverted(data);
      },
    },

    orderDescription() {
      let description = '';
      if (this.ordering === 2) {
        description += this.inverted ? `${this.anoFinal} - ${this.anoInicial}` : `${this.anoInicial} - ${this.anoFinal}`;
      } else {
        description += this.inverted ? 'Z - A' : 'A - Z';
      }
      description += this.sorts[this.ordering].texto.substring(3);
      return description;
    },

  },
};
</script>

<style scoped>
#select-box {
  display: inline-block;
}
#select-box * {
  display: inline-block;
}
</style>
