<template>
  <v-app-bar
  app
  color="blue darken-4"
  height="100px"
  src="/icmc.jpg">
    <template v-slot:img="{ props }">
      <v-img
      eager
      alt="ICMC Picture"
      v-bind="props"
      gradient="to top, rgba(23,108,206,.6), rgba(13,71,161,.95)"/>
    </template>
    <img
    alt="ICMC Logo"
    src="/icmc_logo.png"
    style="height:90%; padding-left:10px; padding-top:8px; padding-bottom:5px;"
    left/>
    <v-spacer/>
    <router-link to="/" class="router-link"> Pesquisas </router-link>
    <span style="color:white"> | </span>
    <router-link to="/about" class="router-link"> Sobre </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderCustom',
};
</script>

<style scoped>
.router-link {
  color: white;
  margin: 5px;
}
</style>
