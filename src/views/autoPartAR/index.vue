<template>
  <div>
    <mindarViewer :start="ar"></mindarViewer>
  </div>
</template>

<script>
// 在目前的狀態下有一些問題
// a-plane可有可無，看情形導入圖片即可
// todo: a-scene要拆組件
// todo: gltf檔是掛在mindar_gltf_files這個路徑下，此路徑由caddy控管
// todo: directus後台在處理gltf檔的部份要重新調整
import mindarViewer from "./components/mindarViewer.vue";
export default {
  components: { mindarViewer },
  data() {
    return {
      ar: false,
    };
  },

  // beforeRouteLeave(to, from, next) {
  //   const mindarUIs = document.getElementsByClassName("mindar-ui-overlay");
  //   for (let dom of mindarUIs) {
  //     dom.remove();
  //   }
  //   this.ar = false;
  //   next();
};
</script>
