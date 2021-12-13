<template>
  <v-app>
    <!-- Nav -->
    <Navbar activ="Home" />

    <v-main dark class="grey darken-4 pa-2">
      <v-container>
        <h1 class="white--text text-h3 mb-2">Deploy New Instance</h1>

        <!-- Choose Server -->
        <choose-server @server-id="getThisServer" />
        <v-divider dark class="my-2"></v-divider>

        <!-- Server Location -->
        <server-location
          :locations="locations"
          @location-id="getThisLocation"
        />
        <v-divider dark class="my-2"></v-divider>

        <!-- Server type -->
        <server-type
          :show="show"
          :templates="templates"
          @tmpelate-id="getThisTemplate"
        />
        <v-divider dark class="my-2"></v-divider>

        <!-- Server Size -->
        <server-size :sizes="sizes" @size-id="getThisSize" />
        <v-divider dark class="my-2"></v-divider>

        <!-- Additional Features -->
        <additional-features
          :features="features"
          @ok-feature="getThisAdditionalFeatures"
        />
        <v-divider dark class="my-2"></v-divider>

        <!-- Startup Script -->
        <startup-script @script-id="getThisStartupScript" />
        <v-divider dark class="mb-2 mt-4"></v-divider>

        <!-- SSH Key -->
        <ssh-key @ssh-id="getThisSshKey" />
        <v-divider dark class="mb-2 mt-4"></v-divider>

        <!-- Server Hostname & Label -->
        <server-hostname-and-label
          :j="j"
          @valid="valid"
          @form="getServerHosstnameAndLabel"
        />
        <v-divider dark class="mb-2 mt-4"></v-divider>

        <!-- Deploy Now -->
        <deploy-now
          :summaryMonth="summaryMonth"
          :summaryHour="summaryHour"
          @j="number"
        >
          <v-btn
            :disabled="!ok"
            dark
            color="indigo darken-3"
            x-large
            width="100%"
            @click="deploy"
          >
            Deploy Now
          </v-btn>
        </deploy-now>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import ChooseServer from "../components/ChooseServer.vue";
import ServerLocation from "../components/ServerLocation.vue";
import ServerType from "../components/ServerType.vue";
import ServerSize from "../components/ServerSize.vue";
import AdditionalFeatures from "../components/AdditionalFeatures.vue";
import StartupScript from "../components/StartupScript.vue";
import SshKey from "../components/SshKey.vue";
import ServerHostnameAndLabel from "../components/ServerHostnameAndLabel.vue";
import DeployNow from "../components/DeployNow.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    ChooseServer,
    ServerLocation,
    ServerType,
    ServerSize,
    AdditionalFeatures,
    StartupScript,
    SshKey,
    ServerHostnameAndLabel,
    DeployNow,
  },
  data() {
    return {
      //Locations
      locations: [
        {
          id: 0,
          continent: 4,
          country: "Iran",
          city: "Yazd",
          logo_url: "images/locations/Iran.png",
        },
        {
          id: 1,
          continent: 4,
          country: "Iran",
          city: "Tehran",
          logo_url: "images/locations/Iran.png",
        },
        {
          id: 2,
          continent: 1,
          country: "United States",
          city: "New York",
          logo_url: "images/locations/UnitedStates.png",
        },
        {
          id: 3,
          continent: 1,
          country: "United States",
          city: "new Jersey",
          logo_url: "images/locations/UnitedStates.png",
        },
      ],

      //Templates
      templates: null,
      show: null,

      //Size
      sizes: [
        {
          ID: 0,
          NVMe: 32,
          month: 10,
          hour: 0.005,
          CPU: 1,
          Memory: 4,
          Bandwidth: 1,
        },
        {
          ID: 1,
          NVMe: 32,
          month: 10,
          hour: 0.005,
          CPU: 1,
          Memory: 4,
          Bandwidth: 1,
        },
        {
          ID: 2,
          NVMe: 32,
          month: 10,
          hour: 0.005,
          CPU: 1,
          Memory: 4,
          Bandwidth: 1,
        },
      ],

      //AdditionalFeatures
      features: [
        { name: "test0", details: "test0", price: null },
        { name: "test1", details: "test1", price: 1 },
        { name: "test2", details: "test2", price: null },
        { name: "test3", details: "test3", price: 0.8 },
      ],

      //  Server Hostname & Label
      j: 1,

      //Deploy Now
      summaryMonth: null,
      summaryHour: null,
      ok: false,

      //Form
      form: {
        server: null,
        location: null,
        tmpelate: null,
        size: null,
        additionalFeatures: null,
        startupScript: null,
        SshKey: null,
        valid: false,
        serverHosstnameAndLabel: null,
      },
    };
  },
  methods: {
    getThisServer(serverId) {
      this.form.server = serverId;
      if (
        this.form.server != null &&
        this.form.location != null &&
        this.form.tmpelate != null &&
        this.form.size != null &&
        this.form.valid
      ) {
        this.ok = true;
      } else {
        this.ok = false;
      }
      // axios
      //   .get('Url', {
      //     headers: {
      //       "X-Token": localStorage.token,
      //     },
      //   })
      //   .then((respons) => {
      //     console.log(respons);
      //   })
      //   .catch(function (respons) {
      //     console.log(respons);
      //   });
    },

    getThisLocation(locationId) {
      this.form.location = locationId;
      if (
        this.form.server != null &&
        this.form.location != null &&
        this.form.tmpelate != null &&
        this.form.size != null &&
        this.form.valid
      ) {
        this.ok = true;
      } else {
        this.ok = false;
      }
      // axios
      //   .get('Url', {
      //     headers: {
      //       "X-Token": localStorage.token,
      //     },
      //   })
      //   .then((respons) => {
      //     console.log(respons);
      //   })
      //   .catch(function (respons) {
      //     console.log(respons);
      //   });
    },

    getThisTemplate(tmpelateId) {
      this.form.tmpelate = tmpelateId;
      if (
        this.form.server != null &&
        this.form.location != null &&
        this.form.tmpelate != null &&
        this.form.size != null &&
        this.form.valid
      ) {
        this.ok = true;
      } else {
        this.ok = false;
      }
      // axios
      //   .get("URL", {
      //     headers: {
      //       "X-Token": localStorage.token,
      //     },
      //   })
      //   .then((respons) => {
      //    console.log(respons);
      //   })
      //   .catch(function (respons) {
      //     console.log(respons);
      //   });
    },

    getThisSize(sizeId) {
      this.form.size = sizeId;
      if (
        this.form.server != null &&
        this.form.location != null &&
        this.form.tmpelate != null &&
        this.form.size != null &&
        this.form.valid
      ) {
        this.ok = true;
      } else {
        this.ok = false;
      }
    },

    getThisAdditionalFeatures(additionalFeatures) {
      this.form.additionalFeatures = additionalFeatures;
    },

    getThisStartupScript(startupScriptId) {
      this.form.startupScript = startupScriptId;
    },

    getThisSshKey(SshKeyId) {
      this.form.SshKey = SshKeyId;
    },

    valid(valid) {
      this.form.valid = valid;
      if (
        this.form.server != null &&
        this.form.location != null &&
        this.form.tmpelate != null &&
        this.form.size != null &&
        this.form.valid
      ) {
        this.ok = true;
      } else {
        this.ok = false;
      }
    },

    getServerHosstnameAndLabel(serverHosstnameAndLabel) {
      this.form.serverHosstnameAndLabel = serverHosstnameAndLabel;
    },

    number(j) {
      this.j = j;
    },

    deploy() {
      // axios
      //   .post("Url", {
      //     form: this.form,
      //     headers: {
      //       "X-Token": localStorage.token,
      //     },
      //   })
      //   .then((respons) => {
      //     console.log(respons);
      //   })
      //   .catch((respons) => {
      //     console.log(respons);
      //   });
    },
  },

  mounted() {
    axios
      .get("https://odev.abrnoc.com/fastapi/templates", {
        headers: {
          "X-Token": localStorage.token,
        },
      })
      .then((respons) => {
        this.templates = respons.data;

        for (let i = 0; i < this.templates.length; i++) {
          this.show = { ...this.show, [i]: false };
        }
      })
      .catch(function (respons) {
        console.log(respons);
      });
  },
};
</script>
