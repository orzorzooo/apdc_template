<template>
  <div class="pt-15 bg-gray-800">
    <v-btn @click="ar = true">啟動AR</v-btn>
    <div class="absolute inset-0 z-50" v-if="ar">
      <a-scene
        mindar-image="imageTargetSrc:https://apdc.api.apdc.com.tw/assets/6c0a39d8-ffcf-4c2c-95ed-48d43c390e42;"
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
            src="https://apdc.api.apdc.com.tw/mindar_gltf_files/test/shiba/scene.gltf"
            crossorigin
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="1 1 1"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  </div>
</template>

<script>
// 在目前的狀態下有一些問題
// todo: a-scene要拆組件
// todo: gltf檔是掛在mindar_gltf_files這個路徑下，此路徑由caddy控管
// todo: directus後台在處理gltf檔的部份要重新調整
export default {
  data() {
    return {
      ar: false,
      img: require("@/assets/ar/card.png"),
    };
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    const mindarUIs = document.getElementsByClassName("mindar-ui-overlay");
    for (let dom of mindarUIs) {
      dom.remove();
    }
    this.ar = false;
    next();
  },
};
</script>
