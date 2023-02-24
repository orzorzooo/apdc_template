<template>
  <div>
    <div
      class="absolute inset-0 h-screen w-full flex justify-center items-center bg-gray-800 flex-col"
    >
      <Title :title="`Augmented Reality`" :text="mindar_project.name"></Title>
      <div>
        <h1 class="text-2xl font-bold text-white mb-12">AR擴增實境導覽系統</h1>
      </div>
      <v-btn
        x-large
        @click="
          start = true;
          render();
        "
        >啟動相機</v-btn
      >
    </div>
    <div class="absolute inset-0 z-0" v-if="start">
      <a-scene
        :mindar-image="mindar_mind_file"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        crossorigin
      >
        <a-assets>
          <img
            id="card"
            src="https://apdc.api.apdc.com.tw/assets/aefae108-e063-47e6-82aa-24ff35b1c1c6"
            crossorigin
          />
          <a-asset-item
            id="avatarModel"
            src="https://apdc.api.apdc.com.tw/mindar_gltf_files/test/kala/kala.glb"
            crossorigin
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
          <!-- <a-plane
            src="#card"
            position="0 0 0"
            height="2"
            width="1"
            rotation="0 0 0"
          ></a-plane> -->
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="1 1 1"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
      <v-btn></v-btn>
    </div>
    <!-- <div class="absolute bottom-0 z-50 h-32">
      <v-btn @click="stop">stop</v-btn>
    </div> -->
  </div>
</template>

<script>
import "mind-ar/dist/mindar-image.prod.js";
import Title from "@/components/title.vue";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { get, BASEURL } from "@/api/request";
let renderer = null;
let arSystem = null;
let entity = null;
const PROJECT_ID = "c1a6dc87-780c-4fe4-aea1-8334058bf0ee"; //directus的mindar project ID
export default {
  data() {
    return {
      start: false,
      mindar_project: { name: "" },
      BASEURL,
    };
  },
  async created() {
    const { data } = await get({
      collection: `mindar_projects/${PROJECT_ID}`,
      params: { fields: "*,files.*,mindar_targets.*" },
    });
    this.mindar_project = data;
    console.log(data);
  },
  computed: {
    mindar_mind_file() {
      const setting_start = "imageTargetSrc:";
      const setting = "uiScanning:no";
      return `${setting_start}${BASEURL}/assets/${this.mindar_project.mindar_mind_file};${setting}`;
    },
  },
  components: { Title },
  methods: {
    render() {
      this.$nextTick(() => {
        console.log("render start");
        let sceneEl = document.querySelector("a-scene");
        sceneEl.addEventListener("arReady", (event) => {
          console.log("AR is ready");
        });
        entity = document.querySelector("a-entity");
        renderer = sceneEl.renderer;
        arSystem = sceneEl.systems["mindar-image-system"];
        console.log(arSystem);
      });
    },
    stop() {
      // renderer.setAnimationLoop(null);
      // entity.pause();
      // arSystem.stop();
      // const mindarUIs = document.getElementsByClassName("mindar-ui-overlay");
      // for (let dom of mindarUIs) {
      //   dom.remove();
      // }
      window.location.reload();
    },
  },
  beforeDestroy() {
    if (renderer) {
      this.stop();
    }
  },
};
</script>
