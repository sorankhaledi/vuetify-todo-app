<template  >
  <v-app  >
    <app-navbar></app-navbar>
    <v-main class=" mx-4 mb-4" >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavabrVue from './components/Navabr.vue';

export default {
  components: {
    appNavbar: NavabrVue,
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
#app {
  background-color: #eeeeee;
}

</style>
