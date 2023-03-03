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
    <div
      class="absolute inset-0 z-0 w-full h-screen flex justify-center items-center"
      v-if="start"
      id="ar-container"
    >
      <a-scene
        :mindar-image="mindar_mind_file"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        crossorigin
      >
        <a-assets>
          <a-asset-item
            v-for="(item, index) in mindar_project.mindar_targets"
            v-if="item.gltf_file_url"
            :id="asset_item_id(index)"
            :src="item.gltf_file_url"
            crossorigin
          ></a-asset-item>
          <video id="ar_video" crossorigin></video>
        </a-assets>

        <a-camera
          position="0 0 0"
          look-controls="enabled: false"
          cursor="fuse: false; rayOrigin: mouse;"
          raycaster="far: ${customFields.libVersion}; objects: .clickable"
        ></a-camera>

        <a-entity
          v-for="(item, index) in mindar_project.mindar_targets"
          :mindar-image-target="`targetIndex: ` + index"
          @targetFound="onTargetFound(item, index)"
          @targetLost="onTargetLost(item, index)"
        >
          <!-- <a-plane class="clickable" @click="test(index)"></a-plane> -->
          <a-video
            v-if="item.video_url"
            src="#ar_video"
            width="1.6"
            height="0.9"
          ></a-video>

          <a-text v-if="item.post" :value="item.post"></a-text>

          <a-gltf-model
            v-if="item.gltf_file_url"
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="1 1 1"
            :src="'#asset_item_id_' + index"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
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
      ar_video: false,
    };
  },
  async created() {
    await this.init();
  },
  computed: {
    mindar_mind_file() {
      const setting_start = "imageTargetSrc:";
      // const setting = "uiScanning:no;filterMinCF:0.1; filterBeta: 10";
      const setting = "";
      return `${setting_start}${BASEURL}/assets/${this.mindar_project.mindar_mind_file};${setting}`;
    },
  },
  components: { Title },
  methods: {
    async init() {
      const { data } = await get({
        collection: `mindar_projects/${PROJECT_ID}`,
        params: { fields: "*,files.*,mindar_targets.*" },
      });
      this.mindar_project = data;
      console.log(data);
    },
    asset_item_id(index) {
      return `asset_item_id_${index}`;
    },
    onTargetFound(item, index) {
      console.log(item, index);
      if (item.video_url) {
        this.playVideo(item);
      }
    },
    async onTargetLost(item, index) {
      if (item.video_url) {
        console.log(`video: ${item.video_url}`, "Lost");
        document.querySelector(`#ar_video`).pause();
      }
      await this.init();
    },
    test(index) {
      console.log(index);
    },
    playVideo(item) {
      console.log("video", item);
      const video = document.querySelector("#ar_video");
      video.setAttribute("src", item.video_url);

      console.log(video);
      video.play();
    },

    fixStraightScreen(arCameraPlane) {
      arCameraPlane.style.left = `0`;
      if (screen.height > screen.width) {
        arCameraPlane.style.maxWidth = `999999px`;
        arCameraPlane.style.left = `${-(
          arCameraPlane.offsetWidth / 2 -
          screen.width / 2
        )}px`;
      }
    },

    render() {
      this.$nextTick(() => {
        const sceneEl = document.querySelector("a-scene");
        sceneEl.addEventListener("arReady", (event) => {
          console.log("AR is ready");
          const arContainer = document.getElementById("ar-container");
          const [video, arCameraPlane] = arContainer.querySelectorAll("video");
          this.fixStraightScreen(arCameraPlane);
          window.onresize = () => {
            this.fixStraightScreen(arCameraPlane);
          };

          console.log("ar camera plane ", arCameraPlane);
        });
        entity = document.querySelector("a-entity");
        renderer = sceneEl.renderer;
        arSystem = sceneEl.systems["mindar-image-system"];
        console.log(arSystem);
      });
    },
    stop() {
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
