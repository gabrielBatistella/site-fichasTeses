<template>
  <span v-if="loading">
    <v-row align="center"
    justify="center"
    class="text-center">
      <span>
        <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        class="text-center"
        indeterminate />
        <div class="pa-6 text-center">Carregando ficheiros...</div>
      </span>
    </v-row>
  </span>
  <span v-else>
    <v-row>
      <div id="toolbox">
        <v-expand-x-transition>
          <div v-show="showToolbox">
            <sort-window class="mb-4"/>
            <filter-window/>
          </div>
        </v-expand-x-transition>
        <v-btn
        class="ml-2"
        height="100%"
        dark
        color="transparent"
        x-small
        @click="showToolbox = !showToolbox">
          <v-icon color="black">
            {{ (showToolbox) ? 'mdi-menu-left' : 'mdi-menu-right'}}
          </v-icon>
        </v-btn>
      </div>
      <div class="ml-4" style="width: auto;">
        <entry-group v-for="group in entriesToShow" :key='group.title'
        :entries='group.entries'
        :title='group.title'
        class="mb-3"
        style="display: block;"/>
      </div>
    </v-row>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import EntryGroup from '../components/EntryGroup.vue';
import SortWindow from '../components/SortWindow.vue';
import FilterWindow from '../components/FilterWindow.vue';

export default {
  name: 'home-view',

  data() {
    return {
      showSort: false,
      showFilter: false,
      showToolbox: false,
    };
  },

  components: {
    EntryGroup,
    SortWindow,
    FilterWindow,
  },

  methods: {
    ...mapActions(['loadDataset']),
  },

  computed: {
    ...mapGetters(['loading', 'entriesToShow']),
  },

  mounted() {
    this.loadDataset();
  },
};

</script>

<style scoped>
#tool-column {
  padding-top: 10px;
  height: 100%;
  background: gray;
}
#tool-column * {
  margin: 10px;
}
#toolbox {
  max-width: 400px;
  display: inline-flex;
  height: 100vh;
}
#toolbox * {
  display: inline-block;
}
</style>
