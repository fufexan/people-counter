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
              <v-toolbar-title>Sign into People Counter</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :href="source"
                    icon
                    large
                    v-on="on"
                    to="SignUp"
                  >
                    <v-icon>mdi-account-plus</v-icon>
                  </v-btn>
                </template>
                <span>Register</span>
              </v-tooltip>
            </v-toolbar>
            <form @submit.prevent="onSignIn">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="mdi-account"
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
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Sign In</v-btn>
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
      }
    },

    created() {
      firebase.auth().onAuthStateChanged(userAuth => {
        if (userAuth) {
          firebase
            .auth()
            .currentUser.getIdTokenResult()
            .then(tokenResult => {
              console.log(tokenResult.claims);
            })
        }
      });
    },

    methods: {
      async onSignIn() {
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.login, this.password)
            .then( () => {
              this.$router.push('/dashboard');
            })
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
