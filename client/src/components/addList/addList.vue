<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Title"
      required
    ></v-text-field>

   <v-textarea
      v-model="text"
      :rules="nameRules"
      label="Text Event"
    ></v-textarea>
  
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="date"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="date"
        label="Picker in menu"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
    <v-btn
      :disabled="!valid"
      color="success"
      @click="addEvent"
      :loading="load"
    >
      Add Event
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    text: '',
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
  computed: {
    load () {
      return this.$store.getters.load
    }
  },
  methods: {
    addEvent () {
      if (this.$refs.form.validate()) {
        this.snackbar = true

        const newPost = {
          title: this.name,
          text: this.text,
          date: this.date,
          active: false,
          author: this.$cookie.get('idUser')
        }
        this.$store.dispatch('addPost', newPost)
          .then(data => {
            if (data) {
              this.$router.push('/list')
            }
          })
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>