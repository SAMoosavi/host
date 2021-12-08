<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-container>
      <p v-if="hasError" class="red--text text--darken-4">{{ error }}</p>
      <v-row>
        <v-col cols="12"  >
          <v-text-field
            v-model="form.firstname"
            :rules="[rules.required]"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" >
          <v-text-field
            v-model="form.lastname"
            :rules="[rules.required]"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12"  >
          <v-text-field
            v-model="form.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12"  >
          <v-text-field
            v-model="form.phone_number"
            :rules="[rules.required, rules.phone]"
            type="number"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" >
          <v-text-field
            v-model="form.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col cols="12" >
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
          <v-btn class=" d-block" :disabled="!valid" type="submit">
            Submit
          </v-btn>
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
      show2: false,
      form: {
        password: "",
        ConfirmPassword: "",
        firstname: "",
        lastname: "",
        email: "",
        full_name: "",
        phone_number: "",
      },
      okConfirmPassword: "",
      okEmail: "",
      valid: false,

      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        match: () => this.okConfirmPassword || "Confirm password is not match",
        email: () => this.okEmail || "E-mail must be valid",
        phone: (v) => v.length == 11 || "phone number must be valid",
      },

      hasError: false,
      error: "",
    };
  },

  watch: {
    "form.ConfirmPassword": function (v) {
      if (v == this.form.password) {
        this.okConfirmPassword = true;
      } else {
        this.okConfirmPassword = false;
      }
    },
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
      this.form.full_name = this.form.firstname + this.form.lastname;
      axios
        .post("https://odev.abrnoc.com/fastapi/auth", this.form)
        .then(() => {
          sessionStorage.setItem("email", this.form.email);
          this.$router.push("/email-verify");
        })
        .catch(() => {
          this.hasError = true;
          this.error = "Email already exists.";
          this.form.password = "";
          this.form.ConfirmPassword = "";
        });
    },
  },
};
</script>

