<template>
  <div>
    <div>
      <v-btn
      class="tool-button primary ma-4"
      elevation="4"
      x-large
      fab
      @click="$emit('clickedSort')">
        <v-icon color="white" type="mdi">mdi-order-alphabetical-ascending</v-icon>
    </v-btn>
    </div>
    <div>
      <v-btn
      class="tool-button primary ml-4"
      elevation="4"
      x-large
      fab
      @click="$emit('clickedFilter')" >
        <v-icon color="white" type="mdi">mdi-filter</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToolButtons',
  emits: ['clickedSort', 'clickedFilter'],
};
</script>

<style scoped>
.tool-button {
  opacity: 15%;
  transition: 5s;
}
.tool-button:hover {
  background-color: blue;
  opacity: 100%;
  transition: 0.5s;
};
</style>
