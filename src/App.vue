<template>
  <v-app class="align-center">
    <v-app-bar
      app
      color="blue"
      dark
      height=80px>
      <img
        alt="ICMC Logo"
        src ="/icmc_logo.png"
        transition="scale-transition"
        style="height:100%; padding-top:8px; padding-bottom:5px;"
        left/>
      <v-spacer></v-spacer>
      <router-link to="/" class="router-link"> Pesquisas </router-link>|
      <router-link to="/about" class="router-link"> Sobre </router-link>
    </v-app-bar>
    <v-main class="ma-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.router-link {
  color: white;
  margin: 5px;
}
</style>
