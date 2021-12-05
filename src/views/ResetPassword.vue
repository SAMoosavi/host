<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card elevation="8" tile>
          <v-form v-model="valid" @submit.prevent="submit">
            <v-container>
              <v-row class="px-4 pt-4">
                <p v-if="hasError" class="red--text text--darken-4">
                  {{ error }}
                  <br/>
                  <router-link to="/forgot-password" class="text-decoration-underline grey--text">forgot password page!</router-link>
                </p>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.new_password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.ConfirmPassword"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.match]"
                    :type="show2 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirm password"
                    hint="Confirm password is match"
                    @click:append="show2 = !show2"
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
      show1: false,
      show2: false,
      token: this.$router.history.current.query.token,
      form: {
        new_password: "",
        ConfirmPassword: "",
      },
      valid: false,
      okConfirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        match: () => this.okConfirmPassword || "Confirm password is not match",
      },
      hasError: false,
      error: "",
    };
  },
  watch: {
    "form.ConfirmPassword": function (v) {
      if (v == this.form.new_password) {
        this.okConfirmPassword = true;
      } else {
        this.okConfirmPassword = false;
      }
    },
  },
  methods: {
    submit() {
      axios
        .post(
          `https://odev.abrnoc.com/fastapi/auth/confirm-reset-password?${this.token}`,
          this.form
        )
        .then(() => {
          this.$router.push({ name: "loginRegister" });
        })
        .catch(() => {
          this.hasError = true;
          this.form.new_password = "";
          this.form.ConfirmPassword = "";
          this.error = "We can not change the password. Please return to the Forgot Password page";
        });
    },
  },
};
</script>