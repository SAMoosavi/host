<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card elevation="8" tile>
          <v-card-title class="deep-purple accent-4 white--text">
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
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-card-actions>
                    <v-btn
                      class="mx-4 d-block"
                      :disabled="!valid"
                      type="submit"
                    >
                      send
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
      },
      valid: false,

      rules: {
        required: (value) => !!value || "Required.",
      },
      hasError: false,
      error: "",
      hasSucsses: false,
      sucsses: "",
    };
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
</style>