<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Startup Script</h2>
    <v-row justify="start" align="stretch">
      <v-col
        cols="6"
        md="4"
        lg="2"
        class="pa-0"
        v-for="(script, key) in scripts"
        :key="key"
      >
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item
            :id="`script${key}`"
            two-line
            @click="getThisScript(script.ID, key)"
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 mb-1">
                {{ script.name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-img
                :src="require('@/assets/images/script.png')"
                :alt="script.name"
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
              <v-select
                dark
                v-model="form.type"
                :rules="[rules.required]"
                :items="items"
                label="Type"
                dense
                color="gray"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-textarea
                dark
                clearable
                clear-icon="mdi-close-circle"
                label="Script"
                :value="form.script"
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
// import axios from "axios";
export default {
  data() {
    return {
      valid: false,
      dialog: false,
      scripts: [
        {
          ID: 0,
          name: "test0",
        },
      ],
      activScript: -1,
      rules: {
        required: (value) => !!value || "Required.",
      },
      script: `#!/bin/sh # NOTE: This is an example that sets up SSH authorization. To use it, you'd need to replace "ssh-rsa AA... youremail@example.com" with your SSH public.# You can replace this entire script with anything you'd like, there is no need to keep it mkdir -p /root/.ssh chmod 700 /root/.ssh echo ssh-rsa AA... youremail@example.com > /root/.ssh/authorized_keys chmod 600 /root/.ssh/authorized_keys`,
      form: {
        name: null,
        type: null,
        script: this.script,
      },
      items: ["Boot", "PXE"],
    };
  },

  methods: {
    getThisScript(id, key) {
      if (this.activScript != -1) {
        document
          .getElementById("script" + this.activScript)
          .classList.remove("border-activ");
      }
      if (this.activScript != key) {
        document.getElementById("script" + key).classList.add("border-activ");
        this.activScript = key;
        this.$emit("script-id", id);
      } else {
        this.activScript = -1;
        this.$emit("script-id", null);
      }
    },

    submit() {
      this.dialog = false;
      /*   Send Form  */
      //   axios
      //     .post("url")
      //     .then((Response) => {
      //       console.log(Response);
      //     })
      //     .catch((Response) => {
      //       console.log(Response);
      //     });
      
      /*   Get Startup Script  */
      //   axios
      //   .get("URL", {
      //     headers: {
      //       "X-Token": localStorage.token,
      //     },
      //   })
      //   .then((respons) => {
      //     this.scripts = respons.data;
      //   })
      //   .catch(function (respons) {
      //     console.log(respons);
      //   });
    },
  },

  mounted() {
    // axios
    //   .get("URL", {
    //     headers: {
    //       "X-Token": localStorage.token,
    //     },
    //   })
    //   .then((respons) => {
    //     this.scripts = respons.data;
    //   })
    //   .catch(function (respons) {
    //     console.log(respons);
    //   });
  },

  watch: {
    dialog: function (v) {
      if (!v) {
        this.form = {
          name: null,
          type: null,
          script: this.script,
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
  border: 2px solid #1a227ede;
}
</style>
