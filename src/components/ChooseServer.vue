<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Choose Server</h2>
    <v-row justify="start" class="ma-2">
      <v-col
        cols="6"
        md="3"
        lg="2"
        v-for="(server, key) in servers"
        :key="key"
        class="pa-0"
      >
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item
            :id="`server${key}`"
            class="pa-0"
            @click="getThisServer(server.ID, key)"
          >
            <v-list width="100%">
              <v-list-item>
                <v-list-item-content
                  tile
                  class="d-flex justify-center"
                >
                  <v-img
                    :src="require('@/assets/' + server.logo_url)"
                    :alt="server.name"
                    max-height="80"
                    max-width="80"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1 text-center">
                    {{ server.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      servers: [
        { ID: 0, logo_url: "images/server/0.png", name: "Test0" },
        { ID: 1, logo_url: "images/server/1.png", name: "Test1" },
        { ID: 2, logo_url: "images/server/0.png", name: "Test2" },
        { ID: 3, logo_url: "images/server/1.png", name: "Test3" },
        { ID: 4, logo_url: "images/server/0.png", name: "Test4" },
        { ID: 5, logo_url: "images/server/1.png", name: "Test5" },
        { ID: 6, logo_url: "images/server/0.png", name: "Test6" },
        { ID: 7, logo_url: "images/server/1.png", name: "Test7" },
      ],
      activServer: -1,
    };
  },
  methods: {
    getThisServer(id, key) {
      if (this.activServer != -1) {
        document
          .getElementById("server" + this.activServer)
          .classList.remove("border-activ");
      }
      document.getElementById("server" + key).classList.add("border-activ");
      this.$emit("server-id", id);
      this.activServer = key;
    },
  },

  mounted() {
    // axios.get("URL", {
    //   headers: {
    //     "X-Token": localStorage.token,
    //   },
    // }).then((respons) => {
    //     this.servers = respons.data;
    //   })
    //   .catch(function (respons) {
    //     console.log(respons);
    //   });
  },
};
</script>

<style></style>
