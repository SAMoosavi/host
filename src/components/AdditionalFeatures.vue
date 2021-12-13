<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Additional Features</h2>
    <v-list subheader flat dark class="transparent">
      <v-list-item-group v-model="okFeature" multiple>
        <v-list-item v-for="(feature, key) in features" :key="key">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" color="indigo"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="pa-2"
                >{{ feature.name }}
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon color="indigo" small dark v-bind="attrs" v-on="on">
                      mdi-help-box
                    </v-icon>
                  </template>
                  <span>{{ feature.details }}</span>
                </v-tooltip>
                <span
                  v-if="feature.price"
                  class="indigo darken-1 white--text mx-2 pa-2 rounded-circle text-caption"
                >
                  ${{ feature.price }}
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </section>
</template>

<script>
export default {
  props: {
    features: Array,
  },
  data() {
    return {
      okFeature: [],
    };
  },
  watch: {
    'okFeature': function(v){
      this.$emit("ok-feature",v);
    },
  },
};
</script>

<style></style>
