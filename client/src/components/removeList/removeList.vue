<template>
  <div>
    <div v-if="myPost === null">
      <h1>sorry but you have no events</h1>
      <p>click <router-link to="/list/add">here</router-link> to add an event</p>
    </div>
    <v-list two-line subheader v-else>
      <v-subheader inset>Event</v-subheader>

      <v-list-tile
        v-for="item in myPost"
        :key="item.title"
        avatar
      >
        <v-list-tile-avatar>
          <v-icon color="black">event</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="error" @click="removeEvent(item._id)">delete_forever</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    myPost () {
      let size = Object.keys(this.$store.getters.allPost).length
      if (size === 0) {
        return null
      } else {
        return this.$store.getters.allPost
      }
    }
  },
  methods: {
    removeEvent (id) {
      const idPost = {
        id: id
      }
      this.$store.dispatch('deletePost', idPost)
        .then(message => {
          if (message) {
            const author = {
              author: this.$cookie.get('idUser')
            } 
            this.$store.dispatch('myallPost', author)
          }
        })
    }
  }
}
</script>