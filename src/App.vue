<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary class="">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>لورم ایپسوم</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
      <div>
        <v-app-bar color="deep-purple accent-4" dense dark>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Page title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

        </v-app-bar>
      </div>
<v-container >
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      drawer: false,
      items: [
        { title: "خانه", icon: "mdi-view-dashboard", patch: "/" },
        { title: "ورود/ثبت نام", icon: "mdi-forum", patch: "/login-register" },
      ],
    };
  },
};
</script>
