<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-container>
      <p v-if="hasError" class="red--text text--darken-4">{{ error }}</p>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required]"
            name="input-10-1"
            label="password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex align-center" >
          <v-btn class="mx-4 d-block" :disabled="!valid" type="submit">
            submit
          </v-btn>
          
          <router-link to="/forgot-password" class="text-decoration-underline grey--text">forgot your password!</router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  comments: {
    axios,
  },
  data() {
    return {
      show1: false,
      form: {
        password: "",
        email: "",
      },
      valid: false,

      rules: {
        required: (value) => !!value || "Required.",
      },

      hasError: false,
      error: "",
    };
  },

  methods: {
    submit() {
      axios
        .post("https://odev.abrnoc.com/fastapi/auth/login", this.form)
        .then((respons) => {
          localStorage.setItem("token",respons.data.token);
          this.$router.push("/");
        })
        .catch((respons) => {
          this.hasError = true;
          this.error = respons.data.message;
        });
    },
  },
};
</script>

