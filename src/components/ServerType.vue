<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Server Type</h2>
    <v-row justify="start" align="center" class="mb-1">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        v-for="(template, key1) in templates"
        :key="key1"
        class="pa-0"
      >
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item
            :id="`template${key1}`"
            two-line
            @click="
              template.versions.length == 1
                ? getThisTemplate(template.versions[0].ID, key1)
                : (show[key1] = !show[key1])
            "
          >
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ template.os_name }}
              </v-list-item-title>
              <v-list-item-action-text v-if="template.versions.length == 1">
                {{ template.versions[0].ARCH }}
              </v-list-item-action-text>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img
                :src="require('@/assets/' + template.logo_url)"
                :alt="template.os_name"
              >
              </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-expand-transition v-if="template.versions.length > 1">
            <div v-show="show[key1]">
              <v-btn
                v-for="(version, key2) in template.versions"
                :key="key2"
                @click="getThisTemplate(version.ID, key1)"
                text
                block
              >
                {{ version.ARCH }}
              </v-btn>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    templates: Object,
    show: Object,
  },
  data() {
    return {
      activTemplate: -1,
      thisTemplate: null,
    };
  },
  methods: {
    getThisTemplate(id, key) {
      this.$props.show[key] = false;

      if (this.activTemplate != -1) {
        document
          .getElementById("template" + this.activTemplate)
          .classList.remove("border-activ");
      }
      document.getElementById("template" + key).classList.add("border-activ");
      this.activTemplate = key;
      this.$emit("tmpelate-id", id);
    },
  },
};
</script>

<style></style>
