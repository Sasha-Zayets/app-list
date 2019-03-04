<template>
  <div>
     <div v-if="myPost === null">
      <h1>sorry but you have no events</h1>
      <p>click <router-link to="/list/add">here</router-link> to add an event</p>
    </div> 
    <v-list
          subheader
          two-line
          v-else
        >
      <v-subheader>Hangout notifications</v-subheader>

      <v-list-tile v-for="(item, index) in myPost" :key="index">
        <v-list-tile-action>
          <v-checkbox v-model="item.active"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.text }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  mounted () {
    const author = {
      author: this.$cookie.get('idUser')
    } 
    this.$store.dispatch('myallPost', author)
  },
  computed: {
    myPost () {
      let size = Object.keys(this.$store.getters.allPost).length
      if (size === 0) {
        return null
      } else {
        return this.$store.getters.allPost
      }
    }
  }
}
</script>
