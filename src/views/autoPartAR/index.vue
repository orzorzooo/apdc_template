<template>
  <div class="pt-15 bg-gray-800">
    <v-btn @click="ar = true">啟動AR</v-btn>
    <div class="absolute inset-0 z-50" v-if="ar">
      <a-scene
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind;"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        crossorigin
      >
        <a-assets>
          <img
            id="card"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png"
            crossorigin
          />
          <a-asset-item
            id="avatarModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
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
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  </div>
</template>

<script>
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
