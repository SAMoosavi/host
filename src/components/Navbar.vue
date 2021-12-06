<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> menu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="sendTo(item.name)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <span class="red--text"> Project </span> Hosting</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <div class="d-md-flex d-none flex-row-reverse ">
          <div
            v-for="item in items"
            :key="item.title"
            @click="sendTo(item.name)"
          >
            <v-btn plain text>
              {{ item.title }}
            </v-btn>
          </div>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", name: "Home" },
        // { title: "other", icon: "mdi-forum", name: "" },
      ],
    };
  },
  methods: {
    sendTo(url) {
      if(url != "Home") this.$router.push({ name: url });
    },
  },
};
</script>

<style>
</style>