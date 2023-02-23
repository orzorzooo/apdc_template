import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "windi.css";
import AOS from "aos";
import "aos/dist/aos.css";
require("aframe");
Vue.config.productionTip = false;

import Aframe from "aframe";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

// Vue.config.ignoredElements = [
//   "a-scene",
//   "a-asset-item",
//   "a-image",
//   "a-curvedimage",
//   "a-assets",
//   "a-text",
//   "a-plane",
//   "a-cylinder",
//   "a-rounded",
//   "a-light",
//   "a-entity",
//   "a-camera",
//   "a-box",
//   "a-sky",
//   "a-cursor",
//   "a-gltf-model",
//   "a-triangle",
//   "a-cubemap",
// ];

new Vue({
  created() {
    AOS.init({});
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
