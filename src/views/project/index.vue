<template>
  <div v-if="project">
    <v-img
      v-if="this.project && this.project.files.length > 0"
      :lazy-src="
        assetURL(this.project.files[0].directus_files_id, {
          quality: 10,
          width: 300,
        })
      "
      :src="assetURL(this.project.files[0].directus_files_id, { quality: 80 })"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
      height="50vh"
    >
      <div class="flex justify-center items-center text-white h-full">
        <div class="md:text-4xl font-bold">{{ project.name }}</div>
      </div>
    </v-img>
    <ImgIcon v-else class="h-50vh">
      <div class="flex justify-center items-center text-white h-full">
        <div class="md:text-4xl font-bold">{{ project.name }}</div>
      </div>
    </ImgIcon>
    <v-container>
      <VueMarkdown
        v-if="project && project.post"
        :source="project.post"
      ></VueMarkdown>
    </v-container>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import ImgIcon from "@/components/imgIcon.vue";
import { get, assetURL } from "@/api/request";
export default {
  props: ["id"],
  components: { VueMarkdown, ImgIcon },
  data() {
    return {
      project: null,
      assetURL,
    };
  },
  async created() {
    this.project = await get({ url: `projects/${this.id}` });
  },
};
</script>
