
    <template>
  <v-row class="my-auto" justify="center" align="center">
    <v-col md="6">
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
            ورود
            <v-icon>mdi-login</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            ثبت نام
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
            <v-card flat>
              <v-card-text>
                <div v-if="i == 1"><login /></div>
                <div v-if="i != 1"><register /><login /></div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>
    

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
export default {
  components: { Register, Login },

  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
</style>