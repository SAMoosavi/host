<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Server Hostname & Label</h2>
    <v-form v-model="valid">
      <v-row justify="start" align="center" class="mb-1">
        <v-col cols="12" v-for="(form, key) in forms" :key="key">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                dark
                v-model="form.hostname"
                label="Hostname "
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                dark
                v-model="form.label"
                label="Label"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>

<script>
export default {
  props: { j: Number },
  data() {
    return {
      forms: [],
      rules: {
        required: (value) => !!value || "Required.",
      },
      valid: false,
    };
  },
  watch: {
    j: function (v) {
      this.forms = [];
      for (let i = 0; i < v; i++) {
        this.forms = [...this.forms, { hostname: null, label: null }];
      }
    },
    valid: function (v) {
      this.$emit("valid", v);
    },
    forms: function (v) {
      this.$emit("form", v);
    },
  },
  mounted() {
    for (let i = 0; i < this.$props.j; i++) {
      this.forms = [...this.forms, { hostname: null, label: null }];
    }
  },
};
</script>

<style></style>
