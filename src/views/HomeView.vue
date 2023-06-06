<template>
  <span v-if="loading">
    <v-layout
    max-width="100vw"
    fill-height>
      <v-row align="center"
      justify="center"
      class="text-center">
        <loading-animation message="Carregando ficheiros..."/>
      </v-row>
    </v-layout>
  </span>
  <span v-else>
    <v-row>
      <tool-box/>
      <div class="ml-4" style="flex: 1;">
        <span v-if="entriesToShow.length === 0">
          <v-row
          class="mt-5 text-h4 justify-center">
            <span style="color:#90A4AE;">Sem resultados.</span>
          </v-row>
        </span>
        <span v-else>
          <entry-group
          v-for="group in entriesToShow"
          :key='group.title'
          :entries='group.entries'
          :title='(cursos.includes(group.title)) ? nameCurso(group.title) : group.title'
          class="mb-3"
          style="display: block;"/>
        </span>
      </div>
    </v-row>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LoadingAnimation from '../components/LoadingAnimation.vue';
import EntryGroup from '../components/EntryGroup.vue';
import ToolBox from '../components/ToolBox.vue';

export default {
  name: 'HomeView',

  components: {
    LoadingAnimation,
    EntryGroup,
    ToolBox,
  },

  methods: {
    ...mapActions(['loadDataset']),
  },

  computed: {
    ...mapGetters(['loading', 'entriesToShow', 'cursos', 'nameCurso']),
  },

  mounted() {
    this.loadDataset();
  },
};
</script>
