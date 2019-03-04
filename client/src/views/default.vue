<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title><router-link to="/list" class="titleLink">List Event</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/list/add">Add an event</v-btn>
        <v-btn flat to="/list/remove">Delete event</v-btn>
        <v-btn flat @click="exitApp">Exit App</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex sm12>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2019</span>
      <v-spacer></v-spacer>
      <span class="white--text">version 0.1 beta</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  methods: {
    exitApp () {
      this.$cookie.delete('idUser')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.titleLink {
  text-decoration: none;
  color: white
}
</style>
