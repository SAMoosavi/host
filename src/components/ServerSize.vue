<template>
  <section>
    <h2 class="white--text text-body-1 mb-2">Server Size</h2>
    <v-row justify="start" class="ma-2">
      <v-col
        cols="10"
        md="3"
        lg="2"
        v-for="(size, key) in sizes"
        :key="key"
        class="pa-0"
      >
        <v-card dark class="pa-0 ma-1 grey darken-3 rounded-0">
          <v-list-item
            :id="`size${key}`"
            two-line
            @click="getThisSize(size.ID, key)"
          >
            <v-list-item-content class="text-center">
              <v-list-item-action-text >
              </v-list-item-action-text>
              <v-list-item-action-text class="text-h5">
                {{ size.NVMe }} GB NVMe
              </v-list-item-action-text>
                  <v-list-item-title>
                ${{ size.month }}/month

                  </v-list-item-title>
              <v-list-item-action-text class="text-Caption">
                ${{ size.hour }}/hour
              </v-list-item-action-text>
              <v-list-item-action-text class="my-2">
                <v-divider class="mx-16" color="indigo darken-3"></v-divider>
              </v-list-item-action-text>
              <v-list-item-action-text>
                {{ size.CPU }} CPU
              </v-list-item-action-text>
              <v-list-item-action-text>
                {{ size.Memory }} GB Memory
              </v-list-item-action-text>
              <v-list-item-action-text>
                {{ size.Bandwidth }} TB Bandwidth
              </v-list-item-action-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    sizes: Array,
  },
  data() {
    return {
      activSize: -1,
      thisSize: null,
    };
  },
  methods: {
    getThisSize(id, key) {
      if (this.activSize != -1) {
        document
          .getElementById("size" + this.activSize)
          .classList.remove("border-activ");
      }
      document.getElementById("size" + key).classList.add("border-activ");
      this.activSize = key;
      this.$emit("size-id", id);
    },
  },
};
</script>

<style></style>
