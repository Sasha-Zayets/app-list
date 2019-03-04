<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registration</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" :rules="[rules.required, rules.email]" v-model="email" name="login" label="Email" type="text"></v-text-field>
                <v-text-field id="password" :rules="[rules.required, rules.passwordsValid]" prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/login" color="primary">Login</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="registration" :disabled="!formIsValid" :loading="loading">Registration</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      v-if="showError"
    >
      {{ this.$store.getters.messageError }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    snackbar: true,
    email: '',
    password: '',
    rules: {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
      passwordsValid: value => value.length > 5 || 'Длина пароля должна быть больше 5 символов'
    }
  }),
  computed: {
    formIsValid () {
      if (this.email.length != 0 && this.password.length > 5) {
        return true
      } else {
        return false
      }
    },
    loading () {
      return this.$store.getters.load
    },
    showError () {
      if(this.$store.getters.messageError === null) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    registration () {
      if (this.formIsValid) {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('registrationUser', user)
          .then(data => {
            if (data) {
              this.$router.push('/list')
            }
          })
      }
    }
  }
}
</script>
<style lang="scss">
</style>