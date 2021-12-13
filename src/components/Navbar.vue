<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> menu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-log-out</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> Log out </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-app-bar color="indigo darken-3" dense dark>
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <span class="red--text"> Project </span> Hosting</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <div class="d-md-flex d-none flex-row-reverse">
          <v-btn plain text @click="logout"> Log out </v-btn>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      drawer: false,
    };
  },
  methods: {
    logout() {
      axios
        .post("https://odev.abrnoc.com/fastapi/auth/logout", {
          headers: {
            "X-Token": localStorage.token,
          },
        })
        .then(() => {
          localStorage.setItem("token", null);
          this.$router.push("/login-register");
        })
        .catch(function (respons) {
          console.log(respons);
        });
    },
  },
};
</script>

<style></style>
