<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project</span>
      <v-btn elevation="0" color="success white--color" class="ml-5" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat class="grey lighten-3">
      <v-app-bar-nav-icon
        class="gret--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text text--darken-2">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Soran</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="0" color="grey lighten-3 grey--text text--darken-1" v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="grey-text">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- end dropdown menu -->

      <!-- signout button -->
      <v-btn text>
        <span class="grey--text text--darken-1">Sign Out</span>
        <v-icon right color="grey">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- end signout button -->

    <!-- navigation menu -->
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-row class="text-center">
        <v-col class="mt-2">
          <v-avatar size="100">
            <v-img src="/avatar-1.png"></v-img>
          </v-avatar>
          <p class="white--text subheading mt-3">The Net Ninja</p>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-4 mb-3">
        <app-popup @projectAdded="snackbar = true"></app-popup>
      </v-row>

      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- end navigation menu -->
  </nav>
</template>

<script>
import PopupVue from './Popup.vue';
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", title: "Dashboard", route: "/" },
        { icon: "mdi-folder", title: "My projects", route: "/projects" },
        { icon: "mdi-account", title: "Team", route: "/team" },
      ],
      snackbar: false
    };
  },
  components: {
    appPopup: PopupVue
  }
};
</script>
