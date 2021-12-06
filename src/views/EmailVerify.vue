<template>
  <v-app>
    <v-row justify="center" align="center" class="grey lighten-2">
      <v-col cols="12" md="5" lg="3">
        <v-card elevation="8" tile>
          <v-card-title class="deep-purple accent-4 white--text"
            >Verify Your Email Address</v-card-title
          >
          <v-card-text class="black--text mt-2 mb-0 py-0"
            >Before proceeding, please check your email for a verification
            link.</v-card-text
          >
          <v-card-text class="my-0 py-0"
            >If you did not receive the email click here to request
            another</v-card-text
          >
          <v-card-text v-if="sended" class="green--text"
            >{{message}}</v-card-text
          >
          <v-card-actions>
            <v-btn @click="send"  >
              send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sended: false,
      message:"",
      form: {
        email: sessionStorage.email,
      },
    };
  },
  methods: {
    send() {
      axios
        .post(
          "https://odev.abrnoc.com/fastapi/auth/resend-email-verification-token",
          this.form
        )
        .then( (respons) => {
          this.sended = true;
          this.message = respons.data.message;
        })
        .catch ((respons) => {
          console.log(respons);
        });
    },
  },
};
</script>

<style>
</style>