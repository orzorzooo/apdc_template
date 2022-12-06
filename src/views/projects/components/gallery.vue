<template>
  <v-row>
    <v-col cols="6" md="4" v-for="(item, i) in files" :key="i">
      <v-img
        :src="item"
        width="100%"
        @click="
          visible = true;
          index = i;
        "
      ></v-img>
    </v-col>
    <vue-easy-lightbox
      moveDisabled
      :loop="true"
      :visible="visible"
      :imgs="files_h_quality"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </v-row>
</template>
<script>
import { get, assetURL } from "@/api/request";
import { computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  props: ["project"],
  components: { VueEasyLightbox },
  methods: {
    handleHide() {
      this.visible = false;
    },
  },
  data() {
    return {
      files: [],
      files_h_quality: [],
      visible: false,
      index: 0,
    };
  },
  async created() {
    if (!this.project.folder) return;
    const files = await get({
      type: "files",
      params: { filter: { folder: { _eq: this.project.folder } } },
    });
    this.files = files.map((item) =>
      assetURL(item.id, { quality: 50, width: 1024 })
    );
    this.files_h_quality = files.map((item) =>
      assetURL(item.id, { quality: 85, width: 1920 })
    );
  },
};
</script>
