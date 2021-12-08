<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-container>
      <p v-if="hasError" class="red--text text--darken-4">{{ error }}</p>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required]"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex align-center">
          <v-btn class="d-block" :disabled="!valid" type="submit">
            Submit
          </v-btn>

          <router-link
            to="/forgot-password"
            class="text-decoration-underline grey--text ml-4"
            >Forgot your password!</router-link
          >
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
      okEmail: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: () => this.okEmail || "E-mail must be valid",
      },

      hasError: false,
      error: "",
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
        .post("https://odev.abrnoc.com/fastapi/auth/login", this.form)
        .then((respons) => {
          localStorage.setItem("token", respons.data.token);
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

