<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">SSH Key</h2>
    <v-row justify="start" align="stretch">
      <v-col
        cols="6"
        md="4"
        lg="2"
        class="pa-0"
        v-for="(SshKey, key) in SshKeys"
        :key="key"
      >
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item
            :id="`ssh${key}`"
            two-line
            @click="getThisScript(SshKey.id, key)"
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 mb-1">
                {{ SshKey.name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-img
                :src="require('@/assets/images/SshKey.png')"
                :alt="SshKey.name"
                class="ml-auto"
                max-height="50"
                max-width="50"
              >
              </v-img>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2" class="pa-0">
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item two-line @click="dialog = true" class="border-dashed">
            <v-list-item-content>
              <v-list-item-title class="text-h4 mb-1"> new </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-img
                :src="require('@/assets/images/Plas.png')"
                alt="new"
                class="ml-auto"
                max-height="50"
                max-width="50"
              >
              </v-img>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500px">
      <v-form v-model="valid" @submit.prevent="submit" class="grey darken-3">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                dark
                v-model="form.name"
                label="Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                dark
                clearable
                clear-icon="mdi-close-circle"
                label="SSH Key"
                :value="form.public_key"
                placeholder="ssh-rsa AAAA.... you@example.com"
              ></v-textarea>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-btn :disabled="!valid" type="submit"> Submit </v-btn>
              <v-btn
                @click="dialog = false"
                color="red"
                type="button"
                class="mx-2"
              >
                Close
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-dialog>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: false,
      dialog: false,
      sshKeys: null,
      activSshKey: -1,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: {
        name: null,
        public_key: null,
      },
    };
  },

  methods: {
    getThisScript(id, key) {
      if (this.activSshKey != -1) {
        document
          .getElementById("ssh" + this.activSshKey)
          .classList.remove("border-activ");
      }
      if (this.activSshKey != key) {
        document.getElementById("ssh" + key).classList.add("border-activ");
        this.activSshKey = key;
        this.$emit("ssh-id", id);
      } else {
        this.activSshKey = -1;
        this.$emit("ssh-id", null);
      }
    },

    submit() {
      this.dialog = false;
      /*   Send Form  */
      axios
        .post("https://odev.abrnoc.com/fastapi/ssh-keys", {
          form: this.form,
          headers: {
            "X-Token": localStorage.token,
          },
        })
        .then(() => {
          /*   Get SSH Key  */
          axios
            .get("https://odev.abrnoc.com/fastapi/ssh-keys", {
              headers: {
                "X-Token": localStorage.token,
              },
            })
            .then((respons) => {
              this.sshKeys = respons.data;
            })
            .catch(function (respons) {
              console.log(respons);
            });
        })
        .catch((Response) => {
          console.log(Response);
        });
    },
  },

  mounted() {
    axios
      .get("https://odev.abrnoc.com/fastapi/ssh-keys", {
        headers: {
          "X-Token": localStorage.token,
        },
      })
      .then((respons) => {
        this.sshKeys = respons.data;
      })
      .catch(function (respons) {
        console.log(respons);
      });
  },

  watch: {
    dialog: function (v) {
      if (!v) {
        this.form = {
          name: null,
          public_key: null,
        };
      }
    },
  },
};
</script>

<style>
.border-dashed {
  border: 1px dashed rgb(139, 139, 139);
}
.border-dashed:hover {
  border: 1px solid #1a227ede;
}
</style>
