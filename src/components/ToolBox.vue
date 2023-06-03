<template>
  <div style="display: inline-flex">
    <Transition name="anime">
      <div v-if="showToolbox" class="toolbox-content pl-3 py-2 scroll">
        <sort-window class="mb-3"/>
        <filter-window class="mb-3"/>
      </div>
    </Transition>
    <div class="ml-2 toolbox-content">
      <v-btn
      icon
      style="margin: 0px; padding-bottom:8px;"
      @click="showToolbox = !showToolbox">
        <v-icon color="blue darken-4" style="transform: scale(1.5);">
          {{ (showToolbox) ? 'mdi-menu-open' : 'mdi-menu'}}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import SortWindow from './SortWindow.vue';
import FilterWindow from './FilterWindow.vue';

export default {
  name: 'ToolBox',

  data() {
    return {
      showToolbox: false,
    };
  },

  components: {
    SortWindow,
    FilterWindow,
  },
};
</script>

<style scoped>
.toolbox-content {
  position: sticky;
  top: 14vh;
  max-width: 400px;
  height: 90vh;
}
.toolbox-content * {
  display: inline-block;
}
.scroll {
  overflow-y: auto;
}
.anime-enter-active {
  animation: anime-in 0.3s linear;
}
.anime-leave-active {
  animation: anime-in 0.3s linear reverse;
}
@keyframes anime-in {
  0% {
    opacity: 0;
    width: 0;
    transform: translateX(-500px)
  }
  100% {
    opacity: 100%;
    width: 500px;
    transform: translateX(0px)
  }
}
</style>
