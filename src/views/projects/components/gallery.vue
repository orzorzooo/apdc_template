<template>
  <v-row>
    <v-col cols="6" md="4" v-for="(item, i) in files" :key="i">
      <v-img :src="item" width="100%"></v-img>
    </v-col>
  </v-row>
</template>
<script>
import { get, assetURL } from "@/api/request";
import { computed } from "vue";
export default {
  props: ["project"],
  methods: {},
  data() {
    return {
      files: [],
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
  },
  computed: {
    // async images() {
    //   const files = await get({
    //     type: "files",
    //     filters: { folder: { _eq: this.project.folder } },
    //   });
    //   return files.map((item) => assetURL(item.id));
    // },
  },
};
</script>
