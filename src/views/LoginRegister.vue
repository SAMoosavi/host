
    <template>
  <v-app>
    <v-row justify="center" align="center" class="grey lighten-2">
      <v-col cols="12" md="8" lg="6">
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              login
              <v-icon>mdi-login</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              register
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
              <v-card flat>
                <v-card-text>
                  <div v-if="i == 1"><login /></div>
                  <div v-if="i == 2"><register /></div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
    

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
export default {
  components: { Register, Login },

  data() {
    return {
      tab: null,
    };
  },
};
</script>
