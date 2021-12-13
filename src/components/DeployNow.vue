<template>
  <v-card flat dark class="transparent">
    <v-row justify="start" align="center">
      <v-col cols="12" md="3">
        <v-row justify="start" align="start">
          <v-col>
            <v-list color="transparent">
              <v-list-item class="pa-0"
                ><p class="s1 ma-0">Servers Qty</p></v-list-item
              >
              <v-list-item class="pa-0">
                <v-btn-toggle>
                  <v-btn small v-if="j > 1" @click="minus"> - </v-btn>
                  <v-btn small v-else disabled> - </v-btn>
                  <v-btn small disabled>
                    {{ j }}
                  </v-btn>
                  <v-btn small @click="sum"> + </v-btn>
                </v-btn-toggle>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="px-0">
            <v-list color="transparent">
              <v-list-item class="pa-0"
                ><p class="s1 ma-0">Summary</p></v-list-item
              >
              <v-list-item class="pa-0" dark>
                <p class="indigo--text text-lighten-4 s3">
                  ${{ parseFloat(summaryMonth).toFixed(2)
                  }}<span class="s2">/month </span>
                </p>
                <p class="s1">
                  (${{ parseFloat(summaryHour).toFixed(5) }}/hour)
                </p>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <slot></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    summaryMonth: Number,
    summaryHour: Number,
  },
  data() {
    return {
      j: 1,
    };
  },
  methods: {
    minus() {
      if (this.j > 1) {
        this.j--;
      }
    },
    sum() {
      this.j++;
    },
  },
  watch: {
    j: function (v) {
      this.$emit("j", v);
    },
    ok: function (v) {
      console.log(v);
    },
  },
};
</script>

<style>
.s1 {
  font-size: x-small;
}
.s2 {
  font-size: x-large;
}
.s3 {
  font-size: xx-large;
}
</style>
