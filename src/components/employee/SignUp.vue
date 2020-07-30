<template>
  <v-main>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-6">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Create account for People Counter</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :href="source"
                    icon
                    large
                    v-on="on"
                    to="/SignIn"
                  >
                    <v-icon>mdi-account-key</v-icon>
                  </v-btn>
                </template>
                <span>Log In</span>
              </v-tooltip>
            </v-toolbar>
            <form @submit.prevent="onSignUp">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="mdi-at"
                    type="email"
                    v-model="login"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>

                  <v-text-field
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="confirmPassword"
                    :rules="[cmpPasswords]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Sign Up</v-btn>
              </v-card-actions>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import firebase from 'firebase'
  export default {
    props: {
      source: String,
    },

    data() {
      return {
        login: '',
        password: '',
        confirmPassword: '',
      }
    },

    methods: {
      async onSignUp() {
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(this.login, this.password);
          // signout
          firebase
            .auth()
            .signOut()
            .then(() => {
              this.$router.push("/SignIn");
            });
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    computed: {
      cmpPasswords() {
        return this.password !== this.confirmPassword ?
          'Passwords do not match!' : true;
      }
    }
  }
</script>
