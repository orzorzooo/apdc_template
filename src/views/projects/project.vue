<template>
  <div v-if="project" class="bg-gray-800">
    <v-img
      v-if="this.project && this.project.files.length > 0"
      :lazy-src="
        assetURL(this.project.files[0].directus_files_id, {
          quality: 10,
          width: 300,
        })
      "
      :src="
        assetURL(this.project.files[0].directus_files_id, {
          quality: 80,
          width: 1280,
        })
      "
      gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,.7)"
      :height="$vuetify.breakpoint.xsOnly ? '30vh' : '50vh'"
    >
      <div
        class="flex justify-center items-center text-white h-full"
        data-aos="fade"
        data-aos-delay="300"
      >
        <div class="w-2/3">
          <div class="text-sm mb-1 text-orange-500">PROJECTS</div>
          <div
            class="text-2xl md:text-3xl font-bold border-l-3 border-orange-500 px-3"
          >
            {{ project.name }}
          </div>
        </div>
      </div>
    </v-img>
    <ImgIcon v-else class="h-50vh">
      <div
        class="flex justify-center items-center text-white h-full"
        data-aos="fade"
      >
        <div class="md:text-4xl font-bold">{{ project.name }}</div>
      </div>
    </ImgIcon>
    <v-container>
      <VueMarkdown
        v-if="project && project.post"
        :source="project.post"
      ></VueMarkdown>
    </v-container>
    <v-container class="py-10">
      <Gallery :project="project"></Gallery>
    </v-container>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import ImgIcon from "@/components/imgIcon.vue";
import Gallery from "./components/gallery.vue";
import { get, assetURL } from "@/api/request";
export default {
  props: ["id"],
  components: { VueMarkdown, ImgIcon, Gallery },
  data() {
    return {
      project: null,
      assetURL,
    };
  },
  async created() {
    const { data } = await get({ collection: `projects/${this.id}` });
    this.project = data;
    console.log("prpppp", data);
  },
};
</script>
