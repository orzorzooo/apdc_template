<template>
  <div>
    <VuePannellum
      :src="pano_src"
      style="height: 500px"
      v-if="pano_src"
    ></VuePannellum>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
import { get } from "@/api/request";
import VuePannellum from "vue-pannellum";
export default {
  components: { VuePannellum },
  props: ["id"],
  data() {
    return {
      quality: 80,
      pano: null,
      pano_src: null,
    };
  },
  computed: {
    img() {
      return assetURL(`4b7aede6-baa0-4f26-9889-382331b7b7b9`, {
        quality: this.quality,
      });
    },
  },
  async created() {
    this.pano = await get({
      url: `pano_projects/${this.id}`,
      params: { fields: "*,scenes.*" },
    });
    let scenes = {};
    for (let item of this.pano.scenes) {
      scenes[item.name] = {
        ...item,
        hotSpots: item.hotspots,
        panorama: assetURL(`${item.panorama}`, {
          quality: this.quality,
        }),
      };
    }
    const defaultPano = {
      sceneFadeDuration: 1000,
      showControls: false,
      firstScene: this.pano.scenes[0].name,
    };
    this.pano_src = { default: defaultPano, scenes };
    console.log(this.pano_src);
  },
};
// https://apdc.api.apdc.com.tw/assets/6dd619bb-d9a8-4fe1-b838-6ed7f2a449c2?quality=80&
// https://apdc.api.apdc.com.tw/assets/89e90305-892d-4820-9c06-b7931428156d?quality=80&
</script>
<style>
.custom-hotspot {
  height: 30px;
  width: 30px;
  background-color: #fff;
  border-radius: 3rem;
}
</style>
