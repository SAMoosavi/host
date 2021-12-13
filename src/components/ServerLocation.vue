<template>
  <section>
    <h2 class="white--text text-body-1 ma-2">Server Location</h2>

    <v-tabs v-model="tab" background-color="transparent">
      <v-tab
        class="white--text text-body-2"
        v-for="continent in continents"
        :key="continent.id"
      >
        {{ continent.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="transparent">
      <v-tab-item
        v-for="(continent, key) in continents"
        :key="key"
        class="transparent mx-2"
      >
        <!-- If All -->
        <v-row v-if="continent.id == 0" justify="start" class="my-2">
          <v-col
            cols="6"
            md="4"
            lg="3"
            v-for="(location, key) in locations"
            :key="key"
            class="pa-0"
          >
            <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
              <v-list-item
                :class="`location${key}`"
                two-line
                @click="getThisLocation(location.ID, key)"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-1">
                    {{ location.country }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-1">
                    {{ location.city }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content tile>
                  <v-img
                    :src="require('@/assets/' + location.logo_url)"
                    :alt="location.city"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <!-- America -->
        <v-row v-else-if="continent.id == 1" justify="start" class="my-2">
          <v-col
            cols="6"
            md="3"
            lg="2"
            v-for="(location, key) in continents1"
            :key="key"
            class="pa-0"
          >
            <v-card
              v-if="location.continent == continent.id"
              dark
              class="pa-0 ma-1 grey darken-3 rounded-0"
            >
              <v-list-item
                :class="`location${key}`"
                two-line
                @click="getThisLocation(location.ID, key)"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-1">
                    {{ location.country }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-1">
                    {{ location.city }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content tile>
                  <v-img
                    :src="require('@/assets/' + location.logo_url)"
                    :alt="location.city"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <!-- Europe  -->
        <v-row v-else-if="continent.id == 2" justify="start" class="my-2">
          <v-col
            cols="6"
            md="3"
            lg="2"
            v-for="(location, key) in continents2"
            :key="key"
            class="pa-0"
          >
            <v-card
              v-if="location.continent == continent.id"
              dark
              class="pa-0 ma-1 grey darken-3 rounded-0"
            >
              <v-list-item
                :class="`location${key}`"
                two-line
                @click="getThisLocation(location.ID, key)"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-1">
                    {{ location.country }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-1">
                    {{ location.city }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content tile>
                  <v-img
                    :src="require('@/assets/' + location.logo_url)"
                    :alt="location.city"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <!--  Australia   -->
        <v-row v-else-if="continent.id == 3" justify="start" class="my-2">
          <v-col
            cols="6"
            md="3"
            lg="2"
            v-for="(location, key) in continents3"
            :key="key"
            class="pa-0"
          >
            <v-card
              v-if="location.continent == continent.id"
              dark
              class="pa-0 ma-1 grey darken-3 rounded-0"
            >
              <v-list-item
                :class="`location${key}`"
                two-line
                @click="getThisLocation(location.ID, key)"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-1">
                    {{ location.country }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-1">
                    {{ location.city }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content tile>
                  <v-img
                    :src="require('@/assets/' + location.logo_url)"
                    :alt="location.city"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <!--  Asia   -->
        <v-row v-else justify="start" class="my-2">
          <v-col
            cols="6"
            md="3"
            lg="2"
            v-for="(location, key) in continents4"
            :key="key"
            class="pa-0"
          >
            <v-card
              v-if="location.continent == continent.id"
              dark
              class="pa-0 ma-1 grey darken-3 rounded-0"
            >
              <v-list-item
                :class="`location${key}`"
                two-line
                @click="getThisLocation(location.ID, key)"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-h4 mb-1">
                    {{ location.country }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-1">
                    {{ location.city }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content tile>
                  <v-img
                    :src="require('@/assets/' + location.logo_url)"
                    :alt="location.city"
                  >
                  </v-img>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </section>
</template>

<script>
export default {
  props: { locations: Object },
  data() {
    return {
      tab: null,
      continents: [
        {
          name: "All location",
          id: 0,
        },
        {
          name: "America",
          id: 1,
        },
        {
          name: "Europe",
          id: 2,
        },
        {
          name: "Australia",
          id: 3,
        },
        {
          name: "Asia",
          id: 4,
        },
      ],
      activLocation: -1,
      thisLocation: null,
      continents1: null,
      continents2: null,
      continents3: null,
      continents4: null,
    };
  },
  methods: {
    getThisLocation(id, key) {
      if (this.activLocation != -1) {
        let activs = document.getElementsByClassName(
          "location" + this.activLocation
        );
        for (let i = 0; i < activs.length; i++) {
          const element = activs[i];
          element.classList.remove("border-activ");
        }
      }
      let activs = document.getElementsByClassName("location" + key);
      for (let i = 0; i < activs.length; i++) {
        const element = activs[i];
        element.classList.add("border-activ");
      }
      this.activLocation = key;
      this.$emit("location-id", id);
    },
  },
  mounted() {
    for (let i = 0; i < this.$props.locations.length; i++) {
      const element = this.$props.locations[i];
      if (element.continent == 1) {
        this.continents1 = { ...this.continents1, [i]: element };
      } else if (element.continent == 2) {
        this.continents2 = { ...this.continents2, [i]: element };
      } else if (element.continent == 3) {
        this.continents3 = { ...this.continents3, [i]: element };
      } else if (element.continent == 4) {
        this.continents4 = { ...this.continents4, [i]: element };
      }
    }
  },
};
</script>

<style></style>
