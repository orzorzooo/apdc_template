<template>
  <div>
    <v-img
      v-if="this.project && this.project.files.length > 0"
      :lazy-src="
        assetURL(this.project.files[0].directus_files_id, {
          params: { quality: 10 },
        })
      "
      :src="assetURL(this.project.files[0].directus_files_id)"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
      height="50vh"
    >
      <div class="flex justify-center items-center text-white h-full">
        <div class="md:text-4xl font-bold">{{ project.name }}</div>
      </div>
    </v-img>
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
import { get, assetURL } from "@/api/request";
export default {
  props: ["id"],
  components: { VueMarkdown },
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
