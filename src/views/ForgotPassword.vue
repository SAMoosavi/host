<template>
  <v-app>
    <v-main dark class="grey darken-4">
      <v-row justify="center" align="center" class="bg-image-auth">
        <v-col cols="12" md="5" lg="3">
          <v-card elevation="8" tile>
            <v-card-title class="indigo darken-3 text-uppercase white--text">
              forgot your password
            </v-card-title>
            <v-card-text class="black--text mt-2 mb-0 py-0">
              Please enter your email to recover your password
            </v-card-text>

            <v-form v-model="valid" @submit.prevent="submit">
              <v-container>
                <v-row class="px-4 pt-4">
                  <p v-if="hasError" class="red--text text--darken-4">
                    {{ error }}
                  </p>
                  <p v-if="hasSucsses" class="green--text text--darken-4">
                    {{ sucsses }}
                  </p>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.email"
                      label="E-mail"
                      :rules="[rules.required, rules.email]"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn class="d-block" :disabled="!valid" type="submit">
                      Send
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
      },
      okEmail: "",
      valid: false,

      rules: {
        required: (value) => !!value || "Required.",
        email: () => this.okEmail || "E-mail must be valid",
      },
      hasError: false,
      error: "",
      hasSucsses: false,
      sucsses: "",
    };
  },
  watch: {
    "form.email": function (v) {
      if (!/.+@.+/.test(v) || !/.+\..+/.test(v)) {
        this.okEmail = false;
      } else {
        this.okEmail = true;
      }
    },
  },
  methods: {
    submit() {
      axios
        .post("https://odev.abrnoc.com/fastapi/auth/forgot-password", this.form)
        .then((respons) => {
          this.hasSucsses = true;
          this.sucsses = respons.data.message;
        })
        .catch((respons) => {
          this.hasError = true;
          this.error = respons.data.message;
        });
    },
  },
};
</script>

<style>
.bg-image-auth {
  background: url(../assets/images/background/auth.png) center center/cover;
}
</style>
