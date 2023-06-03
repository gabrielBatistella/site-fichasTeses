<template>
  <v-app style="background-color: #ECEFF1;">
    <header-custom/>
    <v-main class="ma-5">
      <router-view/>
    </v-main>
    <footer-custom/>
  </v-app>
</template>

<script>
import HeaderCustom from './components/Header.vue';
import FooterCustom from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    HeaderCustom,
    FooterCustom,
  },
};
</script>

<style>
.transparent {
  background-color:transparent;
}
</style>
